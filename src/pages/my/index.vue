<template>
  <div class="container">
    <div class="header">
      <p class="name">周晓杰</p>
      <p class="chakan">查看或编辑个人主页</p>
    </div>
    <div class="list">
      <ul>
        <li>
          <p>68</p>
          <p>我的创作</p>
        </li>
        <li>
          <p>68</p>
          <p>关注</p>
        </li>
        <li @click="goToMyFav()">
          <p>68</p>
          <p>我的收藏</p>
        </li>
        <li>
          <p>68</p>
          <p>最近浏览</p>
        </li>
      </ul>
    </div>
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
            this.loadcomments();
        },
        methods: {
            async loadcomments (msg, ev) {
                var that = this;
                let res = await this.$post('answer/comment',{id:that.id})
                that.list = res;
            },
            goToMyFav () {
              const url = '../myfav/main'
              wx.navigateTo({ url })
            },

        },
        created () {


        }
    }
</script>

<style scoped>


  *{margin: 0;padding: 0}
  

  .clearfix:after {
    content:"";
    display: block;
    clear:both;
  }
  .header{

    width: 700rpx;height: 180rpx;background-color: #f1f1f1;

  }
  .header .name{font-weight: bold;margin-left: 30rpx}
  .header .chakan{font-size: 26rpx;margin-top: 28rpx;margin-left: 30rpx}
  .list{width: 100%;margin-top: 44rpx}
  .list li{display: inline-block;font-size: 28rpx;width: 23%;text-align: center  ;
  }
</style>
