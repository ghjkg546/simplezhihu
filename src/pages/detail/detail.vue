<template>
  <div class="container" @click="clickHandle1('test click', $event)">



    <div class="pro_img">
      <p class="header">xj赞同了该答案</p>
    </div>


  </div>
</template>

<script>
    import card from '@/components/card'

    export default {
        data () {
            return {
                motto: 'Hello World',
                userInfo: {},
                productlist:[]
            }
        },

        components: {
            card
        },

        methods: {
            bindViewTap () {
                const url = '../logs/main'
                wx.navigateTo({ url })
            },
            getUserInfo () {
                // 调用登录接口
                wx.login({
                    success: () => {
                        wx.getUserInfo({
                            success: (res) => {
                                this.userInfo = res.userInfo
                            }
                        })
                    }
                })
            },
            clickHandle (msg, ev) {
                console.log('clickHandle:', msg, ev)
            },
            async clickHandle1 (msg, ev) {
                var that = this;
                console.log('fun')
                let res = await this.$post('product',{name:'aa'})
                that.productlist = res;
                console.log(that.productlist)

            }
        },

        created () {
            // 调用应用实例的方法获取全局数据

        }
    }
</script>

<style scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p.header{color: #00aaef;font-weight: bold;
    margin-bottom:20rpx;margin-left: 20rpx}
  .pro_img{width: 100%}
  .pro_img li{
    font-size: 28rpx;
    text-align: center;
    float: left;
    width: 49%;
    height: 560rpx;
    border-right: 1px solid #e1e1e1;
      border-bottom:1px solid #e1e1e1 ;
  }
  .pro_img li p{margin-top: 30rpx}
  .pro_img p.small{font-size: 24rpx}
  .pro_img li image{
    margin-top: 24rpx;
    width: 320rpx;
  height:320rpx}
  .pro_img li span{line-height: 56rpx}
  .del_line{
    margin-left: 10rpx;
    text-decoration: line-through;
    color: #aaa;
  }
  .userinfo-nickname {
    color: #aaa;
  }
  span.red{color: red;
    margin-top: 26rpx;
 }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

</style>
