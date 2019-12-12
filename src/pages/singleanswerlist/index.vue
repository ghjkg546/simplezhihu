<template>
  <div class="container">

    <div class="write_mask" v-show="write_bool">
      <img src="../../../static/image/close.gif" alt="" @click="write_bool=false">
      <div class="title">
        <p>怎么评价马云？</p>
        <p>草稿已保存</p>
      </div>
      <img src="../../../static/image/write.png" alt="" @click="sendanswer">
      <div class="clearfix"></div>
      <div class="content">
        <textarea name="" id="" cols="30" rows="10" v-model="answer_content"></textarea>
      </div>
    </div>

    <div class="quest_item">

      <div class="wrap">
        <div class="tags"><span>自然科学</span>
          <span>动物</span><span>冷知识</span></div>
        <p class="header">{{content.title}}</p>
        <p class="sub_tile">你的来你想呢不会痛吗</p>
        <div class="infos">
          <span>963人关注 9条评论</span><button>已关注</button>
        </div>
        <div class="btn_area">
          <span @click="write_bool=true"><img src="../../../static/image/invite.gif" alt="">邀请回答</span>
          <span><img src="../../../static/image/write.png" alt="">添加回答</span>
          </div>
        <div class="separator1"><span>85个回答</span>
        <span>按质量排序</span></div>

        <div class="clearfix"></div>
        <div class="list">

          <div class="list-item" v-for="(item, itemIndex) in content" :key="item.id" >
            <div class="author"><img src="../../../static/image/avt1.jpg" alt="" class="avatar"> {{item.author_name}}</div>
            <div class="content">{{item.content}}</div>
            <div class="info_mes">{{item.up_count}}赞同 -98评论-{{item.create_time}}</div>
            <div class="separator"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
    </div>

  </div>
</template>

<script>
    export default {
        data () {
            return {
                motto: 'Hello World',
                userInfo: {},
                content:[],
                follow_text:'关注',
                id:0,
                write_bool:false,
                answer_content:''
            }
        },
        onLoad() {
            var that=this;
            that.id = this.$root.$mp.query.id || 1
            this.answerlist();

            console.log('oneload')
        },
        methods: {
            gotocomment (key) {
                const url = '../comment/main?id='+key
                wx.navigateTo({ url })
            },
            gotocomment (key) {
                const url = '../comment/main?id='+key
                wx.navigateTo({ url })
            },
            async follow_author () {
                var that = this;
                let res = await this.$post('answer/follow-author',{author_id:that.content.author_id})
                if(res.state==1){
                    that.follow_text ='已关注';
                }
            },
            async answerlist (msg, ev) {
                var that = this;
                that.id=1;
                let res = await this.$post('answer/answerlist',{id:that.id})
                that.content = res;
                console.log(that.productlist)
            },
            async sendanswer (msg, ev) {
                var that = this;
                that.id=1;
                let res = await this.$post('answer/writeanswer',{answer_id:that.id,answer_content:that.answer_content})
                if(res['state'] ==1){
                    wx.showToast({
                        title: '成功',
                        icon: 'succes',
                        duration: 1000,
                        mask:true
                    })
                    that.write_bool=false;
                    that.content=res['content'];
                }
            },

        },
        created () {
        }
    }
</script>

<style scoped lang="less">
  .tags{
    border-top: 2rpx solid #d2d2d2;
    width: 100%;
  height:90rpx;
    span{width: 160rpx;height: 60rpx;background: #f6f6f6;color:#929292;margin-left: 20rpx;
   font-size: 26rpx;display: inline-block;text-align: center;line-height: 60rpx;margin-top: 16rpx}
    span:nth-child(1){margin-left: 30rpx;}
  }
  .write_mask{
    position: absolute;left: 0;top:0;z-index: 2;background: #fff;
    width:100%;height:100%;
  img:nth-child(1){margin-left: 45rpx;float: left}
  img{width: 32rpx;height: 32rpx;float: left;margin-left: 250rpx;margin-top: 40rpx}
  .title{  float: left;margin-left: 80rpx}
  .title p:nth-child(2){font-size: 30rpx;color: #333}

  textarea{padding-left: 20rpx}
  }
  .separator1{
    margin-left: -40rpx;
    background-color:#eaeaea;
    height: 80rpx;
    span:nth-child(1){float: left;margin-left: 32rpx}
    span:nth-child(2){float: right;margin-right: 32rpx}
    font-size:32rpx;
    line-height:80rpx;
  }
  .list{
    .list-item{
      font-size: 24rpx;
      margin-bottom: 18rpx;
    }
    .author{margin-top: 40rpx;
      .avatar{width: 50rpx;height: 50rpx;margin-right: 14rpx}
    }
    .separator{
      margin-top: 20rpx;
      margin-left: -40rpx;
      background-color:#eaeaea;
      height: 20rpx;
    }
  }
  .bg {
    float:left;
    .write_answer{

      color: #0084ff;
      display: block;text-align: center;
      font-weight: bold;
      margin-top: 19rpx;
      width: 160rpx;height: 60rpx;background-color: #f7f7f7;font-size: 22rpx}
      img{width: 30rpx;height: 30rpx;margin-top: 15rpx;float: left}
      line-height: 40rpx

  }
  .btn_area{
    width:100%;
    text-align:center;
    span{display: inline-block;width: calc(50% - 1px)}
    span:nth-child(1){ }
  span:nth-child(1){}
    img{width: 40rpx;height: 40rpx}
  }


  .all_an{margin-right:30rpx;margin-top: 19rpx; }
  .footer{width: 100%;height: 110rpx;background-color: #fff;position: fixed;bottom: 0}
  .footer .right_area li{float: left}
  .footer .vote_btn{float: left;width: 360rpx}
  .footer .right_area{margin-left: 5rpx;
    float: left;;width: 360rpx}

  .vote{width: 24rpx;height:24rpx}
  .vote1{width: 48rpx;height:48rpx}
  .vote_btn{font-size: 30rpx;margin-top: 20rpx}
  .vote_btn span{width: 200rpx;text-align: center;
    height: 60rpx;background-color:#f7f7f7 ;display: inline-block;margin-left: 20rpx  ;
    line-height: 60rpx}
  .vote_btn span.spe{width: 100rpx;margin-left: 10rpx}
.vote_btn .active{color: blue}


  .footer .right_area li{float: left;width: 120rpx;text-align: center;font-size: 20rpx;height: 64rpx;margin-top: 15rpx}

  *{margin: 0;padding: 0}
  .container{
    background-color: #eaeaea;
    background-size: contain;
    position: relative
  }
  .fr{float: right}
  .tabs{width: 100%;background: #f54353;font-size: 24rpx;height: 80rpx}
  .tabs ul li{width: 33%;
    display: inline-block;text-align: center;line-height: 80rpx;color: #fff;
    border-bottom: 4rpx solid #f54353}
  .tabs ul li.active{border-bottom: 4rpx solid #f9e98a}
  .quest_item{width: 100%;background-color: #fff;margin-top: 20rpx}
  .wrap{margin-left: 40rpx}
  .quest_item{
    .header {
      font-size: 24rpx;
      color: #000;
      width: 100%;
      padding: 20rpx 0;
      font-size: 46rpx;
      font-weight: bold;

  }
    .sub_title{

      margin-top: 28rpx;
      font-size: 28rpx;
    }

  }
  .quest_item .header .right{
    float: right;
  }
  .infos{
    height: 60rpx;
    line-height: 60rpx;
  width:100%;
  button{
    width:180rpx;height: 60rpx;font-size: 24rpx;float: right;margin-right: 40rpx;
    background-color: #0283ff;color: #fff;
  }
  span{float: left}

  font-size:22rpx;
  margin-top:40rpx;

  }

  .quest_item .content {

    margin: 40rpx 0;
    font-size: 30rpx;
    color: #000;
    width: 100%;
  }






  .quest_item .right_area button{
    width: 160rpx;
    height:60rpx;
    border-radius: 10rpx;
    background-color: #0084ff;
    float: right;
    background-color: blue;
    color: #fff;
    line-height: 60rpx;

  }


  .clearfix:after {
    content:"";
    display: block;
    clear:both;
  }




</style>
