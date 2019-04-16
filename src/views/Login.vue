<template>
  <div class="home">
    <img @click="submit" alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created(){
    
  },
  methods:{
    submit(){
      this.$post('./nav.json',{id:1,k:1})
      .then((response) => {
        console.log(response)
      })
      this.socketApi.sendSock()
    }
  }
}
</script>
