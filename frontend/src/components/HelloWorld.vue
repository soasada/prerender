<template>
  <h1>{{ msg }}</h1>
  <button @click="store.dispatch('add')">store count is: {{ store.getters.getCounter }}</button>
  <br>
  <button @click="count++">count is: {{ count }}</button>
  <br>
  <div v-if="store.getters.getOrder">
    <h2>Order No: {{ store.getters.getOrder.id }}</h2>
    <br>
    <h3>Order Product: {{ store.getters.getOrder.product }}</h3>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import {useStore} from 'vuex';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const store = useStore();
    const count = ref(0);

    onMounted(() => {
      console.log('On Mounted');
      store.dispatch('fetchOrder');
    });

    return {store, count};
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
