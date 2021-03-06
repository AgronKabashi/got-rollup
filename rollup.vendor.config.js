import alias from "rollup-plugin-alias";
import buble from "rollup-plugin-buble";
import conditional from "rollup-plugin-conditional";
import filesize from "rollup-plugin-filesize";
import nodeResolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";

const config = require("./package.json").config;
const isProduction = false;

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
    filesize({
      render: (options, size, gzip) => `\x1b[32mVendor bundle size: \x1b[33m${size}\x1b[32m, Gzipped size: \x1b[33m${gzip}\x1b[0m`
    }),
    conditional(isProduction, [
      uglify()
    ])
  ]
};