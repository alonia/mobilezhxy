<template>
    <div>
       <v-nav main-text="登录"></v-nav>
       <div class="container">
           <div class="form">
           <cube-input v-model="user" >
               <template slot="prepend">
                  <i class="iconfont">&#xe623;</i>
               </template>
           </cube-input>
           <cube-input v-model="password"  type="password" :eye="eye">
               <template slot="prepend">
                 <i class="iconfont">&#xe61a;</i>
               </template>
           </cube-input>
           <div class="verify">
               <cube-input v-model="code" placeholder="请输入验证码" class="code">  </cube-input>
                
                <img :src="imgSrc" alt="">
                
           </div>
           
           <cube-button class="btn-login">登录</cube-button>
       </div>
       </div>
       
    </div>
</template>
<script>
export default {
    data(){
        return {
            user:'',
            password: '',
            code:'',
            eye:{
                open: true,
                reverse: false
            },
            imgSrc:'http://tour.12301cn.cn/verification_/crimg.do'
        }
    }
}
</script>
<style lang="stylus" scoped>
.form{
    width:80%;
    margin:0px auto
    .cube-input{
        margin-top:.5rem;
        font-size:16px;
        i{
            font-size:16px;
            margin-left:.2rem;
        }
    }
    .code{
        width:50%;
        float :left; 
    }
    img{
        width: 30%;
        vertical-align: text-bottom;
        margin-top: .5rem;
        margin-left: 1rem;
    }
    .btn-login{
        margin-top:1rem;
        font-size:16px;  
    }
}
</style>
