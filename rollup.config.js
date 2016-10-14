import alias from "rollup-plugin-alias";
import babel from "rollup-plugin-babel";
import filesize from "rollup-plugin-filesize";
import includePaths from "rollup-plugin-includepaths";
import json from "rollup-plugin-json";
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from "rollup-plugin-uglify";
import neat from "node-neat";

const packageJson = require("./package.json");
const config = packageJson.config;

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
    json(),
    nodeResolve({
      jsnext: true,
      module: true
    }),
    babel(),
    filesize(),
    //uglify()
  ],
  external: Object.keys(packageJson.dependencies),
  globals: Object.keys(packageJson.dependencies)
    .reduce((result, key) => {
      result[key] = `${config.vendor.moduleName}.${key.replace(/[@\-\/\.]/g, '_')}`;
      return result;
    }, {})
};