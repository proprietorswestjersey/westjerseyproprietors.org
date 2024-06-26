export interface EleventyConfigOptions {
  readonly dir?: {
    readonly input?: string;
    readonly includes?: string;
    readonly layouts?: string;
    readonly ouput?: string;
  };
}

export interface EleventyConfigExtensionOptions {
  readonly key: string;
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
  eleventyConfig.addExtension(["11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
  });
  return {
    dir: {
      input: "src",
    },
  };
}
