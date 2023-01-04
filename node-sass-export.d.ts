declare module "@moda/node-sass-export" {
  import { CustomFunction } from 'sass';
  function node_sass_export(path: string, name?: string): {[key: string]: CustomFunction<'sync'>};
  export = node_sass_export
}
