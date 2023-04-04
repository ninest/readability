import { Readability } from "@mozilla/readability";
import { DOMParser } from "deno-dom";

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
