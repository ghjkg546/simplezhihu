<template>
  <div class="a">
    <div class="container1">
      <div class="wrap">
        <p>有个漂亮女友体验</p>
        <img class="img" src="../../../static/image/nvyou.png" alt="">
        <p class="text_content">一些有使用Photoshop经验的同学，突然脑子一热想用这款软件绘制像素画，却发现画的像素有透明度、边缘默认会变成柔边缘（放大后有透明度）。</p>
        <div class="btn_box">
          <div class="btn1">111</div>
          <div class="btn2">22</div>
        </div>
      </div>

      
      
    </div>

    <div class="container1">
      <div class="wrap">
        <p>有个漂亮女友体验</p>
        <img class="img" src="../../../static/image/nvyou.png" alt="">
        <p class="text_content">一些有使用Photoshop经验的同学，突然脑子一热想用这款软件绘制像素画，却发现画的像素有透明度、边缘默认会变成柔边缘（放大后有透明度）。</p>
        <div class="btn_box">
          <div class="btn1">111</div>
          <div class="btn2">22</div>
        </div>
      </div>

      
      
    </div>
  </div>
  
</template>

<script>
import vueTabBar from "../../components/vueTabBar";
export default {
  data() {
    return {
      motto: "Hello World",
      tabs: ["我的收藏", "热门收藏"],
      activeIndex: 1,
      userInfo: {},
      favlist: [],
      type: "fav"
    };
  },

  components: {
    vueTabBar
  },
  onLoad() {
    var that = this;
    that.type = this.$root.$mp.query.type || 1;
    this.clickHandle1();
  },
  methods: {
    
  },

  created() {
    // 调用应用实例的方法获取全局数据t
  }
};
</script>

<style scoped>
*{margin:0;padding: 0  }
.wrap{width: 640rpx}
.btn_box{display: flex;margin-top: 26rpx;color:#0084ff;width: 210px;
 }
.btn1{width: 220rpx;height: 70rpx;background: #e5f2ff;border-radius: 6rpx;text-align: center;;line-height: 70rpx}
.btn2{width: 70rpx;height: 70rpx;background: #e5f2ff;border-radius: 6rpx;text-align: center;;line-height: 70rpx;margin-left: 18rpx}
.img{
  width: 640rpx;
  height: 240rpx;
  margin-top: 16rpx;
  margin-bottom: 26rpx;
  border-radius: 10rpx
}
p{
  text-align: left
}
.text_content{font-size: 32rpx}
.container1{
 box-shadow: 0 4rpx 8rpx 0 rgba(0,0,0,0.2);
     transition: 0.3s;
  text-align: center;
  width: 100%;
  height: 800rpx;
  padding: 40rpx;
  margin:40rpx auto;
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

</style>
