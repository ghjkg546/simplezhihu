<template>
  <div class="container">

    <div class="tabs">
      <ul>
        <li v-for="(value, key) in tabs"  :key="index" :class="activeIndex == key ?'active':''" @click="tabClick(key)">{{ value }}</li>
      </ul>
    </div>
    <div class="quest_item" v-for="(item, itemIndex) in followlist" :key="item.id" @click="bindViewTap(item.id)" v-show="activeIndex==0">
      <div class="wrap">
        <div class="wrap_avatar">
          <img :src="item.avatar" alt="">
        </div>
        <div class="wrap_left">
          <p class="header" >{{item.username}}</p>
          <p class="content">{{item.brief}}</p>
        </div>
        <div class="wrap_right">
          <button @click="cancel_follow(item.id)">已关注</button>
        </div>
      </div>
    </div>
    <div class="quest_item" v-for="(item, itemIndex) in followanswer" v-show="activeIndex==1">
      <div class="wrap">
        <div class="wrap_left">
          <p class="header">{{item.title}} </p>
          <p class="content">提问者11：{{item.author_name}}11</p>
        </div>
        <div class="wrap_right">
          <button @click="cancel_follow_answer(item.id)">已关注</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                motto: 'Hello World',
                tabs: ['关注用户'],
                activeIndex: 0,
                userInfo: {},
                followlist: [],
                followanswer: []
            }
        },

        methods: {

            bindViewTap (key) {
                const url = '../product/main?id=' + key
                wx.navigateTo({url})
            },
            async getFollowList () {
                let res = await this.$post('/user/follow-list')
                this.followlist = res.data;

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
            async tabClick (type) {
                var that = this;
                that.activeIndex = type;
                console.log('fun')
                if (type == 1) {
                    let res = await this.$post('/follow/get-follow-answer', {type: 1})

                    that.followanswer = res.data;
                    //that.followlist = res;
                } else {
                    let res = await this.$post('/user/follow-list', {type: 1})
                    that.followlist = res.data;
                }
            },
            cancel_follow (id) {
                var that = this;
                wx.showModal({
                    title: "确定要取消关注吗",
                    cancelColor: "#000",
                    confirmColor: "#0f0",
                    success: function (result) {
                        console.log(result)
                        if (result.confirm) {
                            let res = that.$post('/user/cancel-follow', {id: id}).then(res => {
                                that.followlist = res.data;
                                // 获取到后台重写的session数据，可以通过vuex做本地保存
                            })
                        }
                    }
                })

            },
            cancel_follow_answer (id) {
                var that = this;
                wx.showModal({
                    title: "确定要取消关注吗",
                    cancelColor: "#000",
                    confirmColor: "#0f0",
                    success: function (result) {
                        console.log(result)
                        if (result.confirm) {
                            let res = that.$post('/follow/cancel-follow-answer', {id: id}).then(res => {
                                that.followanswer = res.data;
                                // 获取到后台重写的session数据，可以通过vuex做本地保存
                            })
                        }
                    }
                })


            },
        },
        onShow(){
          this.getFollowList()
        },

        created () {
            // 调用应用实例的方法获取全局数据t
            this.getUserInfo()
        }
    }
</script>

<style scoped lang="less">
  .container{
    background-color: #eaeaea;height: 100%;
    background-size: contain;
  }
  .tabs{
    width: 100%;background: #f54353;font-size: 24rpx;height: 80rpx;
    ul{display:flex}

  }
  .tabs ul li{
    flex:1;text-align: center;line-height: 80rpx;color: #fff;
    border-bottom: 4rpx solid #f54353
  }
  .tabs ul li.active{border-bottom: 4rpx solid #f9e98a}
  .quest_item{width: 100%;background-color: #fff;margin-top: 20rpx;height: 144rpx}
  .wrap{margin-left: 40rpx}
  .wrap_avatar{float: left;}
  .wrap_avatar img{width: 90rpx;height: 90rpx;border-radius: 45rpx;margin-top: 27rpx}
  .wrap_left{
    float: left;margin-left: 24rpx;width:60%
  }
  .wrap_right{float: right;margin-right:24rpx }
.quest_item .header {
  font-size: 24rpx;
  color: #aeaeae;
  width: 100%;
  padding: 20rpx 0;
  overflow: hidden;    
      text-overflow:ellipsis;    
      white-space: nowrap;
}

.quest_item .content {
  font-size: 30rpx;
  color: #000;
  width: 100%;
}
button{width:128rpx;height: 64rpx;font-size: 24rpx;margin-top: 40rpx }

  .quest_item .main{margin: 40rpx 0;color: #aeaeae;;font-size: 30rpx}



</style>
