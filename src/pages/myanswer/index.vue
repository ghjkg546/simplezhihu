<template>
  <div class="container">

    <titletab :tabs="tabs"></titletab>
    <div class="item" v-for="(item, key) in list"  :key="index">
      <div class="right_area">
        <p class="name">{{item.title}}</p>
        <p class="content">{{item.content}}</p>
        <div class="bottom">
          <div class="bottom_left">{{item.create_time}}</div>
          <div class="bottom_right" @click="jumpToUrl(item.id)">详细</div>
        </div>
      </div>

    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import titletab from "../../components/titletab";
    export default {
        data () {
            return {
                list:[],
                tabs:['我的回答']
            }
        },
        components: {
          titletab
        },
        onLoad() {
            var that=this;
            that.id = this.$root.$mp.query.id
            this.loadcomments();
        },
        methods: {
            async loadcomments (msg, ev) {
                var that = this;
                let res = await this.$post('answer/my-answer-list',{})
                that.list = res.answers;
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
    width: 100%;
    float: left;padding-left:40rpx}
  .right_area p.name{font-size: 32rpx;margin-bottom: 20rpx;font-weight: bold}
  .right_area p.content{margin-bottom: 40rpx;font-size: 30rpx}
  .right_area span{font-size: 28rpx}
  .right_area{border-bottom: 2rpx solid #d2d2d2}
    .right_area .time{margin-right: 400rpx}
  .zan{width: 40rpx;height: 40rpx}
  .time{color:#d2d2d2}
  .right_area .bottom{margin-bottom:100rpx}
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
  .bottom_left{float:left;font-size:30rpx}
  .bottom_right{float:right;font-size:30rpx;margin-right:100rpx;color:#92b4d7}

</style>
