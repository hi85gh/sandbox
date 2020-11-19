# json-server

- Repository: <https://github.com/typicode/json-server>
- Release notes: <https://github.com/typicode/json-server/releases>
- Changelog: <https://github.com/typicode/json-server/blob/master/CHANGELOG.md>
  - json-server version <= `0.15.0`

## Usage

json-server の起動。

```sh
$ npm start
```

### GET

リソースの取得。

```sh
# All
$ curl localhost:3000/api/posts
[
  {
    "id": 1,
    "nested": {
      "title": "foo"
    }
  },
  {
    "id": 2,
    "nested": {
      "title": "bar"
    }
  },
  {
    "id": 3,
    "nested": {
      "title": "baz"
    }
  }
]

# Select
$ curl localhost:3000/api/posts?id=1
[
  {
    "id": 1,
    "nested": {
      "title": "foo"
    }
  }
]

$ curl 'localhost:3000/api/posts?id=1&id=2'
[
  {
    "id": 1,
    "nested": {
      "title": "foo"
    }
  },
  {
    "id": 2,
    "nested": {
      "title": "bar"
    }
  }
]

$ curl localhost:3000/api/posts?nested.title=foo
[
  {
    "id": 1,
    "nested": {
      "title": "foo"
    }
  }
]

# Sort
$ curl 'localhost:3000/api/posts?_sort=id&_order=desc'
[
  {
    "id": 3,
    "nested": {
      "title": "baz"
    }
  },
  {
    "id": 2,
    "nested": {
      "title": "bar"
    }
  },
  {
    "id": 1,
    "nested": {
      "title": "foo"
    }
  }
]
```

### POST

リソースの新規作成。

```sh
$ curl -H 'Content-Type:application/json' -d '{"nested":{"title":"qux"}}' localhost:3000/api/posts
{
  "nested": {
    "title": "qux"
  },
  "id": 4
}
```

### PUT

リソースの更新。  
対象のリソースは `/:id` で指定。

```sh
$ curl -X PUT -H 'Content-Type:application/json' -d '{"nested":{"title":"foofoo"}}' localhost:3000/api/posts/1
{
  "nested": {
    "title": "foofoo"
  },
  "id": 1
}
```

### DELETE

リソースの削除。  
対象のリソースは `/:id` で指定。

```sh
$ curl -X DELETE localhost:3000/api/posts/1
{}
```

## Commentaries

- <https://app.codegrid.net/entry/2017-json-server-1>
