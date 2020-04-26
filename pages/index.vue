/* eslint-disable no-console */

<template>
  <v-layout column justify-center align-center>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  asyncData({$axios}){
    // const users = $axios.$get('users')
    // console.log(users)
  }
})

export default class Home extends Vue {
  // eslint-disable-next-line space-before-function-paren
  async fetch() {
    // const res = await this.$axios.get("users");
  }

  created() {
    // this.fetch();
  }
}
</script>
