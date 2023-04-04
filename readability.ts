import { Readability } from "https://esm.sh/@mozilla/readability@0.4.4";
import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.33-alpha/deno-dom-wasm.ts";

export async function getHtml(url: string) {
  const response = await fetch(url);
  const html = await response.text();
  return html;
}

export function getReadability(html: string) {
  const dom = new DOMParser().parseFromString(html, "text/html");
  const readability = new Readability(dom!);
  return readability.parse();
}
