<template>

  <div class="container">
    <div class="fav_mask" v-show="show_fav"  @click="show_fav=false">
    </div>
    <div class="fav_panel" v-show="show_fav">
      <ul>
        <div v-show="!create_new_fav">
          <li @click="add_to_fav(item.id)" v-for="(item, key) in fav" :key="index"><p>{{item.category_name}}</p>
            <p class="fav_bottom">{{item.answer_count}}个内容</p>
          </li>
          <li class="fav_btns"> 
            <i-button type="primary" @click="create_new_fav=true" class="small_btn" size="small">新建</i-button>
            <i-button @click="show_fav=false" class="small_btn" size="small">返回</i-button>
          </li>
        </div>
        <div v-show="create_new_fav">
          <li class="no_border">
            <p class="fav_title">创建新收藏夹</p>
            <input type="text" v-model="category_name" class="new_fav_name" />
          </li>
          <li class="fav_btns"> 
            <i-button type="primary" @click="create_new_fav_folder" class="small_btn" size="small">确定</i-button>
            <i-button @click="create_new_fav=false" class="small_btn" size="small">返回</i-button>
          </li>
        </div>
      </ul>
    </div>  
    <div class="write_mask" v-show="write_bool">
      <img src="../../../static/image/close.gif" alt="" @click="write_bool=false">
      <div class="title">
        <div class="title_left">
          <p><input type="text" name="title" placeholder="这里写问题"></p>
        <p>草稿已保存</p></div>
        <div class="title_right">
          <img src="../../../static/image/write.png" alt="" class="save_btn"  @click="save_answer()">
        </div>
      </div>
      
      <div class="clearfix"></div>
      <div class="content">
        <textarea name="" id="" cols="30" rows="10" :value="answer_content" />
      </div>
    </div>

    <div class="quest_item">
      <div class="wrap">
        <p class="header">{{title}}</p>
        <div class="content">
          <div class="bg">
            <span class="write_answer"  @click="write_bool=true">
              写回答</span>
          </div>
          <div class="fr">
            <span class="fr all_an" @click = "gotoAllAnswer(question_id)">查看全部{{answer_count}}个回答 </span></div>
          </div>
          <div class="author">
              <div class="avatar_area">
                <img src="../../../static/image/avt1.jpg" alt="" class="avatar">
              </div>
              
              <ul class="info">
                <li class="short">{{username}}</li>
                <li class="brief">{{brief}}</li>
              </ul>
              <div class="blank_area"></div>
                <button class="follow_btn" @click="follow_author(content.author_id)"> {{follow_text}}</button>
          </div>
        
        <div class="para">
          <p v-html="content.content"></p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="vote_btn">
        <button :class="content.liked == 1 ?'active':''"  @click="voteit()">
          <span class="iconfont .icon-arrow-up"></span>
          赞同{{content.up_count}}
        </button>
      </div>
      <div class="right_area">
        <ul>
          <li @click ="updateThankState()">
            <span :class="thank_text == '感谢' ?'iconfont icon-like1':'iconfont icon-like2'"></span>
            <p>{{thank_text}}</p></li>
          <li @click="show_fav_panel()">
            <span :class="fav_text == '收藏' ?'iconfont icon-shoucang':'iconfont icon-favfill'"></span>
            <p>{{fav_text}}</p></li>
          <li @click = "gotocomment(content.id)">
            <span class="iconfont icon-pinglun1"></span>
            <p>评论</p></li>
        </ul>
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
                id:0,
                write_bool:false,
                visible1: false,
                fav:[],
                thank_text : '感谢',
                fav_text: '收藏',
                title:'',
                brief:'',
                question_id:0,
                create_new_fav:false,
                category_name:'',
                username:''
            }
        },
        onShow() {
            var that=this;
            that.id = this.$root.$mp.query.id || 1
            this.loadanswerdetail();
        },
        methods: {
            async updateThankState(){
              let res = await this.$post('answer/thank-answer',{answer_id:this.id})
              this.thank_text = res.thank_text;
            },
            gotocomment (key) {
                const url = '../comment/main?id='+key
                wx.navigateTo({ url })
            },
            gotoAllAnswer (id) {
                const url = '../singleanswerlist/main?id='+id
                wx.navigateTo({ url })
            },
            async show_fav_panel(){
              let that = this;
              that.create_new_fav = false;
              if(that.fav_text=='已收藏'){
                let res = await this.$post('fav/remove',{answer_id:that.id})
                if(res.code==1){
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
            async follow_author () {
                var that = this;
                let res = await this.$post('user/follow-author',{author_id:that.content.author_id})
                that.follow_text =res.follow_text;
            },
            async create_new_fav_folder () {
                var that = this;
                let res = await this.$post('fav/add-new-folder',{category_name:this.category_name})
                wx.showToast({
                      title:"添加成功",
                      duration: 2000,//提示的延迟时间，单位毫秒，默认：1500 
                      mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false 
                })
                that.show_fav = false;
                that.create_new_fav = false;
                that.fav = res.fav;
            },
            async add_to_fav (cate_id) {
                var that = this;
                let res = await this.$post('fav/add',{answer_id:that.id,cate_id:cate_id})
                
                if(res.code==1){
                    this.show_fav = !this.show_fav;
                    that.fav = res.fav;
                    wx.showToast({
                          title:"操作成功",
                          duration: 2000,//提示的延迟时间，单位毫秒，默认：1500 
                          mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false 
                    })
                    that.fav_img = require('../../../static/image/star_blue.png');
                    that.fav_text = '已收藏';
                }
            },
            async save_answer () {
                var that = this;
                let res = await this.$post('answer/write-answer',{author_id:that.content.author_id,answer_content:that.answer_content,
                  answer_id:that.id})
                if(res.code==1){
                  wx.showToast({
                        title:"发布成功",
                        duration: 2000,//提示的延迟时间，单位毫秒，默认：1500 
                        mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false 
                      })

                }
            },
            async loadanswerdetail (msg, ev) {
                var that = this;
                let res = await this.$post('answer/detail',{id:that.id})
                that.content = res.content;
                that.username = res.content.author.username;
                that.brief = res.content.author.brief;
                that.answer_count = res.answer_count;
                that.fav = res.fav;
                that.title= res.content.title;
                that.fav_text = res.is_fav==1?'已收藏':'收藏';
                that.follow_text = res.follow_text;
                that.thank_text = res.thank_text;
                that.question_id = res.content.question_id
                if(res.is_fav == 1){
                  that.fav_img = require('../../../static/image/star_blue.png')
                } else {
                  that.fav_img = require('../../../static/image/star.png')
                }
            },
            async voteit (msg, ev) {
                var that = this;
                let res = await this.$post('answer/like',{id:that.id})
                that.content.liked = res.data.liked
                that.content.up_count = res.data.up_count
            },

        },
        created () {
        }
    }
</script>

<style scoped lang="less">
  .no_border{border-bottom:0 !important}
  .fav_btns{
    display:flex;
    .small_btn{flex:1}
  }
  .new_fav_name {border-radius: 5px;border:1px solid #f0f2f7;width:80%;margin:0 auto;min-height:60rpx;line-height:60rpx}
  .iconfont{font-size:20px}
  .fav_title{text-align:center;margin-bottom:10rpx}
  .fav_mask{width:100%;
  height:100%;
  position:fixed;
  background-color:#999;
  z-index:15;
  top:0;
  left:0;
  opacity:0.5;}
  .fav_panel{
    position: fixed;bottom:0rpx;z-index: 25;background-color:#fff;width:100%;border-top:1px solid #e2e2e2;
  }
  .fav_panel li{list-style-type:none;height:140rpx;border-bottom:1px solid #e2e2e2;
      p{margin-top:10rpx;margin-left:20rpx}
      .fav_bottom{margin-bottom:10prx}
    }


  .write_mask{
    position: absolute;left: 0;top:0;z-index: 2;background: #fff;
    width:100%;height:100%;
  img:nth-child(1){margin-left: 45rpx;float: left}
  img{width: 32rpx;height: 32rpx;float: left;margin-left: 250rpx;margin-top: 40rpx}
  .title{  float: left;margin-left: 80rpx}
  .title p:nth-child(2){font-size: 30rpx;color: #333}
  .content{margin-top: 40rpx}
  textarea{padding-left: 20rpx}
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
      line-height: 60rpx

  }
  .save_btn{float:left}
  .title_left{float:left}
  .title_right{float:right}

  .all_an{margin-right:30rpx;margin-top: 19rpx; }
  .footer{width: 100%;height: 110rpx;background-color: #fff;position: fixed;bottom: 0}
  .footer .right_area li{float: left}
  .footer .vote_btn{float: left;width: 360rpx}
  .footer .right_area{margin-left: 5rpx;
    float: left;;width: 360rpx}

  .vote{width: 24rpx;height:24rpx}
  .vote1{width: 48rpx;height:48rpx}
  .vote_btn{font-size: 30rpx;margin-top: 20rpx}
  .vote_btn button{width: 260rpx;text-align: center;
    height: 60rpx;background-color:#f7f7f7 ;display: inline-block;margin-left: 20rpx  ;
    line-height: 60rpx}
  .vote_btn button.spe{width: 100rpx;margin-left: 10rpx;font-size:26rpx}
.vote_btn .active{color: #fff;background-color:#0084ff}


  .footer .right_area li{float: left;width: 120rpx;text-align: center;font-size: 20rpx;height: 64rpx;margin-top: 15rpx}

  *{margin: 0;padding: 0}
  .container{
    background-color: #eaeaea;height: 100%;
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
  .wrap{padding:0 40rpx;width:100%;box-sizing:border-box;}
  .quest_item .header {
    font-size: 24rpx;
    color: #aeaeae;
    width: 100%;
    padding: 20rpx 0;
    font-size: 48rpx;
    font-weight: bold;
    border-bottom: 2rpx solid #eaeaea;
  }
  .quest_item .header .right{
    float: right;
  }

  .quest_item .content {
    height: 120rpx;
    margin: 40rpx 0;
    font-size: 30rpx;
    color: #000;
    width: 100%;
  }
  .quest_item .short {
    font-size: 20rpx;
    color: #aeaeae;
  }

  .quest_item .avatar {
    border-radius: 45rpx;
    
    width: 90rpx;
    height: 90rpx;
  }
  .brief{font-size:30rpx}

  .author{
    display:flex;
    height: 140rpx;border-bottom:2rpx solid #eaeaea;margin-top: 20rpx;
    .avatar_area{flex:1}
    .blank_area{flex:2}
     ul.info{
      flex:2;width: 400rpx;margin-left: 16rpx;

    }

     button{flex:1;width: 160rpx;height: 70rpx;font-size: 24rpx;text-align: center;
     background-color: #0084ff;color: #fff;line-height: 70rpx;margin-right: 28rpx}
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

  .quest_item .main{margin: 40rpx 0;color: #aeaeae;;font-size: 30rpx}

  .quest_item .para{line-height: 52rpx;font-size:34rpx;margin-top: 40rpx;margin-bottom: 100rpx;box-sizing:border-box; }
 
  .clearfix:after {
    content:"";
    display: block;
    clear:both;
  }

  .fullscreen{
    width:100%
  }
 


</style>
