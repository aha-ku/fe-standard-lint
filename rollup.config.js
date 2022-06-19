import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.esm.js",
      format: "esm",
    },
    {
      file: "dist/bundle.unpkg.js",
      format: "iife",
      name: "TEST",
    },
  ],
  plugins: [resolve(), commonjs(), typescript()],
};
