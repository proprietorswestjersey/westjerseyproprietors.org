import { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export interface EleventyConfigOptions {
  readonly dir?: {
    readonly input?: string;
    readonly includes?: string;
    readonly layouts?: string;
    readonly ouput?: string;
  };
}

export interface EleventyConfigExtensionContext {
  defaultRenderer<D = unknown, R = unknown>(data: D): Promise<R>;
}

export interface EleventyConfigExtensionOptions {
  readonly key: string;
  compile(): (
    this: EleventyConfigExtensionContext,
    data: unknown,
  ) => Promise<string>;
}

export interface EleventyConfig {
  addExtension(
    extensions: ReadonlyArray<string>,
    config: EleventyConfigExtensionOptions,
  ): void;
}

export default function (
  eleventyConfig: EleventyConfig,
): EleventyConfigOptions {
  eleventyConfig.addExtension(["11ty.tsx"], {
    key: "11ty.js",
    compile() {
      return async function (data) {
        const content = await this.defaultRenderer<unknown, ReactNode>(data);
        return renderToStaticMarkup(content);
      };
    },
  });
  return {
    dir: {
      input: "src",
    },
  };
}
