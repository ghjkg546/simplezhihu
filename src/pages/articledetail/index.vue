<template>
  <div class="outter" @click = "show_comment = !show_comment">
    <div class="wrap">
      <p class="title">动森评测</p>
      <div class="sub_title">
        <span>任天堂swithc</span>
        <span>2020-01-02</span>
      </div>
      <div class="content" v-html="content">
      </div>
     </div> 
      <div class="bottom">
        <div class="bottom_item"><span class="iconfont icon-zhuanfa"></span>转发</div>
        <div class="bottom_item"><span class="iconfont icon-pinglun"></span>评论</div>
        <div class="bottom_item"><span class="iconfont icon-zan"></span>赞</div>
      </div>

      <div class="comment" v-show="show_comment" @click.stop>
        <div class="write_area">
          <textarea name="" id="" cols="30" rows="10">213213</textarea>
          <span>发布</span>
        </div>
        <div class="btn_area">
          <span class="iconfont icon-checkbox"></span><span>匿名发布</span>
        </div>
      </div>
    
    <div class="comment_item" v-show="true" @click.stop>
      <div class="write_area">
        <div class="avatar">
                <img src="../../../static/image/avt2.jpeg" class="avt">
          </div>
        <div class="comment_detail">
          <p>拉屎的看法进拉萨</p>
          <p>xiaojie</p>
          <p>12:30</p>
        </div>
        <span><span class="iconfont icon-zan"></span></span>
      </div>
      
    </div>

    <div class="comment_item" v-show="true" @click.stop>
      
      <div class="write_area">
        <div class="avatar">
                <img src="../../../static/image/avt2.jpeg" class="avt">
          </div>
        <div class="comment_detail">
          <p>拉屎的看法进拉萨</p>
          <p>xiaojie</p>
          <p>12:30</p>
        </div>
        <span><span class="iconfont icon-zan"></span></span>
      </div>
      
    </div>

    

    
  </div>
  
</template>

<script>

    export default {
        data () {
            return {
                show_fav:false,
                userInfo: {},
                content:[],
                answer_content:'',
                answer_count:0,
                follow_text:'关注',
                id:15,
                write_bool:false,
                visible1: false,
                fav:[],
                list:[],
                fav_text: '收藏',
                show_comment:false,
                fav_img:  require('../../../static/image/star.png')
            }
        },
        onShow() {
            var that=this;
            that.id = this.$root.$mp.query.id || 1
            this.loadanswerdetail();
        },
        methods: {
            gotocomment (key) {
                const url = '../comment/main?id='+key
                wx.navigateTo({ url })
            },
            async show_fav_panel(){
              let that = this;
              if(that.fav_text=='已收藏'){
                let res = await this.$post('fav/remove',{answer_id:that.id})
                if(res.state==1){
                    that.fav_text = '收藏';
                    that.fav_img = require('../../../static/image/star.png');
                    this.show_fav = false;
                    that.fav = res.fav;
                    wx.showToast({
                          title:"操作成功",
                          duration: 2000,//提示的延迟时间，单位毫秒，默认：1500 
                          mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false 
                    })
                }
              } else {
                that.show_fav=true
              }
            },
            
            async loadanswerdetail (msg, ev) {
                var that = this;

                let res = await this.$post('article/detail',{id:that.id})
                that.content = res.result.data.content;
                that.list = res.result.comment;
                that.answer_count = res.answer_count;
                that.fav = res.fav;
                that.fav_text = res.is_fav==1?'已收藏':'收藏';
                if(res.is_fav == 1){
                  that.fav_img = require('../../../static/image/star_blue.png')
                } else {
                  that.fav_img = require('../../../static/image/star.png')
                }
            },
            

        },
        created () {
        }
    }
</script>

<style scoped lang="less">
.btn_area{margin-left:30rpx}
.comment{
  height:320rpx;
  width:100%;
  background-color:#f9f9f9;
  position: fixed;bottom:0rpx;z-index: 20;
   .write_area{display:flex;margin-bottom:40rpx;margin-top:20rpx;
    textarea{flex:5;width:640rpx;height:180rpx;background-color:#fff;border:2rpx solid #f0f0f0;border-radius:10rpx}
  span{flex:1;margin-left:20rpx;font-size:22rpx;margin-top:20rpx}
  }
}

.comment_item{
  font-size:30rpx;
  height:320rpx;
  width:100%;
   .write_area{
    display:flex;margin-bottom:20rpx;margin-top:20rpx;
    .avatar{flex:1}
    .comment_detail{flex:6;width:640rpx;margin-left:40rpx}
  span{flex:1;margin-left:20rpx;font-size:40rpx;margin-top:40rpx}
  }
}

 
  .sub_title{
    margin-top:60rpx;
    span:nth-child(1){font-size:34rpx;color:#6873a3}
    span:nth-child(2){font-size:26rpx;margin-left:30rpx}
  }
  .content{margin-top:60rpx}
  .outter{display:flex;justify-content: center;flex-wrap: wrap;}
  .wrap{width:92%}
  .bottom{
    position: fixed;bottom:0rpx;z-index: 10;width: 100%;
    display:flex; 
    border-top:2rpx solid #e7e7e7;
    background-color:#f9f9f9;
    height:90rpx;
    .bottom_item{
    flex:1;
    text-align:center;line-height:90rpx;font-size:24rpx;
  }
}
.title{font-weight:bold;font-size:36rpx}
.iconfont{font-size:24rpx;margin-right:16rpx}
  .fav_mask{width:100%;
  height:100%;
  position:fixed;
  background-color:#999;
  z-index:15;
  top:0;
  left:0;
  opacity:0.5;}
  
  .fr{float: right}
  .avatar{width: 100rpx;height: 100rpx;width: 18%;margin-left: 26rpx;flex:1}
  .item{width:100%;margin-top: 34rpx;display:flex}
  .right_area{
    flex:1;
    
    }
  .right_area p.name{font-size: 32rpx;margin-bottom: 32rpx;font-weight: bold}
  .right_area p.content{margin-bottom: 40rpx;font-size: 28rpx}
  .right_area span{font-size: 28rpx}
  .right_area{border-bottom: 2rpx solid #d2d2d2}
    .right_area .time{margin-right: 400rpx}
  .zan{width: 40rpx;height: 40rpx}
  .time{color:#d2d2d2}
  .right_area .time_area{margin-bottom: 34rpx}
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


  *{margin: 0;padding: 0}
  


</style>
