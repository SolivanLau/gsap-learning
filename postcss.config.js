import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import presetEnv from "postcss-preset-env";
import purgeCss from "@fullhuman/postcss-purgecss";

export default {
    plugins: [
        presetEnv({ stage: 1 }),
        autoprefixer(),
        process.env.NODE_ENV === "production"
            ? purgeCss({
                  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
                  variables: true,
                  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
                  safelist: [/-(leave|enter|appear)(|-(to|from|active))$/, /data-theme$/, /dark/],
              })
            : null,
        cssnano(),
    ],
};
