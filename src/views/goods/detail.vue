<template>
    <div>
        <v-nav main-text="查看商品"></v-nav>
        <div class="container">
            <div class="list">
                  <div class="item">
                                        <p>
                                            <span>订单号:</span>
                                            fffffff
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            fffffffffff
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            fffffffffff
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            yyyyyyyyyy
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            iiiiiiiiiiiiiiii
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            lllllllllllll
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            pppppppppppppppp
                                        </p>
                                         <p>
                                            <span>订单号:</span>
                                            ttttttttt
                                        </p>
                                        <p><cube-button :primary="true" style="padding: 10px;" @click="stockManage">库存管理</cube-button></p>
                                    </div>
            </div>
             <v-tab menu-text="商品"></v-tab>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        stockManage(){
            this.$router.push('./stockManage')
        }
    },
}
</script>
<style lang="stylus" scoped>
.list{
    background-color:$color-white;
    margin-top:.2rem;
    height:100%;
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
