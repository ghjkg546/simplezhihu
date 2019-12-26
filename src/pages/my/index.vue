<template>
  <div class="container">
    <div class="header">
      <p class="name">{{name}}</p>
      <!-- <p class="chakan">查看或编辑个人主页</p> -->
    </div>
    <div class="list">
      <ul>
        <li @click="goToMyAnswer()">
          <p>{{answer_count}}</p>
          <p>我的创作</p>
        </li>
        <li>
          <p>{{follow_count}}</p>
          <p>关注</p>
        </li>
        <li @click="goToMyFav('fav')">
          <p>{{fav_count}}</p>
          <p>我的收藏</p>
        </li>
        <li @click="goToMyFav('recent')">
          <p>{{view_count}}</p>
          <p>最近浏览</p>
        </li>
      </ul>
    </div>
    <i-button type="error" @click="logout" class="logout" size="small">退出登录</i-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      answer_count: 0,
      fav_count: 0,
      follow_count: 0,
      view_count: 0
    };
  },
  onLoad() {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo(msg, ev) {
      var that = this;
      let res = await this.$post("user/info", { id: that.id });
      that.name = res.user.username;
      that.answer_count = res.answer_count;
      that.fav_count = res.fav_count;
      that.follow_count = res.follow_count;
      that.view_count = res.view_count;
    },
    goToMyFav(type) {
      let url = "../myfav/main?type=" + type;
      wx.navigateTo({ url });
    },
    goToMyAnswer() {
      let url = "../myanswer/main";
      wx.navigateTo({ url });
    },
    logout() {
      wx.removeStorage({
        key: "token",
        success(res) {
          const url = "../login/main";
          wx.redirectTo({ url });
        }
      });
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

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.header {
  width: 700rpx;
  height: 180rpx;
  background-color: #f1f1f1;
}
.logout {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.header .name {
  font-weight: bold;
  margin-left: 30rpx;
}
.header .chakan {
  font-size: 26rpx;
  margin-top: 28rpx;
  margin-left: 30rpx;
}
.list {
  width: 100%;
  margin-top: 44rpx;
}
.list li {
  display: inline-block;
  font-size: 28rpx;
  width: 23%;
  text-align: center;
}
</style>
