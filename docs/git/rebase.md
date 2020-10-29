# rebase

Documentation: <https://git-scm.com/docs/git-rebase>

```sh
$ git rebase -h
usage: git rebase [-i] [options] [--exec <cmd>] [--onto <newbase> | --keep-base] [<upstream> [<branch>]]
   or: git rebase [-i] [options] [--exec <cmd>] [--onto <newbase>] --root [<branch>]
   or: git rebase --continue | --abort | --skip | --edit-todo
```

## マージコミットを残す

`git rebase` の実行時にマージコミットを残す。  
`--preserve-merges` オプションは `v2.22.0` 以降非推奨になっているため `--rebase-merges` オプションを使用する。

```sh
$ git rebase --interactive --rebase-merges origin/main

# Short hand
$ git rebase -i -r origin/main

# DEPRECATED
$ git rebase --interactive --preserve-merges origin/main
```

_References_

- <https://git-scm.com/docs/git-rebase#Documentation/git-rebase.txt--r>
- <https://git-scm.com/docs/git-rebase#Documentation/git-rebase.txt--p>
- <https://github.com/git/git/blob/master/Documentation/RelNotes/2.22.0.txt#L46>
