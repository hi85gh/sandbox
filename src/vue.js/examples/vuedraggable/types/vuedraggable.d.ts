/**
 * vuedraggable に `change` イベントの型定義がないため追加
 * @see {@link https://github.com/SortableJS/vue.draggable.next#events README.md}
 * @see {@link https://github.com/SortableJS/vue.draggable.next/blob/master/src/vuedraggable.d.ts vuedraggable.d.ts}
 */
declare module 'vuedraggable' {
  type AddedContext<T> = {
    element: T
    newIndex: number
  }

  type MovedContext<T> = {
    element: T
    newIndex: number
    oldIndex: number
  }

  type RemovedContext<T> = {
    element: T
    oldIndex: number
  }

  export type ChangeEvent<T> =
    | { added: AddedContext<T> }
    | { moved: MovedContext<T> }
    | { removed: RemovedContext<T> }
}
