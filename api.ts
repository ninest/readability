import { Hono } from "https://deno.land/x/hono@v3.1.5/mod.ts";
import { cors } from "https://deno.land/x/hono@v3.0.1/middleware.ts";
import { serve } from "https://deno.land/std@0.178.0/http/server.ts";
import { getHtml, getReadability } from "./readability.ts";

const app = new Hono();

app.use("/*", cors());

app.get("/:url", async (c) => {
  const url = c.req.param("url");
  const html = await getHtml(url);
  const readability = getReadability(html);

  return c.json(readability);
});

serve(app.fetch, { port: 8000 });
