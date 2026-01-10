<template>
  <div class="container">
    <div>{{ title }}</div>
    <div v-for="item in data" v-bind:key="item.id" class="todo-item" :class="{ done: item.isDone }">
      <div>{{ item.text }}</div>
      <div class="actions">
        <div class="invert" v-on:click="invertItem(item.id)">Invert</div>
        <div class="remove" v-on:click="removeItem(item.id)">Remove</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { type PropType } from 'vue';
import { mapActions } from 'vuex';
import TodoItem from '@/types/TodoItem';

export default Vue.extend({
  name: 'TodoListBoard',
  props: {
    data: Array as PropType<Array<TodoItem>>,
    title: String,
  },
  methods: {
    ...mapActions(['remove', 'invert']),
    removeItem(id: string): void {
      this.remove(id);
    },
    invertItem(id: string): void {
      this.invert(id);
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 8px;
  flex-direction: column;
  flex: 1;

  .todo-item {
    border: 1px solid #eee;
    display: flex;
    flex-direction: row;
    padding: 4px;
    justify-content: space-between;
    font-size: 12px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.1);

    &.done {
      background-color: rgba(0, 255, 0, 0.1);
    }

    .actions {
      display: flex;
      gap: 8px;

      .invert,
      .remove {
        cursor: pointer;
      }
    }
  }
}
</style>
