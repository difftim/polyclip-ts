import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";

export default [
  {
    input: "bundle",
    output: {
      file: "dist/.cjs",
      format: "cjs",
      exports: "named",
      file: `dist/index.min.cjs`,
    },
    plugins: [
      resolve(),
      typescript({
        tsconfig: "tsconfig.json",
      }),
      json(),
      terser()
    ],
  }
];
