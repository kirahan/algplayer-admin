<template>
  <v-layout>
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn dark text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "nuxt-property-decorator";

export interface ServerResponse {
  statusCode: number;
  message: string;
  error: string;
}

export interface MessageConfig {
    template?: string,
    x?: string,
    y?: string,
    mode?: string,
    text: string,
    timeout?: number,
    color?: string
}

@Component({
  name: "GlobalMessage",
  components: {}
})
export default class GlobalMessage extends Vue {
  constructor() {
    super();
    // 注册全局的事件通讯管道
    Vue.prototype.$MessageChanel = new Vue()
  }

  snackbar: boolean = false;
  x: string = "left";
  y: string = "bottom";
  mode: string = "";
  color: string = "";
  timeout: number = 6000;
  text: string = "text";

  setconfig(config){
      if(config.template==='error-login'){
          this.x = ''
          this.y = 'bottom'
          this.mode = ''
          this.timeout = 6000
          this.color = 'error'
          this.text = config.text
          this.snackbar = true
      }else if(config.template==='success-login'){
          this.x = ''
          this.y = 'bottom'
          this.mode = ''
          this.timeout = 6000
          this.color = 'info'
          this.text = config.text
          this.snackbar = true
      }
  }

  mounted(){
    //   添加监听函数
    this.$MessageChanel.$on('globalmessage', (config)=> this.setconfig(config))
  }
}
</script>
