<template>
     <cube-tab-bar
      v-model="selectedMenu"
      :data="tabs"
      @click="clickHandler">
    </cube-tab-bar> 
</template>
<script>
export default {
  name:'v-tab',
  data () {
    return {
      selectedMenu:'',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '订单',
        icon: 'cubeic-mall'
      }, {
        label: '商品',
        icon: 'cubeic-red-packet'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  created() {
    this.selectedMenu = this.menuText
  },
  props:{
    menuText:{
      type:String,
      required: true,
      default:'菜单'
    }
  },
  methods: {
    clickHandler (label) {
      this.selectedMenu = label
      let currentIndex = 0;
      this.tabs.forEach((element,index) => {
        if(element.label == this.selectedMenu){
              currentIndex = index;
              return false;
        }
      });
      switch(currentIndex){
        case 0:
           this.$router.push('/')
           break;
        case 1:
           this.$router.push('/order')
           break;
        case 2:
           this.$router.push('/goods')
           break;
        case 3:
           this.$router.push('/user')
           break;
      }
      
    }
  }
}
</script>
<style lang="stylus" scoped>
.cube-tab-bar{
  background-color :$color-white;
  position:fixed;
  bottom:0;
  width:100%;
  font-size:18px;
  height:1rem;
}
</style>
