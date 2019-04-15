<template>
    <div>
        <v-nav main-text="商品"></v-nav>
        <div class="container">
            <cube-tab-bar v-model="selectedLabel" show-slider class="top-bar">
                <cube-tab v-for="item in tabs"  :label="item.label" :key="item.label">
                </cube-tab>
            </cube-tab-bar>
            <cube-tab-panels v-model="selectedLabel">
                <cube-tab-panel v-for="item in tabs" :label="item.label" :key="item.label">
                <ul>
                    <li class="tab-panel-li" v-for="(hero, index) in item.heroes" :key="index">
                      <h2 class="border-bottom-1px">华侨城门票{{hero.title}}</h2>
                      <div class="goods">
                          <div class="fl left">
                             <img src="http://img.jingqu.cn/80f618317e34346a31af1b0de797e88b" alt="">
                          </div>
                            <div class="fr right">
                                <p>商品编码：33333333333</p>
                                <p>开放时间：2019-10-03</p>
                                <p>主题</p>
                            </div>
                      </div>
                      
                    </li>
                </ul>
                </cube-tab-panel>
            </cube-tab-panels>
            <v-tab menu-text="商品"></v-tab>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      selectedLabel: '在售商品',
      tabs: [{
        label: '在售商品',
        heroes: [{
            title:'华侨城门票'
        },
        {
            title:'华侨城门票'
        },
        {
            title:'华侨城门票'
        },{
            title:'华侨城门票'
        }]
      }, {
        label: '在库商品',
        heroes: [{
            title:'烧烤套餐1'
        }]
      },
      {
        label: '回收商品',
        heroes: [{
           title:'烧烤套餐2'
        }]
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.cube-tab-bar
.cube-tab-panels{
    background-color:$color-white;
}
.container{
    .top-bar{
        font-size:16px;
    }

}
.cube-tab-panels{
    position:absolute;
    top:calc(1rem + 35px);
    left: 0
    height:80%;
    overflow: scroll; 
    ul{
        padding:.2rem;
        h2{
            padding-bottom:.2rem;
            font-size:15px;
        }
        .goods{
            padding:0.2rem 0rem;
            overflow:hidden;
            .left{
                width:40%;
                img{
                    width:100%;
                }
            }
            .right{
                width:60%;
                padding-left:.3rem;
                p{
                    padding-bottom: .2rem;
                }
            }

        }
        
    }    
}
</style>
