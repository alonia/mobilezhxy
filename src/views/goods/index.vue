<template>
    <div>
        <v-nav main-text="商品"></v-nav>
        <div class="container">
             <cube-tab-bar v-model="selectedLabel"
                    show-slider
                    :use-transition="disabled"
                    ref="tabNav"
                    :data="tabLabels" class="top-bar">
      </cube-tab-bar>
         <div class="tab-slide-container">
        <cube-slide
          ref="slide"
          :loop="false"
          :initial-index="initialIndex"
          :auto-play="false"
          :show-dots="false"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        > <!-- 在库商品 -->
          <cube-slide-item>
            <cube-scroll  ref="scroll" :data="stockData" :options="scrollOptions">
              <ul class="list-wrapper">
                 <li class="tab-panel-li" v-for="(item, index) in stockData" :key="index">
                      <h2 class="border-bottom-1px">华侨城门票{{item.title}}</h2>
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
            </cube-scroll>
          </cube-slide-item>
           <!-- 在售商品-->
          <cube-slide-item>
            <cube-scroll :data="sellData" :options="scrollOptions">
              <ul class="list-wrapper">
                <li class="tab-panel-li" v-for="(item, index) in sellData" :key="index">
                      <h2 class="border-bottom-1px">华侨城门票{{item.title}}</h2>
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
            </cube-scroll>
          </cube-slide-item>
          <!-- 回收商品 -->
          <cube-slide-item>
            <cube-scroll :data="RecyclingData" :options="scrollOptions">
              <ul class="list-wrapper">
               <li class="tab-panel-li" v-for="(item, index) in RecyclingData" :key="index">
                      <h2 class="border-bottom-1px">华侨城门票{{item.title}}</h2>
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
            </cube-scroll>
          </cube-slide-item>
        </cube-slide>
        </div>
            <v-tab menu-text="商品"></v-tab>
        </div>
    </div>
</template>
<script>
export default {
    data () {
      return {
        selectedLabel: '在库商品',
        disabled: false,
        tabLabels: [{
          label: '在库商品'
        }, {
          label: '在售商品'
        }, {
          label: '回收商品'
        }],
        slideOptions: {
          listenScroll: true,
          probeType: 3,
          /* lock y-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
        scrollOptions: {
          /* lock x-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
        stockData: [{
           title:'22'
        },
        {
           title:'22'
        },{
           title:'22'
        },
        {
           title:'22'
        },{
           title:'22'
        },{
           title:'22'
        },{
           title:'22'
        },
        {
           title:'22'
        },{
           title:'22'
        },
        {
           title:'22'
        },{
           title:'22'
        },{
           title:'22'
        }],
        sellData: [{
            title:'2'
        }],
        RecyclingData: [{
            title:'1'
        }]
      }
    },
    /*  mounted() {
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    }, */
    methods: {
        findIndex(ary, fn) {
            if (ary.findIndex) {
                return ary.findIndex(fn)
            }
            /* istanbul ignore next */
            let index = -1
            /* istanbul ignore next */
            ary.some(function (item, i, ary) {
                const ret = fn.call(this, item, i, ary)
                if (ret) {
                index = i
                return ret
                }
            })
            /* istanbul ignore next */
            return index
        },
      changePage (current) {
        this.selectedLabel = this.tabLabels[current].label
        console.log(current)
      },
      scroll (pos) {
        const x = Math.abs(pos.x)
        const tabItemWidth = this.$refs.tabNav.$el.clientWidth
        const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
        const deltaX = x / slideScrollerWidth * tabItemWidth
        this.$refs.tabNav.setSliderTransform(deltaX)
      }
    },
    computed: {
      initialIndex () {
        let index = 0
        index = this.findIndex(this.tabLabels, item => item.label === this.selectedLabel)
        return index
      }
    }
    
  }
</script>
<style lang="stylus" scoped>
.cube-tab-bar
.tab-slide-container{
    background-color:$color-white;
}
.cube-scroll-content{
    padding-bottom:1rem;
}
.container{
    .top-bar{
        font-size:16px;
        position:fixed;
        z-index:2;
        width: 100%;
    }

}
.tab-slide-container{
     margin-top: calc(1rem + 30px);
     height:90%;
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
                height:1.8rem;
                img{
                    width:100%;
                    height:100%
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
