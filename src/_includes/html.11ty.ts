import type { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export interface HtmlLayoutData {
  readonly content: ReactNode;
}

export function render({ content }: HtmlLayoutData): string {
  return `<!DOCTYPE html>${renderToStaticMarkup(content)}`;
}
