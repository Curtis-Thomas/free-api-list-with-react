import type { HttpMethod } from "@free-api-list/catalog";

const PROXY_URL = import.meta.env.VITE_CORS_PROXY_URL as string | undefined;

export interface FetchOptions {
  method: HttpMethod;
  url: string;
  body?: string;
  useProxy?: boolean;
}

export interface FetchResult {
  status: number;
  statusText: string;
  contentType: string | null;
  body: string;
  durationMs: number;
}

function buildProxyUrl(target: string): string {
  if (!PROXY_URL) return target;
  return `${PROXY_URL.replace(/\/$/, "")}/?url=${encodeURIComponent(target)}`;
}

export async function callApi({ method, url, body, useProxy }: FetchOptions): Promise<FetchResult> {
  const start = performance.now();
  const finalUrl = useProxy ? buildProxyUrl(url) : url;

  const init: RequestInit = { method };
  if (body !== undefined && body !== "") {
    init.body = body;
    init.headers = { "Content-Type": "application/json" };
  }

  const response = await fetch(finalUrl, init);
  const text = await response.text();
  return {
    status: response.status,
    statusText: response.statusText,
    contentType: response.headers.get("content-type"),
    body: text,
    durationMs: Math.round(performance.now() - start),
  };
}

export function tryFormatJson(text: string): string {
  try {
    return JSON.stringify(JSON.parse(text), null, 2);
  } catch {
    return text;
  }
}
