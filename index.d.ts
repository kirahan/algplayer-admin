import Vue from "vue";
import { NuxtAxiosInstance } from "@nuxtjs/axios";
import {CubeStackInstance} from 'cubestack'
declare module "vue/types/vue" {
  interface Vue {
    $axios: NuxtAxiosInstance,
    $sampleRender: CubeStackInstance
}
}
