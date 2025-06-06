import pluginVite from "@11ty/eleventy-plugin-vite";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginVite);

  return {
    dir: {
      input: "src",
    },
  };
}
