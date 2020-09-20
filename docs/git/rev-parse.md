# rev-parse

Documentation: <https://git-scm.com/docs/git-rev-parse>

```sh
$ git rev-parse -h
usage: git rev-parse --parseopt [<options>] -- [<args>...]
   or: git rev-parse --sq-quote [<arg>...]
   or: git rev-parse [<options>] [<arg>...]

Run "git rev-parse --parseopt -h" for more information on the first usage.
```

## コミットハッシュの取得

`HEAD` のコミットハッシュを取得する。

```sh
$ git rev-parse HEAD

# 短縮形（オプションの順番に注意）
$ git rev-parse --short HEAD
```

## References

- [Git で現在のコミットのハッシュを取得する方法 | gotohayato.com](https://gotohayato.com/content/85/)
