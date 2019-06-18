<template>
 <div>
   <v-nav main-text="整合营销"></v-nav>
   <div class="container">
       <cube-slide :data="items"/>
       <div class="menu">
            <div v-for="(i,index) in menu" :key="index" class="item">
              <img src="" alt=""><br/>
              <p><a @click.prevent="goto(i)">{{i.text}}</a></p>
            </div>
       </div>
       <div class="transaction">
         <div class="title"> 
            <span>
               交易动态
            </span>
            <!-- <cube-button :outline="true">今日</cube-button> -->
         </div>
          <div class="list border-bottom-1px" v-for="j in 8" :key="j">
            <span>
               成交金额{{j}}
            </span>
            <span>
              0笔
            </span>
          </div>
       </div>
      <div class="detail">
         <div class="title"> 
            <span>
               我的概况
            </span>
         </div>
          <div class="list border-bottom-1px" v-for="i in 8" :key="i">
            <span>
               在售商品
            </span>
            <span>
              0个
            </span>
          </div>
      </div>
    <v-tab menu-text="首页"></v-tab>
   </div>
 </div>
</template>
<script>
export default {
  data () {
    return {
      menu:[{
        imgSrc:'',
        text:'消费确认',
        link:'/orderConfirm'
      },
      {
        imgSrc:'',
        text:'账户充值',
        link:'/financeRecharge'
      },{
        imgSrc:'',
        text:'充值审核',
        link:'/financeExamined'
      },
      {
        imgSrc:'',
        text:'重发短信',
        link:'/message'
      },{
        imgSrc:'',
        text:'订单通知',
        link:'/order'
      },
      {
        imgSrc:'',
        text:'订单预定',
        link:'/orderDestine'
      }],
      items: [
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
        }
      ]
    }
  },
  methods: {
    goto(i){
      this.$router.push(i.link)
    }
  }
}
</script>
<style lang="stylus" scoped>
.cube-slide{
  width:100%;
  height:3.5rem;
}
.menu{
  display:flex;
  flex-wrap:wrap;
  background:$color-white;
  margin-top:.1rem;
  font-size:14px;
  .item{
    width: 33.33333333%;
    padding: 0.2rem;
    text-align: center;
  }
}
.transaction
.detail{
   background:$color-white;
   margin-top:.1rem;
}
.transaction
.detail{
  .title
  .list{
    display:flex;
    justify-content: space-between;
    padding:.1rem .2rem;
    height:1rem;
    line-height:1rem;
    button{
      width:2rem;
    }
  }
  .title{
    color:red;
    font-size:16px;
  }
  .list{
    font-size:14px;
  }
}

</style>
