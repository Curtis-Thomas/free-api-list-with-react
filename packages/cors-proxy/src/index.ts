/// <reference types="@cloudflare/workers-types" />
import ALLOWED_HOSTS from "./allowlist.generated.json";

const ALLOWED = new Set<string>(ALLOWED_HOSTS);

function corsHeaders(origin: string | null): HeadersInit {
  return {
    "Access-Control-Allow-Origin": origin ?? "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
}

export default {
  async fetch(request: Request): Promise<Response> {
    const requestUrl = new URL(request.url);
    const origin = request.headers.get("origin");

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    const target = requestUrl.searchParams.get("url");
    if (!target) {
      return new Response("Missing ?url= parameter", { status: 400, headers: corsHeaders(origin) });
    }

    let targetUrl: URL;
    try {
      targetUrl = new URL(target);
    } catch {
      return new Response("Invalid url parameter", { status: 400, headers: corsHeaders(origin) });
    }

    if (!ALLOWED.has(targetUrl.host)) {
      return new Response(`Host "${targetUrl.host}" is not in the catalog allowlist`, {
        status: 403,
        headers: corsHeaders(origin),
      });
    }

    const upstreamInit: RequestInit = { method: request.method };
    if (!["GET", "HEAD"].includes(request.method)) {
      upstreamInit.body = await request.text();
      upstreamInit.headers = {
        "Content-Type": request.headers.get("content-type") ?? "application/json",
      };
    }

    const upstream = await fetch(targetUrl.toString(), upstreamInit);
    const body = await upstream.text();
    const headers = new Headers(corsHeaders(origin));
    const upstreamContentType = upstream.headers.get("content-type");
    if (upstreamContentType) headers.set("content-type", upstreamContentType);

    return new Response(body, { status: upstream.status, headers });
  },
};
