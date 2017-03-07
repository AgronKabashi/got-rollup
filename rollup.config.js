import alias from "rollup-plugin-alias";
import babel from "rollup-plugin-babel";
import conditional from "rollup-plugin-conditional";
import filesize from "rollup-plugin-filesize";
import includePaths from "rollup-plugin-includepaths";
import uglify from "rollup-plugin-uglify";

const packageJson = require("./package.json");
const config = packageJson.config;
const isProduction = false;

export default {
  context: "this",
  dest: config.build.appFile,
  entry: config.src.entrypoint,
  format: "iife",
  plugins: [
    alias({
      rxjs: `${__dirname}/node_modules/rxjs-es`
    }),
    includePaths({
      paths: [config.src.folder]
    }),
    babel({
      exclude: [
        "node_modules"
      ]
    }),
    filesize({
      render: (options, size, gzip) => `\x1b[32mApplication bundle size: \x1b[33m${size}\x1b[32m, Gzipped size: \x1b[33m${gzip}\x1b[0m`
    }),
    conditional(isProduction, [
      uglify()
    ])
  ],
  external: Object.keys(packageJson.dependencies),
  globals: Object.keys(packageJson.dependencies)
    .reduce((result, key) => {
      result[key] = `${config.vendor.moduleName}.${key.replace(/[@\-\/\.]/g, "_")}`;
      return result;
    }, {})
};