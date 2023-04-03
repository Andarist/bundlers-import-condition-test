import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "dist/rolluped-cjs.js",
    format: "cjs",
  },
  plugins: [nodeResolve()],
};
