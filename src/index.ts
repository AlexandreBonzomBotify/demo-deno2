import { serve } from "https://deno.land/std@0.85.0/http/server.ts";

let port = parseInt(Deno.env.get("PORT") ?? "8000");
const s = serve({ port });

for await (const req of s) {
  req.respond({
    body: `<h1>Basic example of Deno <img src="https://deno.land/logo.svg" style="height: 48px;" alt="deno logo" /></h1>\n<div>Hello World</div>\n<div>Rendered at: ${new Date().toISOString()}</div>`,
  });
}
