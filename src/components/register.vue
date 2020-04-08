<template>
  <div class="register">
    <v-container >
      <v-card class="mx-auto" max-width="500"  hover >
        <v-card-title class="center light-green darken-3 white--text">Register</v-card-title>
        <v-card-subtitle class="light-green lighten-2 white--text">สมัครสมาชิก</v-card-subtitle>
        <v-form class="mx-9 mt-5" >
          <v-text-field label="E-mail" prepend-icon="mail" solo-inverted v-model="email" required></v-text-field>
          <v-text-field label="Password" prepend-icon="lock" type="password"  solo-inverted v-model="pass" req></v-text-field>
          <v-row>
            <v-col class="md-3">
                <v-btn
                  class="success"
                  dark
                  block
                  @click="submit()"
                >
                  สมัครสมาชิก
                </v-btn>
                <v-dialog
                    v-model="dialog"
                    width="200"
                    transition="scroll-x-reverse-transition">
                </v-dialog>
            </v-col>
            <v-col class="md-3"><v-btn block class="mb-7 warning" @click="clear()">Clear</v-btn></v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase'



export default {
  name: 'register',
  data() {
    return {
      email:'',
      pass:'',
      dialog:false
    }
  },
  methods: {
      submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.pass)
        .then(data => {
            data.user
            .updateProfile({
              displayName: this.name
            })
            .then(() => {});
            this.$swal({
              icon: 'success',
              title: 'SUCCESS !!',
              text: 'สมัครสมาชิกสำเร็จ!',
              showConfirmButton: false,
              timer: 2000
            });
            this.$router.replace({
            name: "index"
          });
        })
        .catch(err => {
          this.error = err.message;
          this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: 'กรุณากรอกข้อมูลให้ถูกต้อง หรือ มีชื่อผู้ใช้ซ้ำแล้ว!',
              showConfirmButton: false,
              timer: 1500
            });
        });
      },
      clear(){
        this.email = ''
        this.pass = ''
      }
  },
  component:{
  },
  

}
</script>

<style>

</style>