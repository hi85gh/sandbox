# typescript/compile-test

- `enum` はコンパイル後のファイルサイズが増えるため注意
  - `enum` ではなく Union 型を利用する
- Optional Chaining もファイルサイズが増える傾向にある注意
  - `tsconfig.json` で `compilerOptions.target` が `es2020` 以上であれば影響なし
