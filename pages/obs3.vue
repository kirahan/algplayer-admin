<template>
  <div>
    <cubestack :cubeconfig="cubeconfig" ref="cubestack"></cubestack>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Vue, Watch, Ref } from "nuxt-property-decorator";
import { CubeCongfig, CubeStack } from "cubestack";

@Component({
  name: "Obs3",
  layout: "obs"
})
export default class Obs3 extends Vue {
  constructor() {
    super();
  }

  @Ref("cubestack") cubestack: CubeStack;

  cubeconfig: CubeCongfig = {
    model: "default",
    renderconfig: {
      order: 3,
      coverImgNotModel: false
    },
    playerconfig: {
      autorotate: true,
      lock: false,
      breath: true
    },
    bottomlayer: "B"
  };

  mounted() {
    this.randomeRotate()
  }

  randomeRotate() {
    const quene = ["R", "U", "L", "D", "F", "B"];
    const dir = ["", "'", "2"];
    let r_q = quene[Math.floor(Math.random()*quene.length)]
    let r_d = dir[Math.floor(Math.random()*dir.length)]
    let r_qd = r_q + r_d
    this.cubestack.world.twister.twist(r_qd)
    setTimeout(() => {
        this.randomeRotate()
    }, 2000+ Math.floor(Math.random()*3000));
  }
}
</script>
