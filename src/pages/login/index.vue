<template>
  <div>
    <i-panel title="登录">
      <i-input
        :value="name"
        title="登录名"
        @change="setUserName"
        autofocus
        placeholder="请输入用户名"
        maxlength="50"
      />
      <i-input
        title="密码"
        @change="setPassword"
        :id="password"
        type="password"
        placeholder="请输入密码"
        maxlength="50"
      />
    </i-panel>
    <i-button type="success" @click="dologin">登录</i-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "111",
      comment_text: "",
      id: 0,
      password: "656565"
    };
  },
  onLoad() {
  },
  methods: {
    async dologin(msg, ev) {
      var that = this;
      let res = await this.$post("user/login", {
        name: this.name,
        password: this.password
      });
      if (res.state == 1) {
        wx.setStorage({
          key: "token",
          data: res.data.token
        });
        const url = "../index/main";
        wx.navigateTo({ url });
      } else {
        wx.showToast({
          title: res.text,
          duration: 2000, //提示的延迟时间，单位毫秒，默认：1500
          mask: false //是否显示透明蒙层，防止触摸穿透，默认：false
        });
      }
    },
    setUserName(e) {
      this.name = e.mp.detail.detail.value;
    },
    setPassword(e) {
      this.password = e.mp.detail.detail.value;
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
input {
  border: 2rpx solid #000;
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
  width: 75%;
  float: left;
}
.right_area p.name {
  font-size: 32rpx;
  margin-bottom: 32rpx;
  font-weight: bold;
}
.right_area p.content {
  margin-bottom: 40rpx;
  font-size: 28rpx;
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
  margin-bottom: 34rpx;
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
</style>
