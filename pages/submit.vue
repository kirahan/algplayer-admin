<template>
  <v-layout app style="height:100%">
    <v-row no-gutters align="center" justify="center">
      <v-col xs="12" sm="8" md="4" lg="4" align-self="center">
        <v-card light elevation="10" pa-3>
          <v-img
            class="white--text align-end"
            height="200px"
            max-width="400px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title
              class="display-1 font-weight-black justify-center align-center"
              >Wellcome AlgPlayer</v-card-title
            >
          </v-img>

          <v-card-text>
            <v-form ref="form">
              <v-text-field
                v-model="username"
                :counter="maxusername"
                label="用户名"
                append-icon="mdi-account"
                :rules="[rules.required]"
                clearable
              ></v-text-field>

              <v-text-field
                v-model="password"
                :append-icon="showpwd ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="showpwd ? 'text' : 'password'"
                name="input-10-1"
                label="密码"
                counter
                @click:append="showpwd = !showpwd"
              ></v-text-field>

              <v-text-field
                v-model="repassword"
                :append-icon="showrepwd ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[comparepwd]"
                :type="showrepwd ? 'text' : 'password'"
                name="input-10-1"
                label="重复密码"
                counter
                @click:append="showrepwd = !showrepwd"
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions>
              <v-spacer></v-spacer>
            <v-btn
                right
                color="purple"
                class="mr-4 white--text"
                @click="check"
                >
                注册
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script lang="ts">
import { Component, mixins, Vue, Watch, Ref } from "nuxt-property-decorator";

@Component({
  name: "Submit"
})
export default class Submit extends Vue {

    @Ref('form') submit: any

    username: string = '';
    maxusername: number = 20
    showpwd: boolean = false;
    showrepwd: boolean = false;
    password: string = "";
    repassword: string = "";
    comparepwd:boolean | string = ''
    rules = {
        required: value => !!value || "不能为空.",
        min: v => v.length >= 6 || "至少6个字符",
        emailMatch: () => "The email and password you entered don't match"
        };

    @Watch('password')
    onPwdChange(){
        if(this.repassword !== ''){
            this.comparepwd = this.repassword === this.password || '密码不一致'
        }
    }

    @Watch('repassword')
    onRepwdChange(){
        this.comparepwd = this.repassword === this.password || '密码不一致'
    }

    check() {
        const isValidateOK = this.submit.validate()
        console.log(isValidateOK)
      }

}
</script>

<style>
.v-messages__message{
    line-height: 15px!important;
}
</style>