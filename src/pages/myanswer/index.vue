<template>
  <div class="container">
    <titletab :tabs="tabs"></titletab>
    <div class="item" v-for="(item, key) in list" :key="index">
      <div class="right_area">
        <p class="name">{{item.title}}</p>
        <p class="content" v-html="item.content"></p>
        <div class="bottom">
          <div class="bottom_left">{{item.create_time}}</div>
          <div class="bottom_right" @click="jumpToUrl(item.id)">详细</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titletab from "../../components/titletab";
export default {
  data() {
    return {
      list: [],
      tabs: ["我的回答"],
      page: 1,
      total_page: 0
    };
  },
  components: {
    titletab
  },
  onLoad() {
    var that = this;
    that.id = this.$root.$mp.query.id;
    that.page = 1;
    this.loadcomments();
  },
  onReachBottom() {
    if (this.page > this.total_page) {
    } else {
      // 下一页
      this.page = this.page + 1;
      if (this.page >= this.total_page) {
        wx.showToast({
          title: "已经到底了",
          duration: 2000, //提示的延迟时间，单位毫秒，默认：1500
          mask: false //是否显示透明蒙层，防止触摸穿透，默认：false
        });
      }
      this.loadcomments();
    }
  },
  methods: {
    async loadcomments(msg, ev) {
      var that = this;
      let res = await this.$post("answer/my-answer-list", { page: that.page });

      that.list = that.list.concat(res.answers);
      wx.hideNavigationBarLoading();
      // 停止下拉动作
      wx.stopPullDownRefresh();
      that.total_page = res.total_page;
    },
    jumpToUrl(key) {
      if (key) {
        const url = "../answerdetail/main?id=" + key;
        wx.navigateTo({ url });
      }
    }
  },
  created() {}
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.fr {
  float: right;
}
.avatar {
  float: left;
  width: 100rpx;
  height: 100rpx;
  width: 18%;
  margin-left: 26rpx;
}
.item {
  width: 100%;
  margin-top: 34rpx;
}
.right_area {
  width: 90%;
  padding-left: 40rpx;
  padding-right: 40rpx
}
.right_area p.name {
  font-size: 32rpx;
  margin-bottom: 20rpx;
  font-weight: bold;
}
.right_area p.content {
  margin-bottom: 40rpx;
  font-size: 30rpx;
}
.right_area span {
  font-size: 28rpx;
}
.right_area {
  border-bottom: 2rpx solid #d2d2d2;
}
.right_area .time {
  margin-right: 400rpx;
}
.zan {
  width: 40rpx;
  height: 40rpx;
}
.time {
  color: #d2d2d2;
}
.right_area .bottom {
  margin-bottom: 100rpx;
}
.avt {
  width: 90rpx;
  height: 90rpx;
  border-radius: 45rpx;
}
.dianzan {
  line-height: 40rpx;
}
.dianzan span {
  display: inline-block;
  vertical-align: middle;
}
.dianzan img {
  display: inline-block;
  vertical-align: middle;
  font-style: 0px;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.bottom_left {
  float: left;
  font-size: 30rpx;
}
.bottom_right {
  float: right;
  font-size: 30rpx;
  margin-right: 100rpx;
  color: #92b4d7;
}
</style>
