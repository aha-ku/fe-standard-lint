import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
const pkgName = pkg.name;
const bundleDirName = "dist";
export default {
  input: "src/index.ts",
  output: [
    {
      file: `${bundleDirName}/${pkgName}.esm.js`,
      format: "esm",
    },
    {
      file: `${bundleDirName}/${pkgName}.unpkg.js`,
      format: "iife",
      name: "TEST",
    },
    {
      file: `${bundleDirName}/${pkgName}.esm.min.js`,
      format: "esm",
      plugins: [terser()],
    },
    {
      file: `${bundleDirName}/${pkgName}.unpkg.min.js`,
      format: "iife",
      name: "TEST",
      plugins: [terser()],
    },
  ],
  plugins: [resolve(), commonjs(), typescript()],
};
