<template>
  <div id="app">
   <Navbar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "./components/Navbar.vue";
@Component({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
</script>

<style>
* {
  margin: 0px;
  font-family: "Times New Roman", Times, serif;
}
</style>
