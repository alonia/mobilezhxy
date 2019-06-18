<template>
    <div>
        <v-nav main-text="查看商品"></v-nav>
        <div class="container">
             <div class="filterPanel" ref="menu">               
                <cube-input placeholder="分销组"></cube-input>
                <cube-input placeholder="分销商"></cube-input>
                <cube-input placeholder="日期" v-model="date"></cube-input>
                <cube-button :inline="true" @click="showMutiPicker()">选择日期</cube-button>
                <cube-button :inline="true" class="reset">查询</cube-button>
                <cube-button :icon="menuIcon" @click="showMore">更多</cube-button>
                <div v-show="foldMenu" style="width: 100%;" ref="moreMenu">
                    <cube-button :inline="true" >修改库存</cube-button>
                    <cube-button :inline="true" class="fr">新增库存</cube-button>
                    <div style="width:100%">
                    <cube-checkbox-group :horizontal="true"  v-model="checkList" :options="options" shape="square"/>
                    </div>
                </div>
                
            </div>
            <div class="mask" v-show="isMask" @click.self="closeMask"></div>
           <div class="searchData" ref="content" >
                <div :size="size" :on-fetch="onFetch" :offset="offset">
                     <cube-recycle-list class="list" :size="size" :on-fetch="onFetch" :offset="offset">
                            <template slot="item" slot-scope="{ data }">
                                    <div class="item">
                                        <p>
                                            <cube-checkbox shape="square" :hollow-style="true" v-model="checked">Checkbox</cube-checkbox>
                                        </p>
                                        <p>
                                            <span>订单号:</span>
                                            <span class="content">{{data.data}}</span>
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            <span class="content">{{data.data}}</span>
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            <span class="content">{{data.data}}</span>
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            <span class="content">{{data.data}}</span>
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            <span class="content">{{data.data}}</span>
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            <span class="content">{{data.data}}</span>
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            <span class="content">{{data.data}}</span>
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            <span class="content">{{data.data}}</span>
                                        </p>
                                         
                                    </div>
                            </template>
                    </cube-recycle-list>
                    
                </div>  
            </div>
        </div>
        <v-tab menu-text="商品"></v-tab>
    </div>
</template>
<script>
const year = [{ text: '2019年', value: '2019'}, { text: '2020年', value: '2020' },
  { text: '2021年', value: '2021' },{ text: '2022年', value: '2022'}, { text: '2023年', value: '2023' },
  { text: '2024年', value: '2024' }]
const month = [
    { text: '1月', value: '1' }, { text: '2月', value: '2' },
  { text: '3月', value: '3'}, { text: '4月', value: '4' },
     { text: '5月', value: '5' }, { text: '6月', value: '6' },
  { text: '7月', value: '7'}, { text: '7月', value: '7' },
  { text: '8月', value: '8' }, { text: '9月', value: '9' },
  { text: '10月', value: '10'}, { text: '11月', value: '11' },
   { text: '12月', value: '12' }
  ]
export default {
    data(){
        return {
            foldMenu:false,
            isMask:false,
            menuIcon:'cubeic-pulldown',
            menuText:'展开',
            size: 20,
            offset: 100,
            date:'',
            checked:true,
            checkList: ['1', '4'],
            options: [{
                label:'全部',
                value:'1'
            },
            {
                label:'星期一',
                value:'2'
            },
            {
                label:'星期二',
                value:'3'
            },{
                label:'星期三',
                value:'4'
            }
            ,{
                label:'星期四',
                value:'5'
            },{
                label:'星期五',
                value:'6'
            },{
                label:'星期六',
                value:'7'
            },{
                label:'星期日',
                value:'8'
            }]
        }
    },
    methods: {
        initTop(){
             this.$refs.content.style.top = this.$refs.menu.offsetHeight + 5 + 'px'
        },
         closeMask(){
            this.foldMenu = false
            this.isMask = false
        },
        showMore(){
            this.foldMenu = !this.foldMenu;
            this.foldMenu ? this.menuIcon = 'cubeic-pullup':this.menuIcon = 'cubeic-pulldown'
            if(this.foldMenu){
                this.isMask = true
            }else{
                this.isMask = false
            }
        },
        onFetch() {
            let items = []
            return new Promise((resolve) => {
                // 模拟请求 50 条数据，因为 size 设置为 50
                setTimeout(() => {
                for (let i = 0; i < 20; i++) {
                    items.push({
                      data: '8888888888'
                    })
                }
                resolve(items)
                }, 1000)
                this.initTop()
            })
        },
         showMutiPicker() {
        if (!this.mutiPicker) {
            this.mutiPicker = this.$createPicker({
            title: '选择日期',
            data: [year, month],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
            })
        }
        this.mutiPicker.show()
        },
        selectHandle(selectedVal, selectedIndex, selectedText) {
           this.date = selectedText.join(' ')
       /*  this.$createDialog({
            type: 'warn',
            content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
            icon: 'cubeic-alert'
        }).show() */
        },
        cancelHandle() {
        /* this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
        }).show() */
        }
    },
    
}
</script>
<style>
.filterPanel .cube-checkbox-wrap,.filterPanel .cube-checkbox{
            padding:0;
}
.filterPanel .cube-checkbox-group[data-horz="true"] .cube-checkbox {
      width:25%;
      flex: none;
      padding-top: 10px;
      padding-bottom: 10px
}
.filterPanel .cube-checkbox-group{
    flex-wrap:wrap;
    overflow: none;
}
.filterPanel .cube-checkbox-group label{
    font-size:12px;
}
.filterPanel .cube-input-field{
        padding:5px;
}

</style>

<style lang="stylus" scoped>
.container{
 overflow :unset;
}
.mask{
    position: fixed;
    top:1rem;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    right: 0;
    bottom: 0;
    z-index: 1;
}
.filterPanel{
    display:flex;
    flex-wrap:wrap;
    position:fixed;
    width: 100%;
    z-index:2;
    justify-content:space-between;
    padding-left:.2rem;
    padding-right:.2rem;
    background:$color-white;
    padding-top:1.2rem;
    .cube-select
    .cube-input
    button{
        width:45%;
        margin-bottom:.25rem; 
    }
    .cube-btn{
        padding: 8px;
        font-size: 14px;
    }
    .reset{
        background-color:#ccc;
    }
}
.searchData{
    background:$color-white;
    padding-top: .2rem;
    position: absolute;
    left: 0
    bottom: 0
    width: 100%;
    overflow: scroll;
    .cube-recycle-list{
        background: #fff;
    }
    .item{
        margin:0 .2rem .2rem;
        padding:.2rem;
        border:solid 1px #ccc;
        border-radius:4px;
        p{
            padding-top: .2rem;
            .content{
                margin-left:.2rem
            }
        }
    }
}

</style>
