import { Hono } from "hono";
import { cors } from "hono/middleware";
import { serve } from "http-server";
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
