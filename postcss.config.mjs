import postcssPresetEnv from "postcss-preset-env";

const config = {
  plugins: [
    postcssPresetEnv({
      stage: 1,
      features: {
        "color-function": { unresolved: "warn" },
        "lab-function": true,
        "oklab-function": true,
        "oklch-function": true,
      },
    }),
    "@tailwindcss/postcss",
  ],
};

export default config;
