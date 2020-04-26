<template>
    <v-layout>
        <v-list
            nav
            width="100%"
            class="py-2"
            >
          <v-divider></v-divider>
          
          <cubesample v-if="showcubesample" ref="cubesample"></cubesample>
          <div v-else>
            <v-subheader  class="subheader">赞助商</v-subheader>
            <Sponsor :model="sponsorindex"></Sponsor>
          </div>
          
          <v-divider></v-divider>
          <v-subheader class="subheader">虚拟魔方</v-subheader>
       
          <Vscube
            @switch2cubesample="switch2cubesample"

          ></Vscube>



          <v-divider></v-divider>
          <v-subheader class="subheader">账号</v-subheader>
          <Account></Account>

          <v-divider></v-divider>
          <v-subheader class="subheader">热门</v-subheader>
          <Hot></Hot>

          <v-divider></v-divider>
          <v-subheader>统计</v-subheader>
          <Statistic ref="stats"></Statistic>
        </v-list>
    </v-layout>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop, Ref, Provide, Watch } from "vue-property-decorator";
import Sponsor from './navcomponent/sponsor.vue'
import Account from './navcomponent/account.vue'
import Hot from './navcomponent/hot.vue'
import Statistic from './navcomponent/statistic.vue'
import Vscube from './navcomponent/vscube.vue'

@Component({ name: "App", components: {Account, Hot, Sponsor, Statistic, Vscube} })
export default class App extends Vue {

    @Prop()
    isopend!: boolean

    showcubesample: boolean = false
    sponsorindex: number = -1

    @Ref('stats') stats: Statistic


    @Watch('isopend')
    onIsopendChange(){
      if(this.isopend){
        this.stats.gsapdata()
      }else{
        this.showcubesample = false
      }
    }

    switch2cubesample(){
      this.showcubesample = true
    }
}


</script>

<style scoped>
.subheader{
  height: 25px;
  padding-top: 10px;
}
</style>