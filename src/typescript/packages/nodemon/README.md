# nodemon

- Official site: <https://nodemon.io/>
- Repository: <https://github.com/remy/nodemon>
  - Example (nodemon.json): <https://github.com/remy/nodemon/blob/master/doc/sample-nodemon.md>
- Release notes: <https://github.com/remy/nodemon/releases>

## Notes

### Extensions

nodemon がデフォルトで変更を監視するファイルは拡張子が `.js`, `.mjs`, `.coffee`, `.litcoffee`, `.json` のファイルのため、TypeScript のプロジェクトでは対象のファイルを変更する必要がある。

- Command line interface

  ```sh
  $ nodemon -e js,pug
  # Or
  $ nodemon --ext js,pug
  ```

- `nodemon.json`

  ```sh
  {
    "ext": "ts"
  }
  ```

- `package.json`

  ```sh
  {
    "nodemonConfig": {
      "ext": "ts"
    }
  }
  ```
