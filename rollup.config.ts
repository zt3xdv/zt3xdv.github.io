import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import html from "@rollup/plugin-html";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import swc from "./src/swc.ts";

export default {
  input: "src/main.tsx",
  output: {
    dir: "dist",
    format: "es",
    sourcemap: process.env.NODE_ENV != "production",
    entryFileNames: "assets/[name]-[hash].js",
    assetFileNames: "assets/[name]-[hash][extname]"
  },
  plugins: [
    nodeResolve({
      browser: true
    }),
    commonjs(),
    swc(),
    postcss({
      extract: "assets/styles.css",
      minimize: process.env.NODE_ENV == "production"
    }),
    image(),
    html({
      title: "zt3xdv",
      meta: [
        {
          name: "description",
          content: "I build things, take a look at my website!"
        }
      ],
      template: ({ attributes, files, meta, publicPath, title }) => `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    ${meta.map((item) => `<meta ${Object.entries(item).map(([key, value]) => `${key}="${value}"`).join(" ")}>`).join("\n")}
    ${files.css.map(({ fileName }) => `<link rel="stylesheet" href="${publicPath}${fileName}">`).join("\n")}
  </head>
  <body>
    <div id="app"></div>
    ${files.js.map(({ fileName }) => `<script type="module" src="${publicPath}${fileName}"></script>`).join("\n")}
  </body>
</html>`
    }),
    ...(process.env.NODE_ENV == "production" ? [terser({
      maxWorkers: 1
    })] : [])
  ]
};
