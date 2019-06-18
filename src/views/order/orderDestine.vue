<template>
    <div>
        <v-nav main-text="订单预定"></v-nav>
        <div class="container">
            <div class="filterPanel">
                <cube-select
                v-model="value"
                :options="options">
                </cube-select>
                <cube-input placeholder="查询筛选"></cube-input>
                <cube-button :inline="true" >查询</cube-button>
                <cube-button :inline="true" class="reset">重置</cube-button>
            </div>
            <div class="searchData">
                <div :size="size" :on-fetch="onFetch" :offset="offset">
                     <cube-recycle-list class="list" :size="size" :on-fetch="onFetch" :offset="offset">
                            <template slot="item" slot-scope="{ data }">
                                    <div class="item" @click="$router.push('/orderNotice')">
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
            <v-tab menu-text="订单"></v-tab>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            size: 20,
            offset: 100,
            options:[{
                value:0,
                text:'全部'
            },
            {
                value:1,
                text:'未付款'
            },
            {
                value:2,
                text:'已取消'
            },
            {
                value:3,
                text:'待确认'
            },
            {
                value:4,
                text:'预定失败'
            },
            {
                value:5,
                text:'预定成功'
            },
            {
                value:6,
                text:'已消费'
            },
            {
                value:7,
                text:'已退款'
            },
            {
                value:8,
                text:'消费待确认'
            },
            {
                value:9,
                text:'退订待确认'
            }],
            value: 0
        }
    },
    methods: {
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
            })
        },
    },
}
</script>
<style lang="stylus" scoped>
.container{
 overflow :unset;
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
    margin-top:.2rem;
    height: 2.8rem;
    .cube-select
    .cube-input
    button{
        width:45%;
        font-size:14px; 
        margin-bottom:.2rem; 
    }
    .reset{
        background-color:#ccc;
    }
}
.searchData{
    position: absolute;
    top: 3.1rem
    left: 0
    bottom: 0
    width: 100%;
    overflow: scroll;
    .cube-recycle-list{
        background: #fff;
        padding-top:.2rem
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
