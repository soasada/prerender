<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Suspense>
      <template #default>
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import {defineAsyncComponent, defineComponent} from 'vue';
import LoadingComponent from '../components/LoadingComponent.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld: defineAsyncComponent({
      loader: () => import('../components/HelloWorld.vue'),
      delay: 200,
      timeout: 3000,
      errorComponent: LoadingComponent,
      loadingComponent: LoadingComponent
    })
  }
});
</script>
