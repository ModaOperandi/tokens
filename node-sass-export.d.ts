declare module "node-sass-export" {
  import { FunctionDeclarations, SyncSassFunction } from 'node-sass';
  function node_sass_export(path: string): FunctionDeclarations<SyncSassFunction>;
  export = node_sass_export
}
