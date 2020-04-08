<template>
  <div>
    <v-dialog max-width="700px" v-model="dialog">
      <template v-slot:activator="{on}">
        <v-badge
          :content="messages"
          :value="messages"
          color="green"
          overlap
        >
          <v-icon large v-on="on">shopping_cart</v-icon>
      </v-badge> 
      </template>
      <v-card class="text-center py-5 px-5">
          <v-card-title class="success white--text" >ตะกร้าสินค้า</v-card-title>
          <div v-for="(food,index) in list" :key="index" >
            <v-row class="mx-4">
              <v-col cols="md-4">{{food.namef}}</v-col><v-col cols="md-2">{{food.price}} บาท</v-col><v-col cols="md-4"> จำนวน : <v-btn class="success" x-small v-on:click="setNum(food.id)">เพิ่ม</v-btn>  {{food.num}}  <v-btn x-small class="error" v-on:click="delnum(food.id)">ลด</v-btn></v-col><v-col cols="md-2"> <v-btn small @click="removetocart(food.id)" class="error">ลบสินค้า</v-btn></v-col>
            </v-row>
          </div>
          <v-card-text class="headline success white--text">รวมราคาทั้งสิ้น : {{totals()}} บาท</v-card-text>
          <div v-if="totals() == 0">
            <v-btn disabled width="200" class="success" x-large="" block="">สั่งซื้อ</v-btn>
          </div>
          <div v-else>
            <v-dialog max-width="600px" v-model="dialogbuy" >
              <template v-slot:activator="{on}">
                <v-btn v-on="on" width="200" class="success" x-large  block>สั่งซื้อ</v-btn>
              </template>
              <v-card >
                <v-card-title class="success white--text headline">รายละเอียดการจัดส่ง</v-card-title>
                <div v-for="(food,index) in list" :key="index" >
                  <v-row class="mx-3">
                    <v-col cols="md-5">{{food.namef}}</v-col><v-col cols="md-2" class="text-center">{{food.price}} บาท</v-col><v-col cols="md-2"> จำนวน :{{food.num}}</v-col><v-col cols="3">ราคารวม :{{food.price*food.num}}</v-col>
                  </v-row>
                </div>
                <v-row class="text-center">
                  <v-col cols="12" class="text-center"><v-card-text class="headline success white--text">รวมราคาทั้งสิ้น : {{totals()}} บาท</v-card-text></v-col>
                </v-row>
                <v-row class="mx-1">
                  <v-col cols="12"><v-text-field label="ชื่อนามสกุล" v-model="name"></v-text-field></v-col>
                  <v-col cols="12">
                    <v-textarea height="100" solo  label="ที่อยู่ในการจัดส่ง" v-model="address"  ></v-textarea>
                  </v-col>
                  <v-col cols="6" >
                      <v-btn class="success" height="60" block @click="insertToOrder()" >ยืนยันคำสั่งซื้อ</v-btn>
                  </v-col>
                  <v-col cols="6" >
                      <v-btn block class="error" height="60" @click="dialogbuy=false"><v-icon>error</v-icon>ยกเลิก</v-btn>
                  </v-col>
                </v-row>
                <v-row>
                </v-row>
              </v-card>
            </v-dialog>
              </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import {mapGetters,mapActions} from  'vuex'
import { orderRef } from '../main'

export default {
  name: 'popupcart',
  data() {
    return {
      dialog: false,
      dialogbuy : false,
      messages:0,
      list:[],
      name:'',
      pay:0,
      address:''
    }
  },
  computed: {
    ...mapGetters({
      check:'checkout'
    }),
    
  },
  mounted(){
    this.list = this.check
    orderRef.on('value', (snapshot) => {
        this.contacts = snapshot.val()
    })
  },
  methods: {
    totals(){
      this.messages = this.list.length
      let total=0;
      let price=0;
			this.list.forEach(function(item){
					price=(item.price*item.num),
					total+=price
      })
      this.pay = total
      return total
    },
    ...mapActions(['removetocart','setNum','delnum']),
    insertToOrder(){
      let data = {
        food:this.list,
        name : this.name,
        pay : this.pay,
        address: this.address,
        statusOrder:false,
        date : Date()
      }
      orderRef.push(data)
        this.$swal({
              icon: 'success',
              title: 'SUCCESS !!',
              text: 'ทำรายการสั่งซื้อสำเร็จ',
              showConfirmButton: false,
              timer: 2000
            });
      this.$store.dispatch('clearcart')
      this.name = '',
      this.address = '',
      this.dialogbuy = false
      this.dialog = false
    
    }
  },
}
</script>

<style>

</style>