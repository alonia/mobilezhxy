<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>
     1111
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
//mport HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    //HelloWorld
  }
}
</script>
<style lang="scss" scoped>
 $color: #F90;
 p{
   color:$color;
 }

</style>

<script>
export default {
  created(){
    this.getData()
    console.log(1)
  },
  methods:{
    async  getData(){
      const data = await this.$http.VerifyCode()
    }
  }
}
</script>