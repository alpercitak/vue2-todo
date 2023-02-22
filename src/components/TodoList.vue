<template>
  <div class="main">
    <div class="container-add">
      <TodoListAdd />
    </div>
    <div class="container-todo-list">
      <TodoListBoard :title="'All'" :data="getTodoList" />
      <TodoListBoard :title="'Not Done'" :data="getTodoListNotDone" />
      <TodoListBoard :title="'Done'" :data="getTodoListDone" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapGetters, mapState} from 'vuex';
import TodoListAdd from './TodoListAdd.vue';
import TodoListBoard from './TodoListBoard.vue';

export default Vue.extend({
  name: 'TodoList',
  components: {
    TodoListAdd,
    TodoListBoard,
  },
  computed: {
    ...mapState(['list']),
    ...mapGetters(['getTodoList', 'getTodoListNotDone', 'getTodoListDone']),
  },
  created() {
    const storageKey = 'list';

    try {
      const data = localStorage.getItem(storageKey);
      if (data) {
        const dataJson = JSON.parse(data);
        this.$store.state.list = dataJson;
      }
    } catch (e) {
      console.warn(e);
    }

    this.$store.subscribe((mutation, state) => {
      localStorage.setItem(storageKey, JSON.stringify(state.list));
    });
  },
});
</script>

<style scoped lang="scss">
.main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .container-add {
    display: flex;
    gap: 8px;
    flex-direction: row;
  }

  .container-todo-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
  }
}
</style>
