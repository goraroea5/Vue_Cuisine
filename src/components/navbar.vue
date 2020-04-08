<template>
  <nav>
    <v-app-bar  app flat color="light-green lighten-3" >
      <v-toolbar-title class="headline"> 
        <span class="font-weight-light">CUI</span>
          <span>SINE™</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <div v-if="user.status == 'success'">
          <v-row>
            <v-col class='mt-2'>{{user.user}}</v-col>
            <v-col><v-btn class="error" @click="signOutAction()"><v-icon>logout</v-icon> LOGOUT</v-btn></v-col>
            <v-col><checkout/></v-col>
          </v-row>
        </div>
        <div v-else>
          <Login/>
        </div>
        
    </v-app-bar>
      <v-navigation-drawer app expand-on-hover color="blue-grey lighten-5" >
        <v-list dense nav class="mt-12" >
          <v-list-item link to="/">
            <v-list-item-icon>
              <v-icon color="amber accent-4">star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>เมนูทั้งหมด</v-list-item-title>
          </v-list-item>
          <v-list-item link to ="/euro" >
            <v-list-item-icon>
              <v-icon color="purple">room_service</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Euroupean Food</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/china">
            <v-list-item-icon >
              <v-icon color="orange darken-2">room_service</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Chinese Food</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/thaifood">
            <v-list-item-icon>
                <v-icon color="blue">room_service</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Thai Food</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/japanfood" >
            <v-list-item-icon>
                <v-icon color="red">room_service</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Japanese Food</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/braverage">
            <v-list-item-icon>
                <v-icon color="green">emoji_food_beverage</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Beverage</v-list-item-title>
          </v-list-item>
          <div v-if="user.user == 'admin@admin.com'">
            <v-list-item link to="/dashboard">
            <v-list-item-icon>
                <v-icon color="blue darken-4">speed</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>   
          </div>
        </v-list>
      </v-navigation-drawer>
    </nav>

</template>


<script>
import {mapGetters,mapActions} from 'vuex'
import Login from './popuplogin'
import checkout from './popupcheckout'
export default {
    name: 'navbar',
    data() {
        return {
          show: false,
          user:[]
        }
    },
    components:{
      Login,checkout
    },
    computed: {
      ...mapGetters({
        getuser:'user' 
      }),
      
    },
    mounted(){
      this.user = this.getuser
      // eslint-disable-next-line no-console
      console.log(this.user)
    },
    
    methods: {
      signOutAction(){
      this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: 'กรุณากรอกข้อมูลให้ถูกต้อง หรือ มีชื่อผู้ใช้ซ้ำแล้ว!',
              showConfirmButton: false,
              timer: 1500
            });
    },
      ...mapActions(['signOutAction'])
    },
    
    
}
</script>
    
<style>

</style>