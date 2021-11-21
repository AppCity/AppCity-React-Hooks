import styles from "rollup-plugin-styles";
const autoprefixer = require("autoprefixer");
// import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";

// the entry point for the library
const input = "src/index.js";

// File Formats
const MODE = ["cjs", "esm", "umd"];

let config = [];

MODE.map((format) => {
  let conf = {
    input,
    output: {
      name: "appcity-react-hooks",
      file: `dist/index.${format}.js`,
      format,
      exports: "auto",
      sourcemap: true,
      strict: false,
    },
    // this externelizes react to prevent rollup from compiling it
    external: ["react", "react-dom", /@babel\/runtime/],
    plugins: [
      // these are babel comfigurations
      babel({
        exclude: "node_modules/**",
        plugins: ["@babel/transform-runtime"],
        babelHelpers: "runtime",
      }),
      // this adds sourcemaps
      // sourcemaps(),
      // this adds support for styles
      styles({
        postcss: {
          plugins: [autoprefixer()],
        },
      }),
    ],
  };

  config.push(conf);
});

export default [...config];
