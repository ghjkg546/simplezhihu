<template>
  <div class="container">
    <div class="item" v-for="(item, key) in list"  :key="index">
      <div class="avatar">
        <img src="../../../static/image/zan_lan.png" class="avt" v-show="item.type==1">
        <img src="../../../static/image/niming.png" class="avt" v-show="item.type==2">
      </div>
      <div class="right_area" @click="jumpToUrl(item.content_id)">
        <p class="name">{{item.title}}</p>
        <p class="content">{{item.content}}</p>
        <div class="bottom">
          <span class="time">{{item.create_time}}</span>
        </div>
      </div>

    </div>
    
    
    <vue-tab-bar :selectNavIndex="3"></vue-tab-bar>
  </div>
</template>

<script>
    import vueTabBar from "../../components/vueTabBar";
    export default {
        data () {
            return {
                list:[],
            }
        },
        components: {
          vueTabBar
        },
        onLoad() {
            var that=this;
            that.id = this.$root.$mp.query.id
            this.loadcomments();
        },
        methods: {
            async loadcomments (msg, ev) {
                var that = this;
                let res = await this.$post('notice/list',{id:that.id})
                that.list = res.data;
            },
            jumpToUrl (key) {
              if(key){
                const url = '../answerdetail/main?id='+key
                wx.navigateTo({ url })
              }
              
            },

        },
        created () {


        }
    }
</script>

<style scoped>


  *{margin: 0;padding: 0}
  

  .fr{float: right}
  .avatar{float: left;width: 100rpx;height: 100rpx;width: 18%;margin-left: 26rpx}
  .item{width:100%;margin-top: 34rpx}
  .right_area{
    width: 75%;
    float: left;}
  .right_area p.name{font-size: 32rpx;margin-bottom: 20rpx;font-weight: bold}
  .right_area p.content{margin-bottom: 20rpx;font-size: 28rpx}
  .right_area span{font-size: 28rpx}
  .right_area{border-bottom: 2rpx solid #d2d2d2}
    .right_area .time{margin-right: 400rpx}
  .zan{width: 40rpx;height: 40rpx}
  .time{color:#d2d2d2}
  .right_area .bottom{margin-bottom: 16rpx}
  .avt{width: 90rpx;
    height:90rpx;border-radius: 45rpx}
  .dianzan{line-height: 40rpx}
  .dianzan span{display: inline-block;vertical-align: middle}
  .dianzan img{display: inline-block;vertical-align: middle;
    font-style: 0px;}
  .clearfix:after {
    content:"";
    display: block;
    clear:both;
  }
</style>
