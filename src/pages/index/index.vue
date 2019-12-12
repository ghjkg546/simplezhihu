<template>
  <div class="container">

    <div class="tabs">
      <ul>
        <li v-for="(value, key) in tabs"  :key="index" :class="activeIndex == key ?'active':''" @click="tabClick(key)">{{ value }}</li>
      </ul>
    </div>
    <div class="quest_item" v-for="(item, itemIndex) in productlist" :key="item.id" @click="bindViewTap(item.id)">
      <div class="wrap">
        <p class="question" >如何看待PDD预言中了</p>
        <p class="header" >{{item.voter}}赞同了该答案a</p>
        <p class="content">{{item.title}}</p>
        <p class="main">
          {{item.up_count}}赞同-3评论-3关注问题
        </p>
      </div>
    </div>
    <vue-tab-bar>
    </vue-tab-bar>


  </div>
</template>

<script>
import vueTabBar from '../../components/vueTabBar'
export default {
  data () {
    return {
      motto: 'Hello World',
        tabs:['关注','推荐','榜单'],
        activeIndex:1,
      userInfo: {},
        productlist:[]
    }
  },

  components: {
   vueTabBar
  },

  methods: {

    bindViewTap (key) {
      const url = '../product/main?id='+key
      wx.navigateTo({ url })
    },
      async clickHandle1 (msg, ev) {
          var that = this;
          console.log('fun')
          let res = await this.$post('answer',{type:0})
          console.log(res);
          that.productlist = res;

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
      async tabClick (key) {

          var that = this;
          that.activeIndex=key;
          console.log('fun')
          let res = await this.$post('answer',{type:key})
          console.log(res);
          that.productlist = res;

      },
      bindNavigateTo(url) {
          wx.navigateTo({
              url
          })
      },
  },

  created () {
    // 调用应用实例的方法获取全局数据t
      this.clickHandle1()
    this.getUserInfo()
  }
}
</script>

<style scoped>
  .container{
    background-color: #eaeaea;height: 100%;
    background-size: contain;
  }
  .tabs{width: 100%;background: #f54353;font-size: 24rpx;height: 80rpx}
  .tabs ul li{width: 33%;
    display: inline-block;text-align: center;line-height: 80rpx;color: #fff;
    border-bottom: 4rpx solid #f54353}
  .tabs ul li.active{border-bottom: 4rpx solid #f9e98a}
  .quest_item{width: 100%;background-color: #fff;margin-top: 20rpx}
  .wrap{margin-left: 40rpx}
.quest_item .header {
  font-size: 24rpx;
  color: #aeaeae;
  width: 100%;
  padding: 20rpx 0;
}

.question{
  font-weight:bold;
  letter-spacing:4rpx;
  font-size:36rpx;
}

.quest_item .content {
  font-size: 30rpx;
  color: #000;
  width: 100%;
}

  .quest_item .main{margin: 40rpx 0;color: #aeaeae;;font-size: 30rpx}
  .footer{position: fixed;bottom:0;z-index: 10;width: 100%;height:100rpx;
    display: inline-block;

    box-shadow:0px 2px 5px 5px #f5f5f5;}
.footer li{display: inline-block;width: 18%; font-size: 20rpx;text-align: center}
  .footer li img{width: 40rpx;height: 40rpx;margin-top: 20rpx}


</style>
