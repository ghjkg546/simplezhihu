<template>
  <div class="container">

    <div class="tabs">
      <ul>
        <li v-for="(value, key) in tabs"  :key="index" :class="activeIndex == key ?'active':''" @click="tabClick(key)">{{ value }}</li>
      </ul>
    </div>
    <div class="quest_item">
      <div class="wrap">
        <p class="header">xj赞同了该答案</p>
        <p class="content">如何评价刘昊然出演的广告?</p>
        <p class="main">
          94赞同-3评论-3关注问题
        </p>
      </div>

    </div>

    <div class="quest_item">
      <div class="wrap">
        <p class="header">xj赞同了该答案</p>
        <p class="content">如何评价刘昊然出演的广告?</p>
        <p class="main">
          94赞同-3评论-3关注问题aaa
        </p>
      </div>

    </div>

    <div class="quest_item">
      <div class="wrap">
        <p class="header">xj赞同了该答案</p>
        <p class="content">如何评价刘昊然出演的广告?</p>
        <p class="main">
          94赞同-3评论-3关注问题aa
        </p>
      </div>

    </div>

    <div class="quest_item">
      <div class="wrap">
        <p class="header">xj赞同了该答案</p>
        <p class="content">如何评价刘昊然出演的广告?</p>
        <p class="main">
          94赞同-3评论-3关注问题
        </p>
      </div>

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
                answerlist:[]
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
            /*async */clickHandle1 (msg, ev) {
                var that = this;
                console.log('fun')
                let res = await this.$post('answer',{name:'aa'})
                that.answerlist = res;
                console.log(that.productlist)

            }
        },

        created () {
            var that=this;
            that.clickHandle1()
            // 调用应用实例的方法获取全局数据

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

  .quest_item .content {
    font-size: 30rpx;
    color: #000;
    width: 100%;
  }

  .quest_item .main{margin: 40rpx 0;color: #aeaeae;;font-size: 30rpx}



</style>
