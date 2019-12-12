<template>
  <div class="container">
    <div class="item" v-for="(item, key) in list"  :key="index">
      <div class="avatar">
        <img src="../../../static/image/avt2.jpeg" class="avt">
      </div>
      <div class="right_area">


      </div>

    </div>
    用户名：<input type="text" v-model="name">
    密码<input type="text" v-model="password">
    <button @click="dologin()">登录</button>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                name:'',
                comment_text:'',
                id:0
            }
        },
        onLoad() {
            /*var that=this;
            that.id = this.$root.$mp.query.id
            this.loadcomments();*/
        },
        methods: {
            async dologin (msg, ev) {
                var that = this;
                let res = await this.$post('user/login',{name:this.name,password:this.password})
                if(res.state == 1){
                    wx.setStorage({
                        key:"token",
                        data:res.data.token
                    })
                    const url = '../my/main'
                    wx.navigateTo({ url })
                }
            },

        },
        created () {


        }
    }
</script>

<style scoped>


  *{margin: 0;padding: 0}
  

  .fr{float: right}
  input{border: 2rpx solid #000}
  .avatar{float: left;width: 100rpx;height: 100rpx;width: 18%;margin-left: 26rpx}
  .item{width:100%;margin-top: 34rpx}
  .right_area{
    width: 75%;
    float: left;}
  .right_area p.name{font-size: 32rpx;margin-bottom: 32rpx;font-weight: bold}
  .right_area p.content{margin-bottom: 40rpx;font-size: 28rpx}
  .right_area span{font-size: 28rpx}
  .right_area{border-bottom: 2rpx solid #d2d2d2}
    .right_area .time{margin-right: 400rpx}
  .zan{width: 40rpx;height: 40rpx}
  .time{color:#d2d2d2}
  .right_area .bottom{margin-bottom: 34rpx}
  .avt{width: 90rpx;
    height:90rpx;border-radius: 45rpx}
  .dianzan{line-height: 40rpx}
  .dianzan span{display: inline-block;vertical-align: middle}
  .dianzan img{display: inline-block;vertical-align: middle;
    font-style: 0px;}
  .clearfix:after {
    content:"";
    display: block;
    clear:both;
  }
</style>
