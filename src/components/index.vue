<template>
  <v-container class="my-10">
    <v-row>
      <v-flex md-12 sm-6>
        <v-carousel
          cycle
          height="200"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet
              :color="colors[i]"
              height="100%"
            >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <div class="display-3">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-row>
      <v-spacer></v-spacer>
      <v-row>
        <v-col cols="md-12 sx-12" class="light-green lighten-4 mt-5 light-green--text" >
          <h1 class="headline">รายการอาหารทั้งหมด</h1>
        </v-col>
      </v-row>
      <v-row >
        <v-col cols="md-3 xs-6 sm-6 my-5" v-for="(food, index) in rec" :key="index" > 
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
              <v-btn block height="50" class="green white--text" disabled v-on:click="Active(food.id)"><v-icon left>shopping_cart</v-icon>สั่งซื้อ</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name: 'index',
    data() {
      return {
        colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        rec:[],
        user:[]
      }
    },
    methods: {
      ...mapActions(['Active','setNum','delnum'])
    },
    computed: {
      ...mapGetters({
        allfood : 'allfood',
        getuser : 'user'
      })
    },
    mounted() {
      this.rec = this.allfood
      this.user = this.getuser
    },
}
</script>

<style>

</style>