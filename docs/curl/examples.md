# Examples <!-- omit in toc -->

<details>
<summary>Table of contents</summary>

- [JSON 形式での POST](#json-形式での-post)
- [複数ファイルの一括ダウンロード](#複数ファイルの一括ダウンロード)
- [GitHub からソースコードのダウンロード](#github-からソースコードのダウンロード)
- [GitHub からソースコードをダウンロードし任意のディレクトリのみ展開](#github-からソースコードをダウンロードし任意のディレクトリのみ展開)

</details>

## JSON 形式での POST

```sh
$ curl 'http://example.com/entries' \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{"foo":{"bar":"baz"}}'

# Short version
$ curl 'http://example.com/entries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{"foo":{"bar":"baz"}}'
```

## 複数ファイルの一括ダウンロード

複数ファイルを指定する場合は URL を引用符で囲む必要がある。

```sh
$ curl "https://raw.githubusercontent.com/hi85gh/sandbox/main/{foo,bar,baz}/[1-9].md" --output "#1_#2.md"

# Short version
$ curl "https://raw.githubusercontent.com/hi85gh/sandbox/main/{foo,bar,baz}/[1-9].md" -o "#1_#2.md"
```

## GitHub からソースコードのダウンロード

GitHub URL: `https://codeload.github.com/<user_name>/<repository_name>/tar.gz/<branch|tag|commit_hash>`

```sh
$ curl "https://codeload.github.com/hi85gh/sandbox/tar.gz/{main}" --output "#1.zip"

# Short version
$ curl "https://codeload.github.com/hi85gh/sandbox/tar.gz/{main}" -o "#1.zip"
```

## GitHub からソースコードをダウンロードし任意のディレクトリのみ展開

GitHub URL: `https://codeload.github.com/<user_name>/<repository_name>/tar.gz/<branch|tag|commit_hash>`

```sh
$ curl https://codeload.github.com/hi85gh/sandbox/tar.gz/main | \
  tar \
  --extract \
  --gzip \
  --no-same-owner \
  --no-same-permissions \
  --strip-components=1 \
  sandbox-main/docs

# Short version
$ curl https://codeload.github.com/hi85gh/sandbox/tar.gz/main | \
  tar -xzo --no-same-permissions --strip=1 '*/docs'
```
