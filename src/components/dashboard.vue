<template>
  <v-container class="my-auto">
    <v-simple-table height="600" dense fixed-header>
      <thead class="light-blue darken-4 white--text ">
        <tr ><th width='150px'>วัน-เวลา ที่สั่งซื้อ</th><th width='200px'>ชื่อผู้สั่ง</th><th width='400px' class="text-center">ที่อยู่ในการจัดส่ง</th><th width='350px' class="text-center">รายการอาหาร</th><th width='100px'>จำนวนเงิน</th><th class="text-center">สถานะ</th></tr>
      </thead>
      <tbody >
        <tr v-for="(order,index) in orders" :key="index">
          <td>{{order.date}}</td><td>{{order.name}}</td><td>{{order.address}}</td>
          <td>
            <div v-for="(food,index) in order.food" :key="index"> 
              <v-row><v-col>{{food.namef}}</v-col><v-col > จำนวน : {{food.num}}</v-col></v-row>
            </div>
          </td>
          <td class="text-center">{{order.pay}}</td>
          <td v-if="order.statusOrder == false"><v-btn class="warning" @click="setdalivery(index)">ยังไม่ได้จัดส่ง</v-btn></td>
          <td v-else><v-btn class="success">จัดส่งแล้ว</v-btn></td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>

import { orderRef } from '../main'
export default {
  data() {
    return {
      orders:[],
      updatestatus:null
    }
  },
  mounted() {
      orderRef.on('value', (snapshot) => {
        this.orders = snapshot.val()
      })
    },
  methods: {
    setdalivery(index){
      this.$swal({
        title: 'Are you sure?',
        text: "คุณต้องการจัดส่งหรือไม่ ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'ยกเลิก',
        confirmButtonText: 'ยืนยันการจัดส่ง!'
      }).then((result) => {
        if (result.value) {
          orderRef.child(index).update({
            statusOrder: true
          })
          this.$swal(
            'จัดส่งสำเร็จ',
            'ได้ทำการจัดส่งสำเร็จ',
            'success'
          )
        }
      })
    }
  },

}
</script>

<style>

</style>