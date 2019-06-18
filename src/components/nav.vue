<template>
     <nav>
           <div class="left"   @click="$router.go(-1)">
                <i class="cubeic-back"></i>
                <span>{{leftText}}</span>
           </div>
           <div class="right">
               <p> 
                   {{mainText}} 
                   <cube-input placeholder="搜索" class="dy-input" v-show="inputFlag"></cube-input>
               </p>
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
            type: String
        },
        leftText:{
            type: String
        },
        inputFlag:{
            type: Boolean,
            default:false
        }
    }
}
</script>
<style>
.right .cube-input-field{
                padding:5px;
            }
</style>

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
          span{
            font-size:18px;
            top: -.25rem;
            position: relative;
          }
      }
      .right{
          flex:1;
          line-height:1rem;
          font-size:18px;
        p{
          text-align :center;
        }
        .dy-input{
            width: 80%;
            margin: .2rem .6rem;
        }   
      }
      
}
</style>
