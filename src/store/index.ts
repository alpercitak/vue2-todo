import Vue from 'vue';
import Vuex from 'vuex';
import TodoItem from '../types/TodoItem';

Vue.use(Vuex);

const state = {
  list: [],
};
const getters = {
  getTodoList: (state: any): TodoItem[] => state.list,
  getTodoListNotDone: (state: any): TodoItem => state.list.filter((x: TodoItem) => !x.isDone),
  getTodoListDone: (state: any): TodoItem => state.list.filter((x: TodoItem) => x.isDone),
};
const mutations = {
  add: (state: any, todoItem: TodoItem) => {
    state.list.push(todoItem);
  },
  remove: (state: any, id: string) => {
    const index = state.list.findIndex((x: TodoItem) => x.id === id);
    if (index >= 0) {
      state.list.splice(index, 1);
    }
  },
  invert: (state: any, id: string) => {
    const item = state.list.find((x: TodoItem) => x.id === id);
    if (item) {
      item.isDone = !item.isDone;
      state.list = [...state.list.filter((x: TodoItem) => x.id !== id), item];
    }
  },
};
const actions = {
  add: (context: any, payload: TodoItem) => context.commit('add', payload),
  remove: (context: any, id: string) => context.commit('remove', id),
  invert: (context: any, id: string) => context.commit('invert', id),
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
