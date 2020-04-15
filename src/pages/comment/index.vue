<template>
  <div class="container">
    <div class="item" v-for="(item, key) in list"  :key="index">
      <div class="avatar">
        <img src="../../../static/image/avt2.jpeg" class="avt">
      </div>
      <div class="right_area">
        <p class="name">{{item.author.username}}</p>
        <p class="content">{{item.content}}</p>
        <div class="bottom">
          <span class="time">{{item.create_time}}</span>
          <span class="dianzan"><img src="../../../static/image/zan.png" class="zan" @click="voteit(item.id)"><span>{{item.vote_count}}</span></span>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    评论
    <input type="text" v-model="comment_text" class="comment_input">
    <button @click="leave_comment()">发送</button>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                motto: 'Hello World',
                userInfo: {},
                list:[],
                comment_text:'',
                id:0
            }
        },
        onLoad() {
            var that=this;
            that.id = this.$root.$mp.query.id
            this.loadcomments();
        },
        methods: {
            async loadcomments (msg, ev) {
                var that = this;
                let res = await this.$post('answer/comment',{id:that.id})
                that.list = res;
            },
            async voteit (answer_id) {
                var that = this;
                let res = await this.$post('answer/vote-comment',{id:that.id,comment_id:answer_id})
                 that.list = res;
            },
            async leave_comment () {
                //console.log(333);
                var that = this;
                //console.log(that.comment_text)
                //console.log(that.id)
                let res = await this.$post('answer/leave-comment',{id:that.id, content:that.comment_text})
                that.list = res;
                that.comment_text = '';

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
  .right_area p.name{font-size: 32rpx;margin-bottom: 32rpx;font-weight: bold}
  .right_area p.content{margin-bottom: 40rpx;font-size: 28rpx}
  .right_area span{font-size: 28rpx}
  .right_area{border-bottom: 2rpx solid #d2d2d2}
    .right_area .time{margin-right: 400rpx}
  .zan{width: 40rpx;height: 40rpx}
  .time{color:#d2d2d2}
  .right_area .bottom{margin-bottom: 34rpx}
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
  .comment_input{
    border:1px solid #d2d2d2
  }
</style>
