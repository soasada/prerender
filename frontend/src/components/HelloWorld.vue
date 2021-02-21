<template>
  <h1>{{ msg }}</h1>
  <button @click="store.dispatch('add')">store count is: {{ store.getters.getCounter }}</button>
  <br>
  <button @click="count++">count is: {{ count }}</button>
  <br>
  <h2>Order No: {{ order.id }}</h2>
  <br>
  <h3>Order Product: {{ order.product }}</h3>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {useStore} from 'vuex';
import fetch from 'node-fetch';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: async () => {
    const store = useStore();
    const count = ref(0);

    const response = await fetch('http://localhost:8080/api/orders');
    const order = await response.json();

    return {store, count, order};
  }
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
