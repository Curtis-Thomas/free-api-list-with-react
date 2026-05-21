// Skeleton Cloudflare Worker entry for the eventual remote MCP HTTP endpoint
// at freeapilist.com/mcp. Full wiring is a phase-6+ follow-up.
//
// The implementation will mirror src/index.ts but use the SDK's
// StreamableHTTPServerTransport instead of stdio, and bundle the
// catalog JSON at build time (Workers have no filesystem).

export interface Env {
  // bindings (KV, Durable Objects, secrets) go here when the HTTP transport is wired up
  [key: string]: unknown;
}

export default {
  async fetch(_request: Request, _env: Env): Promise<Response> {
    return new Response(
      JSON.stringify({
        status: "not-implemented",
        message: "MCP HTTP transport is not yet wired up. Use the stdio server via npx for now.",
      }),
      { status: 501, headers: { "content-type": "application/json" } },
    );
  },
};
