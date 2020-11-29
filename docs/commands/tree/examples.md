# Tree examples <!-- omit in toc -->

## Table of contents <!-- omit in toc -->

- [ディレクトリのみ表示](#ディレクトリのみ表示)
- [リスト表示](#リスト表示)
- [指定したディレクトリから相対パスでリスト表示](#指定したディレクトリから相対パスでリスト表示)
- [条件に合うファイルを除外](#条件に合うファイルを除外)
- [条件に合うファイルのみ表示](#条件に合うファイルのみ表示)
- [日本語表示](#日本語表示)
- [色付きで表示](#色付きで表示)

## ディレクトリのみ表示

```sh
$ tree -d foo/
foo/
├── bar
└── baz

2 directories
```

## リスト表示

```sh
$ tree -i foo/
foo/
bar
a.md
baz
b.txt

2 directories, 2 files
```

## 指定したディレクトリから相対パスでリスト表示

```sh
$ tree -i -f foo/
foo
foo/bar
foo/bar/a.md
foo/baz
foo/baz/b.txt

2 directories, 2 files
```

## 条件に合うファイルを除外

```sh
$ tree -I "bar" foo/
foo/
└── baz
    └── b.txt

1 directory, 1 file

# Multiple
$ tree -I "bar|baz" foo/
foo/

0 directories, 0 files

# Wildcard
$ tree -I "ba?" foo/
foo/

0 directories, 0 files
```

## 条件に合うファイルのみ表示

```sh
$ tree -P "bar" foo/
foo/
├── bar
└── baz

2 directories, 0 files

# Wildcard
$ tree -P "*.md" foo/
foo/
├── bar
│   └── a.md
└── baz

2 directories, 1 file
```

## 日本語表示

```sh
$ tree -N foo/
foo/
└── bar
    └── テキスト.txt

1 directory, 1 file
```

## 色付きで表示

```sh
$ tree -C foo/
foo/
├── bar
│   └── a.md
└── baz
    └── b.txt

2 directories, 1 file
```
