# Vue 3

- Official site: <https://v3.vuejs.org/>
- Repository: <https://github.com/vuejs/vue-next>
- Release notes: <https://github.com/vuejs/vue-next/releases>
- Style guide: <https://v3.vuejs.org/style-guide/>

## Notes

### Vetur

Vue 3 を使用する場合は Vetur の設定を変更。

<!-- prettier-ignore -->
```vue
<template>
  <div />
  <div /> <!-- error  The template root requires exactly one element  vue/no-multiple-template-root -->
</template>
```

`.vscode/settings.json`

```json
{
  "vetur.validation.template": false
}
```

- Reference:
  - <https://vuejs.github.io/vetur/guide/linting-error.html>
