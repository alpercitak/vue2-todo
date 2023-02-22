<template>
  <div class="container">
    <input type="text" v-model="newItem" v-on:keyup.enter="addItem" />
    <button v-on:click="addItem">Add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import { uuid } from 'vue-uuid';

export default Vue.extend({
  name: 'TodoListAdd',
  data () {
    return {
      newItem: '',
      uuid: uuid,
    }
  },
  methods: {
    ...mapActions(['add']),
    addItem(): void {
        if (!this.newItem) {
        return;
      }
      this.add({id: uuid.v1(), text: this.newItem});
      this.newItem = '';
    },
  }
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 8px;
}
</style>

