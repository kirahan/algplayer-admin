<template>
    <div>
        <cubestack :cubeconfig="cubeconfig"></cubestack>
    </div>
</template>

<script lang="ts">
import { Component, mixins, Vue, Watch, Ref } from "nuxt-property-decorator";
import { CubeCongfig } from "cubestack";

@Component({
  name: "Obs2",
  layout: 'obs'
})
export default class Obs2 extends Vue {
  constructor() {
    super();
  }

  cubeconfig: CubeCongfig = {
      model: 'default',
      renderconfig: {
          order: 2,
          coverImgNotModel: false
      },
      playerconfig : {
          autorotate: true,
          lock: false,
          breath: true
      },
      bottomlayer: 'D'
  }
}
</script>