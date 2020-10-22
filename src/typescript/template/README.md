# Simple boilerplate for TypeScript project

## Issues

tsconfig-paths は Node.js 環境で動作しないためコンパイル後のファイルを動作する場合は module-alias を使用する。

Reference: <https://github.com/dividab/tsconfig-paths/issues/61>

`tsconfig.json` の `compilerOptions.paths` と module-alias では書式が異なるため注意が必要。

- `compilerOptions.paths`: <https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping>
- module-alias: <https://github.com/ilearnio/module-alias#usage>
