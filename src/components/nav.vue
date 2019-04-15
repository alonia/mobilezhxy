<template>
     <nav>
           <div class="left"   @click="$router.go(-1)">
                <i class="cubeic-back"></i>
           </div>
           <div class="right">
               <p> {{mainText}} </p>
           </div>  
       </nav>
</template>
<script>
export default {
    name:'v-nav',
    data(){
        return{

        }
    },
    props:{
        mainText:{
            default:'标题'
        }
    }
}
</script>
<style lang="stylus" scoped>
nav{
      width:100%;
      background-color:#2196F3;
      height:1rem;
      color:#fff;
      position:fixed;
      top:0;
      left:0;
      z-index:2;
      display:flex;
      .left{
          line-height: 1rem;
          i{
              font-size:28px;
              vertical-align: text-top;
          }
      }
      .right{
          flex:1;
          line-height:1rem;
          font-size:18px;
        p{
          text-align :center;
        }   
      }
      
}
</style>
