<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoList from './components/TodoList.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TodoList,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
