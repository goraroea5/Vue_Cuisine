<template>
  <div class="thaifood">
    <v-container class="my-auto">
      <v-row> 
        <v-col cols="md-12" class="light-green lighten-4 light-green--text" >
          <h1 class="headline">อาหารยุโรป</h1>
        </v-col>
      </v-row>
      <v-row class="mx-3 blue-grey lighten-5"> 
        <v-col cols="md-3 xs-6 sm-6 my-2"  v-for="(food, index) in foods" :key="index"  > 
          <v-card hover flat color="blue-grey lighten-4" class="px-2 pb-3" >
          <v-img v-bind:src="food.urlf" width="250" height="150"></v-img>
          <h1 class="text-center title light-green darken-1 white--text "> {{food.namef}}</h1>
          <span class="title font-weight-black center"> ราคา :{{food.price}}  บาท</span>
          <h2>จำนวน: {{food.num}} <v-btn class="success" x-small v-on:click="setNum(food.id)"> เพิ่ม</v-btn> <v-btn x-small class="error" v-on:click="delnum(food.id)">ลด</v-btn></h2>
          <div v-if="user.status == 'success'">
              <div v-if="food.active == false" class="mt-5">
                <v-btn block height="50" class="green white--text" v-on:click="Active(food.id)"><v-icon left>shopping_cart</v-icon>สั่งซื้อ</v-btn>
              </div>
              <div v-else-if="food.active == true" class="mt-5">
                <v-btn block height="50" class="error" v-on:click="Active(food.id)"><v-icon left>cancel</v-icon>ยกเลิก</v-btn>
              </div>
            </div>
            <div v-else>
              <div v-if="food.active == false" class="mt-5">
                <v-btn block height="50" class="green white--text" disabled v-on:click="Active(food.id)"><v-icon left>shopping_cart</v-icon>สั่งซื้อ</v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name:'eurofood',
    data() {
      return {
        foods:[],
        user:[]
      }
    },
    methods: {
      ...mapActions(['Active','setNum','delnum'])
    },
    computed: {
      ...mapGetters({
        euroFood:'euroFood',
        getuser : 'user'
      }),
    },
    mounted() {
      this.foods = this.euroFood
      this.user = this.getuser
    },
  }
</script>

<style>


</style>