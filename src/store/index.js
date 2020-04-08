import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: [
      {id:0,namef: 'กระเพราไก่ใข่ดาว',urlf :require('@/assets/img/krapao.jpg'),price:60,num:1,active:false,type:'thai'},
      {id:1,namef: 'ต้มยำกุ้งน้ำข้น',urlf :require('@/assets/img/Tomyum.jpg'),price:150,num:1,active:false,type:'thai'},
      {id:2,namef: 'ข้าวสวย',urlf: require('@/assets/img/rice.png'),price:20,num:1,active:false,type:'thai'},
      {id:3,namef: 'ข้าวผัดหมู',urlf: require('@/assets/img/kaopad.png'),price:60,num:1,active:false,type:'thai',rec:false},
      {id:4,namef: 'ข้าวกระเพราหมูกรอบใข่ดาว',urlf: require('@/assets/img/mhukrob.jpg'),price:70,num:1,active:false,type:'thai',rec:false},
      {id:5,namef: 'ข้าวหมูกระเทียม',urlf: require('@/assets/img/mhukrateaim.jpg'),price:60,num:1,active:false,type:'thai',rec:false},
      {id:6,namef: 'ส้มตำปูปลาร้า',urlf: require('@/assets/img/phuparah.jpg'),price:60,num:1,active:false,type:'thai',rec:false},
      {id:7,namef: 'ต้มแซ่บ',urlf: require('@/assets/img/tomsab.jpg'),price:60,num:1,active:false,type:'thai',rec:false},
      {id:8,namef: 'ลาบหมู',urlf: require('@/assets/img/larb.jpg'),price:60,num:1,active:false,type:'thai',rec:false},
      {id:9,namef: 'ต้มข่าไก่',urlf: require('@/assets/img/kakai.jpg'),price:60,num:1,active:false,type:'thai',rec:false},
      {id:10,namef: 'พะแนงหมู',urlf:require('@/assets/img/panang.jpg'),price:60,num:1,active:false,type:'thai',rec:true},    
      {id:11,namef: 'แกงไตปลา',urlf: require('@/assets/img/taipla.jpg'),price:160,num:1,active:false,type:'thai',rec:false},
      {id:12,namef: 'ข้าวแกงกระหรี่เนื้อ',urlf: require('@/assets/img/karee.jpg'),price:149,num:1,active:false,type:'japan',rec:true},
      {id:13,namef: 'ซูชิหน้าปลาแซลม่อน',urlf: require('@/assets/img/sushi.jpg'),price:150,num:1,active:false,type:'japan',rec:true},      
      {id:14,namef: 'ซูชิหน้าปลาโอโทโร่',urlf: require('@/assets/img/otoro.jpg'),price:180,num:1,active:false,type:'japan',rec:true}, 
      {id:15,namef: 'ไข่ม้วน',urlf: require('@/assets/img/kaimuan.jpg'),price:120,num:1,active:false,type:'japan',rec:true},  
      {id:16,namef: 'ซาชิมิรวม',urlf: require('@/assets/img/sashimi.jpg'),price:499,num:1,active:false,type:'japan',rec:true}, 
      {id:17,namef: 'ข้าวหน้าปลาไหล',urlf: require('@/assets/img/plalai.jpg'),price:180,num:1,active:false,type:'japan',rec:false},
      {id:18,namef: 'ข้าวหน้าเนื้อโกเบ A5',urlf: require('@/assets/img/kobe.jpg'),price:150,num:1,active:false,type:'japan',rec:false},
      {id:19,namef: 'ปลาซาบะย่างเกลือ',urlf: require('@/assets/img/saba.jpg'),price:150,num:1,active:false,type:'japan',rec:false},
      {id:20,namef: 'โอนิกิริ',urlf: require('@/assets/img/onigiri.jpg'),price:40,num:1,active:false,type:'japan',rec:false},
      {id:21,namef: 'ราเมง หมูชาชู',urlf: require('@/assets/img/ramen.jpg'),price:120,num:1,active:false,type:'japan',rec:false},
      {id:22,namef: 'โซบะเย็น',urlf: require('@/assets/img/soba.jpg'),price:99,num:1,active:false,type:'japan',rec:false},
      {id:23,namef: 'ซุปมิโซะ',urlf: require('@/assets/img/miso.jpg'),price:50,num:1,active:false,type:'japan',rec:false},
      {id:24,namef: 'โค้กกระป๋อง',urlf: require('@/assets/img/cokecan.jpg'),price:20,num:1,active:false,type:'drink',rec:false},
      {id:25,namef: 'โค้ก Zero กระป๋อง',urlf: require('@/assets/img/cokezero.jpg'),price:20,num:1,active:false,type:'drink',rec:false},
      {id:26,namef: 'สไปรซ์กระป๋อง',urlf: require('@/assets/img/sprite.jpeg'),price:20,num:1,active:false,type:'drink',rec:false},
      {id:27,namef: 'สไปรซ์ ไม่มีนำ้ตาล กระป๋อง',urlf: require('@/assets/img/spritezero.jpg'),price:20,num:1,active:false,type:'drink',rec:false},
      {id:28,namef: 'ชาเขียวโออิชิ ',urlf: require('@/assets/img/oishi.jpg'),price:30,num:1,active:false,type:'drink',rec:false},
      {id:29,namef: 'ชาเขียวมะลิ ',urlf: require('@/assets/img/jasmine.jpg'),price:40,num:1,active:false,type:'drink',rec:false},
      {id:30,namef: 'ชาอู่หลง ',urlf: require('@/assets/img/oolong.jpg'),price:35,num:1,active:false,type:'drink',rec:true},
      {id:31,namef: 'น้ำเปล่า 600 มล',urlf: require('@/assets/img/singha.png'),price:15,num:1,active:false,type:'drink',rec:true},
      {id:32,namef: 'น้ำเก๊กฮวย ',urlf: require('@/assets/img/yenyen.jpg'),price:20,num:1,active:false,type:'drink',rec:false},
      {id:33,namef: 'น้ำมะพร้าวหอม ',urlf: require('@/assets/img/coco.jpg'),price:30,num:1,active:false,type:'drink',rec:false},
      {id:34,namef: 'เต้าหู้ทรงเครื่องสไตล์เสฉวน',urlf: require('@/assets/img/taohu.jpg'),price:150,num:1,active:false,type:'china',rec:false},
      {id:35,namef: 'เป็ดปักกิ่ง ',urlf: require('@/assets/img/ped.jpg'),price:500,num:1,active:false,type:'china',rec:false},
      {id:36,namef: 'หมูหัน',urlf: require('@/assets/img/mhuhun.jpg'),price:1009,num:1,active:false,type:'china',rec:false},
      {id:37,namef: 'หัวไช้โป้วผัดใข่',urlf: require('@/assets/img/padkai.jpg'),price:80,num:1,active:false,type:'china'},
      {id:38,namef: 'ขนมจีบ 6 ลูก',urlf: require('@/assets/img/jeeb.jpg'),price:50,num:1,active:false,type:'china',rec:false},
      {id:39,namef: 'ฮะเก๋า 6 ลูก',urlf: require('@/assets/img/hakao.jpg'),price:50,num:1,active:false,type:'china',},
      {id:40,namef: 'บะหม๊่ฮ่องกง',urlf: require('@/assets/img/hongkong.jpg'),price:120,num:1,active:false,type:'china',rec:false},
      {id:41,namef: 'กระเพราะปลาน้ำแดง',urlf: require('@/assets/img/kapoor.jpg'),price:150,num:1,active:false,type:'china',rec:false},
      {id:42,namef: 'บะหมี่ซั่ว',urlf:  require('@/assets/img/bamhee.jpg'),price:120,num:1,active:false,type:'china',rec:false},
      {id:43,namef: 'เครย์ฟิชผัดหม่าล่า',urlf:  require('@/assets/img/kayfish.jpg'),price:300,num:1,active:false,type:'china',rec:true},
      {id:44,namef: 'บะหมี่เกี๊ยวกุ้ง',urlf:  require('@/assets/img/kyokung.jpg'),price:80,num:1,active:false,type:'china',rec:false},
      {id:45,namef: 'สปาเก็ตตี้คาโบนาร่า',urlf: require('@/assets/img/cabo.jpg'),price:80,num:1,active:false,type:'euro',rec:false},
      {id:46,namef: 'สปาเก็ตตี้ซอสน้ำแดง',urlf: require('@/assets/img/spaketi2.jpg'),price:89,num:1,active:false,type:'euro',rec:false},
      {id:47,namef: 'เสต็กเนื้อออสเตเรีย',urlf: require('@/assets/img/steak3.jpg'),price:150,num:1,active:false,type:'euro',rec:false},
      {id:48,namef: 'เสต็กหมู',urlf: require('@/assets/img/steakmhuu.jpg'),price:80,num:1,active:false,type:'euro',rec:false},
      {id:49,namef: 'เสต็กไก่',urlf: require('@/assets/img/steakkai.jpg'),price:80,num:1,active:false,type:'euro',rec:false},
      {id:50,namef: 'มันบด',urlf: require('@/assets/img/mashpotato.jpg'),price:60,num:1,active:false,type:'euro',rec:false},
      {id:51,namef: 'นักเก็ตไก่',urlf: require('@/assets/img/nugget.jpg'),price:60,num:1,active:false,type:'euro',rec:false},
      {id:52,namef: 'ซุปเห็ด',urlf: require('@/assets/img/soup.jpg'),price:60,num:1,active:false,type:'euro',rec:false},
      {id:53,namef: 'พิซซ่าหน้าฮาวาเอี้ยน',urlf: require('@/assets/img/pizza.jpg'),price:300,num:1,active:false,type:'euro',rec:false},
      {id:54,namef: 'ชุดอาหารเช้า Breakfast',urlf: require('@/assets/img/breakfast.jpg'),price:60,num:1,active:false,type:'euro'},
    ],
    user: {
      user:null,
      status:null,
      error:null
    },
    cart:[]
  },
  mutations: {
    addcheck(state,index){
        state.foods[index].active =! state.foods[index].active
        if(state.foods[index].active == true){
          state.cart.push(state.foods[index]);
        }else{
          state.cart.splice(state.foods[index],1)
        }
        // eslint-disable-next-line no-console
        console.log(index)
       // Vue.set(state.foods,state.foods[index].active,state.foods[index].active =! state.foods[index].active)
    },
    setnum(state,index){
      state.foods[index].num++
    },
    delnum(state,index){
      if(state.foods[index].num > 1){
        state.foods[index].num--
      }
    },
    setUser(state, value){
      state.user.user = value;
      // eslint-disable-next-line no-console
      console.log(state.user.user)
    },
    setStatus(state,payload){
      state.user.status = payload
    },
    setError(state,payload){
      state.user.error = payload
    },
    removetocart(state,id){
      state.foods[id].active =! state.foods[id].active
      let index = state.cart.findIndex(item => item.id === id)
      state.cart.splice(index,1)
    },
    clearcart(state){
      state.foods.forEach(food => {
        food.active = false
        food.num = 1
      });
      state.cart.splice(0,state.cart.length)
    }
    
    
  },
  actions: {
    Active({commit},index){
      commit('addcheck',index)
    },
    setNum({commit},index){
      commit('setnum',index)
    },
    delnum({commit},index){
      commit('delnum',index)
    },
    signInAction({commit},payload){
      commit('setStatus','loading')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then((response) =>{
        commit('setUser',response.user.email)
        commit('setStatus','success')
        commit('setError',null)
        alert('ยินดีต้อนรับเข้าสู่ระบบ')
      })
      .catch((error) =>{
        commit('setStatus','failure')
        commit('setError',error.message)
        alert('ไม่พบผู้ใช้งาน')
      })
    },
    signOutAction ( {commit}) {
      firebase.auth().signOut()
        .then(() => {
          commit('setUser', null)
          commit('setStatus', null)
          commit('setError', null)
          commit('clearcart')
          alert('ออกจากระบบสำเร็จ')
        
        })
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
        })
    },
    removetocart({commit},id){
      commit('removetocart',id)
    },
    clearcart({commit}){
      commit('clearcart')
    }
    
  },
  getters: {
    japanFood: (state) => state.foods.filter( (item) => { return item.type === 'japan'}),
    drink: (state) => state.foods.filter( (item) => { return item.type ==='drink'}),
    thaiFood: (state) => state.foods.filter( (item) => { return item.type ==='thai'}),
    chineseFood: (state) => state.foods.filter( (item)=> {return item.type === 'china'}),
    checkout:(state) => state.cart,
    allfood:(state)=> state.foods,
    euroFood: (state) => state.foods.filter((item)=> {return item.type === 'euro'}),
    user:(state) => state.user,
  },
})
