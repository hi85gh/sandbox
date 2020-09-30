# JSDoc

- Repository: <https://github.com/jsdoc/jsdoc>
- Documentation: <https://jsdoc.app/>
- Changelog: <https://github.com/jsdoc/jsdoc/blob/master/CHANGES.md>

## Issues

JSDoc は拡張子 `.mjs` をサポートしない。  
直接 `.mjs` ファイルを指定しても `source.includePattern` の設定を変更しても認識しない。

```
{
  "source": {
    "includePattern": ".+\\.(js(doc|x)?|mjs)$"
  }
}
```

Reference: <https://github.com/jsdoc/jsdoc/issues/1430>
