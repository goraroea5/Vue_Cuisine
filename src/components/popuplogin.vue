<template >
  <v-dialog max-width="400px" v-model="dialog">
    <template v-slot:activator="{on}">
      <v-btn  v-on="on" class="success body-1 text--white" >เข้าสู่ระบบ</v-btn>
    </template>
    <v-card>
      <v-card-title class="success white--text" >เข้าสู่ระบบ <v-btn class="a" color="blue darken-1" text @click="dialog = false">Close</v-btn></v-card-title>
      <v-card-text>
        <v-form @submit.prevent="loginWithFirebase ()">
          <v-text-field label="E-mail" prepend-icon="person" v-model="form.email" required></v-text-field>
          <v-text-field label="Password" prepend-icon="lock" type="password" v-model="form.password" ></v-text-field>  
          <v-row>
            <v-col cols="md-6"><v-btn block class="success"  type="submit"  v-on:keyup.enter="loginWithFirebase ()">Login</v-btn></v-col>
            <v-col cols="md-6"><v-btn block class="green darken-2 white--text" link to ="/register" @click="dialog = false">สมัครสมาชิกใหม่</v-btn></v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>


export default {
  name:'login',
  data() {
    return {
      dialog: false,
      error : null,
      form: {
        email: "",
        password: ""
      },
    }
  },
  methods: {
    loginWithFirebase () {
      const user = {
        email: this.form.email,
        password: this.form.password
      }
      this.$store.dispatch('signInAction', user)
      
    },
  }
}
</script>

<style>

</style>