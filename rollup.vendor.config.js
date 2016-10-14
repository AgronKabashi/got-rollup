import alias from "rollup-plugin-alias";
import buble from "rollup-plugin-buble";
import filesize from "rollup-plugin-filesize";
import nodeResolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";

const config = require("./package.json").config;

export default {
  context: "this",
  dest: config.build.vendorFile,
  entry: config.vendor.entrypoint,
  format: "iife",
  moduleName: config.vendor.moduleName,
  plugins: [
    alias({
      rxjs: `${__dirname}/node_modules/rxjs-es`
    }),
    nodeResolve({
      jsnext: true,
      module: true
    }),
    buble(),
    filesize(),
    //uglify()
  ]
};