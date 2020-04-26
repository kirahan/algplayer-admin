<template>
  <v-app v-resize="onresize">
    <v-navigation-drawer
      v-model="drawer"
      class="teal lighten-1"
      width="500"
      dark
      right
      app
      disable-resize-watcher
    >
      <v-list nav class="py-2">
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="title">
              {{username}}
              <v-btn color="purple" right absolute small  @click="logout">退出</v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <Navigation :isopend="drawer"></Navigation>
    </v-navigation-drawer>

    <v-app-bar app clipped color="purple" dark>
      <v-toolbar-title style="cursor:pointer" @click="gotoMain()"
        >AlgDb.Player</v-toolbar-title
      >
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        clearable
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="search a case"
        solo-inverted
      ></v-autocomplete>

      <v-btn icon @click="onClickFullscreen"
        ><v-icon>{{
          isFullscreen ? "mdi-fullscreen-exit" : "mdi-fullscreen"
        }}</v-icon></v-btn
      >
      <div v-if="$store.state.auth.loggedIn">
        <v-btn icon color="">
          <v-badge overlap color="red" content="">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </div>
      <v-btn v-else icon @click="isLoginShow = !isLoginShow"
        >登录<v-icon>mdi-login</v-icon></v-btn
      >
    </v-app-bar>

    <v-content app fluid>
      <Login v-if="isLoginShow && !$store.state.auth.loggedIn"></Login>
      <nuxt-child></nuxt-child>
      <GlobalMessage></GlobalMessage>
    </v-content>

    <v-bottom-navigation
      :value="activeBtn"
      grow
      app
      color="teal"
      v-if="usephoneLayout"
      >
      <v-btn>
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-footer app v-if="!usephoneLayout">
      <span>&copy; 2020</span>
      <v-btn right text absolute :href="githuburl" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Ref, Provide, Watch } from "vue-property-decorator";
import Login from "../pages/login.vue";
import GlobalMessage from "../components/globalMessage.vue";
import Navigation from '../components/navigation.vue'


@Component({ name: "App", components: { Login, GlobalMessage, Navigation} })
export default class App extends Vue {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  // -1 means cycle model
  sponsorindex: number = -1;
  showcubesample: boolean = false;

  activeBtn: number = 1;
  drawer: boolean = false;
  select: boolean = false;
  items = [];
  search = null;
  loading: boolean = false;
  config: boolean = true;

  usephoneLayout: boolean = false;
  windowSize = { x: 0, y: 0 };
  githuburl: string = "https://github.com/kirahan/vue-ts-algdb-player";

  isFullscreen: boolean = false;
  isLoginShow: boolean = false;

  get username(){
    try{
      const username = this.$store.state.auth.user.username
      return username
    }
    catch{
      return ''
    }
  }


  logout(){
    this.drawer = false
    this.$auth.logout()
  }

  gotoMain() {
    this.$router.push("/");
  }

  onresize() {
    this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    this.usephoneLayout = this.windowSize.x < 600;
  }

  onClickFullscreen() {
    if (this.isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozExitFullscreen) {
        document.mozExitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      this.isFullscreen = false;
    } else {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
      this.isFullscreen = true;
    }
  }

  created() {}

  mounted() {
    console.log(this.$store.state);
    console.log(this.$sampleRender)
  }
}
</script>
