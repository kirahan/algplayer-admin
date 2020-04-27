<template>
    <div class="pt-5">
        <!-- <cubesample></cubesample> -->
        <a :href="cube1" class="drag-item" color="primary">拖到OBS生成一个2x2的魔方</a>
        <a :href="cube2" class="drag-item" large color="error">定义尺寸为500x500</a>
        <v-divider></v-divider>
        <a :href="cube3" class="drag-item" color="primary">拖到OBS生成一个3x3的魔方</a>
        <a :href="cube4" class="drag-item" large color="error">定义尺寸为300x300</a>
    </div>
</template>

<script lang="ts">
import { Component, mixins, Vue, Watch, Ref } from "nuxt-property-decorator";

@Component({
  name: "Test",
  layout: 'default'
})
export default class Test extends Vue {
  constructor() {
    super();
  }
  cube1 = 'http://localhost:3000/obs2?layer-name=2x2 Cube'
  cube2 = 'http://localhost:3000/obs2?layer-name=2x2 Cube size 500&layer-width=500&layer-height=500'
  cube3 = 'http://localhost:3000/obs3?layer-name=3x3 Cube'
  cube4 = 'http://localhost:3000/obs3?layer-name=3x3 Cube size 300&layer-width=300&layer-height=300'

    message = ''

    event = ''

    mounted(){
    }
}
</script>

<style scoped>
.drag-item{
    display: block;
    margin: 0 6px 12px;
    width: 50%;
    border-radius: 4px;
    background: #2d3243;
    color: #fff;
    padding: 8px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    position: relative;
    top: 0;
    left: 0;
    box-sizing: border-box;
    cursor: move;
    border: none;
    user-select: none;
}
.drag-item:hover{
    background: #359;
}

.bigtitle{
    font-size: 80px;
}
</style>