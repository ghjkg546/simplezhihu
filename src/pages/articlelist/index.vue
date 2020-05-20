<template>
  <div class="test">
    <div class="wrap">
      <div class="article_item" v-for="(item, itemIndex) in articleList"
      :key="item.id" @click="showDetial(item.id)">
        <div class="left_item">
        <p class="title">{{item.title}}</p>
        <div class="comment">5阅读 0评论 020-09 13:56</div>
      </div>
        <div class="right_item">
          <img :src="item.cover_img" alt="">
        </div>
      </div>
    </div>
    <vue-tab-bar :selectNavIndex="1"></vue-tab-bar>
  </div>
</template>

<script>
import vueTabBar from "../../components/vueTabBar";
export default {
  data() {
    return {
      userInfo: {},
      articleList: []
    };
  },

  components: {
    vueTabBar
  },

  methods: {
    showDetial(key) {
      const url = "../articledetail/main?id=" + key;
      wx.navigateTo({ url });
    },
    goToAnswerList(id) {
      const url = "../singleanswerlist/main?id=" + id;
      wx.navigateTo({ url });
    },
    async getAriticleList(msg, ev) {
      var that = this;
      let res = await this.$post("/article/list", {});
      that.articleList= res.data.items;
      console.log(that.articleList)
    },
  },

  created() {
    this.getAriticleList();
  }
};
</script>

<style scoped lang="less">
.container {
  background-color: #eaeaea;
  height: 100%;
  background-size: contain;
}
.right_item img{
  width: 222rpx;
  height: 160rpx;
}
.tabs {
  width: 100%;
  background: #f54353;
  font-size: 24rpx;
  height: 80rpx;
}
.article_item{
  display: flex;
  height: 240rpx;
 
  border-bottom:2rpx solid #f9f9f9
}
.article_item:nth-child(1){
  border-top:2rpx solid #f9f9f9;
}
.left_item{
  margin-top:34rpx;
  width:500rpx;
  .title{font-size:40rpx}
}
.right_item{
  flex: 1;
  margin-top:34rpx;
}
.comment{font-size: 26rpx;margin-top: 40rpx;color:#b1b1b1}

.wrap {
  margin-left: 24rpx;
  margin-right: 24rpx;
}



</style>
