# vuedraggable

- Official site:
  - v4: <https://sortablejs.github.io/vue.draggable.next/>
  - v2: <https://sortablejs.github.io/Vue.Draggable/>
- Repository:
  - v4: <https://github.com/SortableJS/vue.draggable.next>
  - v2: <https://github.com/SortableJS/Vue.Draggable>
- Release notes:
  - v4: <https://github.com/SortableJS/vue.draggable.next/releases>
  - v2: <https://github.com/SortableJS/Vue.Draggable/releases>

## Notes

`list` プロパティはコンポーネント側で値が変更されてしまうため `list` プロパティは使用せず `modelValue` プロパティを使用する。  
\*ネストされたリストで使用する場合は `change` イベントなどを使って配列を更新する処理が必要。

> Alternative to the `modelValue` prop, list is an array to be synchronized with drag-and-drop.  
> The main difference is that `list` prop is updated by draggable component using splice method, whereas `modelValue` is immutable.
>
> Reference: <https://github.com/SortableJS/vue.draggable.next#list>

## Issues

~~2020 年 11 月時点で vuedraggable は Vue.js v3 に未対応。~~  
~~サポートされるまでの間、vue-draggable-next が代替案として利用可能。~~  
~~\*vue-draggable-next は非公式~~

2020 年 12 月公式リリース。

- `v4.0.1`: <https://github.com/SortableJS/vue.draggable.next/releases/tag/v4.0.1>
- Migration: <https://github.com/SortableJS/vue.draggable.next#migrate-from-vue-2-version>

### Vue.Draggable status

1.  [Vue 3 compatibility · Issue #881 · SortableJS/Vue.Draggable](https://github.com/SortableJS/Vue.Draggable/issues/881)
2.  [Provide Vue 3 compatibility · Issue #942 · SortableJS/Vue.Draggable](https://github.com/SortableJS/Vue.Draggable/issues/942)
3.  [Vue 3 by David-Desmaisons · Pull Request #950 · SortableJS/Vue.Draggable](https://github.com/SortableJS/Vue.Draggable/pull/950)
    - [SortableJS/Vue.Draggable at vue-3](https://github.com/SortableJS/Vue.Draggable/tree/vue-3)

### vue-draggable-next (Unofficial)

- Official site: <https://vue-draggable-next.vercel.app/>
- Repository: <https://github.com/anish2690/vue-draggable-next>
- Release notes: <https://github.com/anish2690/vue-draggable-next/releases>
