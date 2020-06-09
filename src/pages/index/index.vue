<template>
  <div class="container">
    
    <div class="tabs">
      <titletab :tabs="tabs" :activeIndex="activeIndex" @reloadQuestion="getQuestionList"></titletab>
      
    </div>
    <div class="no_content" v-show="questionlist.length == 0">
      <p>这里没有内容哦</p>
    </div>
    <div
      class="quest_item"
      v-for="(item, itemIndex) in questionlist"
      :key="item.id"
      @click="bindViewTap(item.answer_id)"
    >
      <div class="wrap">
        <p class="question" @click="goToAnswerList(item.id)">{{item.title}}</p>
        <p class="content">{{item.content}}</p>
        <p class="main">{{item.like_count}}赞同-{{item.comment_count}}评论-{{item.follow_count}}关注问题</p>
      </div>
    </div>
    <vue-tab-bar :selectNavIndex="0"></vue-tab-bar>
  </div>
</template>

<script>
import titletab from "../../components/titletab";
import vueTabBar from "../../components/vueTabBar";
export default {
  data() {
    return {
      motto: "Hello World",
      tabs: ["关注", "全部", "榜单"],
      activeIndex: 0,
      userInfo: {},
      questionlist: []
    };
  },

  components: {
    vueTabBar,titletab
  },

  methods: {
    bindViewTap(answer_id) {
      if(answer_id == 0){
        wx.showToast({
          title:"暂无回答哦",
          icon:"none",
          duration: 2000,//提示的延迟时间，单位毫秒，默认：1500 
          mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false 
        })
        return false;
      }
      const url = "../answerdetail/main?id=" + answer_id;
      wx.navigateTo({ url });
    },
    goToAnswerList(id) {
      const url = "../singleanswerlist/main?id=" + id;
      wx.navigateTo({ url });
    },
    async getQuestionList(type = 0) {

      console.log(type)
      var that = this;
      that.activeIndex = type;
      let res = await this.$post("question", { type: that.activeIndex });
      console.log(res);
      that.questionlist = res.data;
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    async tabClick(key) {
      var that = this;
      that.activeIndex = key;
      this.getQuestionList(key)
    },
    bindNavigateTo(url) {
      wx.navigateTo({
        url
      });
    }
  },
  onShow(){
    this.getQuestionList();
  },

  created() {
    // 调用应用实例的方法获取全局数据t
    //this.getQuestionList();
    this.getUserInfo();
  }
};
</script>

<style scoped lang="less">
.container {
  background-color: #eaeaea;
  height: 100%;
  background-size: contain;
}
.tabs {
  width: 100%;
  background: #f54353;
  font-size: 24rpx;
  height: 80rpx;
}
.tabs ul li {
  width: 33%;
  display: inline-block;
  text-align: center;
  line-height: 80rpx;
  color: #fff;
  border-bottom: 4rpx solid #f54353;
}
.tabs ul li.active {
  border-bottom: 4rpx solid #f9e98a;
}
.quest_item {
  width: 100%;
  background-color: #fff;
  margin-top: 20rpx;
}
.wrap {
  margin-left: 40rpx;
}
.quest_item .header {
  font-size: 24rpx;
  color: #aeaeae;
  width: 100%;
  padding: 20rpx 0;
}

.question {
  font-weight: bold;
  letter-spacing: 4rpx;
  font-size: 36rpx;
}

.quest_item .content {
  font-size: 30rpx;
  color: #000;
  width: 100%;
}

.quest_item .main {
  margin: 40rpx 0;
  color: #aeaeae;
  font-size: 30rpx;
}
.footer {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 100rpx;
  display: inline-block;

  box-shadow: 0px 2px 5px 5px #f5f5f5;
}
.footer li {
  display: inline-block;
  width: 18%;
  font-size: 20rpx;
  text-align: center;
}
.footer li img {
  width: 40rpx;
  height: 40rpx;
  margin-top: 20rpx;
}
.no_content{
  p{line-height:600rpx}
} 
</style>
