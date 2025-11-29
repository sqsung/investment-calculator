/** @type {import('prettier').Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tailwindStylesheet: "./src/index.css",
};
