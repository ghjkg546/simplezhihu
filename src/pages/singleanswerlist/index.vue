<template>
  <div class="container">
    <div class="write_mask" v-show="write_bool">
      <img src="../../../static/image/close.gif" alt @click="write_bool=false" />
      <div class="title">
        <p>{{question.title}}</p>
        
      </div>
      <div class="clearfix"></div>
      <div class="content">
        <textarea name id cols="30" rows="20" v-model="answer_content"></textarea>
      </div>
      <i-button type="success" @click="sendanswer">保存</i-button>
    </div>

    <div class="quest_item">
      <div class="wrap">
        <div class="tags">
          <span>自然科学</span>
          <span>动物</span>
          <span>冷知识</span>
        </div>
        <p class="header">{{content.title}}</p>
        <p class="sub_tile">{{question.title}}</p>
        <div class="infos">
          <span>{{follow_count}}人关注 {{comment_count}}条评论</span>
          <button @click="follow_question">{{follow_anwer_text}}</button>
        </div>
        <div class="btn_area">
          <ul class="flex">
            <li class="flex-item">
              <span @click="invite_show=true">
                <img src="../../../static/image/invite.gif" alt />邀请回答
              </span>
            </li>
            <li class="flex-item" @click="write_bool=true">
              <span>
                <img src="../../../static/image/write.png" alt />添加回答
              </span>
            </li>
          </ul>
        </div>
        <div class="separator1">
          <span>85个回答</span>
        </div>

        <div class="clearfix"></div>
        <div class="list">
          <div class="list-item" v-for="(item, itemIndex) in content" :key="item.id" @click ="gotoanswerdetail(item.id)">
            <div class="author">
              <img src="../../../static/image/avt1.jpg" alt class="avatar" />
              {{item.author_name}}
            </div>
            <div class="content">{{item.content}}</div>
            <div class="info_mes">{{item.up_count}}赞同 -98评论-{{item.create_time}}</div>
            <div class="separator"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="invite_member card" v-show="invite_show">
      <ul class="wrap">
        <li  v-for="(item, itemIndex) in invite_member" :key="item.id">
          <div class="left"><img src="../../../static/image/avt1.jpg" class="avatar_invite" /></div>
          <div class="mid">{{item.username}}</div>
          <i-button :type="item.invited == 0 ?'primary':''" @click="invite_answer(item)" class="small_btn" size="small">{{item.invite_text}}</i-button>
        </li>
        
        <li><i-button @click="invite_show=false" class="small_btn" size="small">关闭</i-button></li>
      </ul>
      
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                content: [],
                question: [],
                follow_text: "关注",
                follow_anwer_text: "关注",
                id: 0,
                write_bool: false,
                answer_content: "",
                follow_count: 0,
                comment_count: 0,
                invite_member: [],
                invite_show:false
            };
        },
        onShow() {
            var that = this;
            that.id = this.$root.$mp.query.id || 1;
            this.getQuestionDetail();
        },
        methods: {
            async save_answer() {
                var that = this;
                let res = await this.$post("answer/write-answer", {
                    author_id: that.content.author_id,
                    answer_content: that.answer_content,
                    answer_id: that.id
                });
                if (res.state == 1) {
                    wx.showToast({
                        title: "发布成功",
                        duration: 2000, //提示的延迟时间，单位毫秒，默认：1500

                        mask: false //是否显示透明蒙层，防止触摸穿透，默认：false
                    });
                }
            },
            gotoanswerdetail(id){
                const url = "../answerdetail/main?id=" + id;
                wx.navigateTo({url});
            },
            async follow_author() {
                var that = this;
                let res = await this.$post("answer/follow-author", {
                    author_id: that.content.author_id
                });
                if (res.state == 1) {
                    that.follow_text = "已关注";
                }
            },

            async invite_answer(item) {
                if(item.invited){
                    return false;
                }
                var that = this;
                let res = await this.$post("notice/invite-answer", {
                    content_id: that.id,
                    user_id: item.id,
                });
                if (res.code == 1) {
                    wx.showToast({
                        title: "邀请成功",
                        icon: "succes",
                        duration: 1000,
                        mask: true
                    });
                    that.invite_show = false;
                    that.invite_member = res.data;
                }
            },

            async follow_question() {
                var that = this;
                let res = await this.$post("question/follow-question", {
                    question_id: that.id
                });
                that.follow_anwer_text = res.state == 1 ? "已关注" : "关注";
                that.follow_count = res.follow_count
            },

            async getQuestionDetail(msg, ev) {
                var that = this;
                let res = await this.$post("question/detail", {id: that.id});
                that.content = res.answers;
                that.question = res.question;
                that.follow_count = res.follow_count;
                that.comment_count = res.comment_count;
                that.invite_member = res.invite_member;
                that.follow_anwer_text = res.follow == 1 ? "已关注" : "关注";
            },

            async sendanswer(msg, ev) {
                var that = this;
                let res = await this.$post("question/write-answer", {
                    question_id: that.question.id,
                    answer_content: that.answer_content
                });
                if (res.code == 1) {
                    wx.showToast({
                        title: "发布成功",
                        icon: "succes",
                        duration: 1000,
                        mask: true
                    });
                    that.write_bool = false;
                    that.content = res.answers;
                }
            }
        },
        created() {
        }
    };
</script>

<style scoped lang="less">
.invite_list{
  height: 110rpx;
    background-color: #fff;
    position: fixed;
    bottom: 0;
}
.flex {
  display: flex;
  flex-direction: row;
  margin-top: 30rpx;
}

.flex-item {
  width: 47%;
  height: 90rpx;
  line-height: 90rpx;
  border: 2rpx solid #fcfcfc;
}

.flex-item span {
  font-size: 26rpx;
}

.tags {
  border-top: 2rpx solid #d2d2d2;
  width: 100%;
  height: 90rpx;
  span {
    width: 160rpx;
    height: 60rpx;
    background: #f6f6f6;
    color: #929292;
    margin-left: 20rpx;
    font-size: 26rpx;
    display: inline-block;
    text-align: center;
    line-height: 60rpx;
    margin-top: 16rpx;
  }
  span:nth-child(1) {
    margin-left: 30rpx;
  }
}
.write_mask {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  background: #fff;
  width: 100%;
  height: 100%;
  img:nth-child(1) {
    margin-left: 45rpx;
    float: left;
  }
  img {
    width: 32rpx;
    height: 32rpx;
    float: left;
    margin-left: 250rpx;
    margin-top: 40rpx;
  }
  .title {
    float: left;
    margin-left: 80rpx;
  }
  .title p:nth-child(2) {
    font-size: 30rpx;
    color: #333;
  }

  textarea {
    padding-left: 20rpx;
  }
}
.separator1 {
  margin-left: -40rpx;
  background-color: #eaeaea;
  height: 80rpx;
  span:nth-child(1) {
    float: left;
    margin-left: 32rpx;
  }
  span:nth-child(2) {
    float: right;
    margin-right: 32rpx;
  }
  font-size: 32rpx;
  line-height: 80rpx;
}
.list {
  .list-item {
    font-size: 24rpx;
    margin-bottom: 18rpx;
  }
  .author {
    margin-top: 40rpx;
    .avatar {
      width: 50rpx;
      height: 50rpx;
      margin-right: 14rpx;
    }
  }
  .separator {
    margin-top: 20rpx;
    margin-left: -40rpx;
    background-color: #eaeaea;
    height: 20rpx;
  }
}
.bg {
  float: left;
  .write_answer {
    color: #0084ff;
    display: block;
    text-align: center;
    font-weight: bold;
    margin-top: 19rpx;
    width: 160rpx;
    height: 60rpx;
    background-color: #f7f7f7;
    font-size: 22rpx;
  }
  img {
    width: 30rpx;
    height: 30rpx;
    margin-top: 15rpx;
    float: left;
  }
  line-height: 40rpx;
}
.btn_area {
  width: 100%;
  text-align: center;
  span {
    display: inline-block;
    width: calc(50% - 1px);
  }
  span:nth-child(1) {
  }
  span:nth-child(1) {
  }
  img {
    width: 40rpx;
    height: 40rpx;
  }
}

.all_an {
  margin-right: 30rpx;
  margin-top: 19rpx;
}
.invite_member {
  .wrap{
    margin-left:30rpx;
    font-size:30rpx;

  }
  .avatar_invite{width:60rpx;height:60rpx;line-height:150rpx;margin-top:30rpx}
  li{
    height:100rpx;line-height:100rpx;border-bottom:1px solid #e2e2e2; display: flex;
    .left{flex:2}
.mid{flex:3}
.small_btn{flex:1;height:40rpx;min-width: 200rpx}
  }
  width: 100%;
  height: auto;
  background-color: #fff;
  position: fixed;
  bottom: 0;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 92%;
    border-radius: 5px;
}



* {
  margin: 0;
  padding: 0;
}
.container {
  background-color: #eaeaea;
  background-size: contain;
  position: relative;
}
.fr {
  float: right;
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
.quest_item {
  width: 100%;
  background-color: #fff;
  margin-top: 20rpx;
}
.wrap {
  margin-left: 40rpx;
}
.quest_item {
  .header {
    font-size: 24rpx;
    color: #000;
    width: 100%;
    padding: 20rpx 0;
    font-size: 46rpx;
    font-weight: bold;
  }
  .sub_title {
    margin-top: 28rpx;
    font-size: 28rpx;
  }
}
.quest_item .header .right {
  float: right;
}
.infos {
  height: 60rpx;
  line-height: 60rpx;
  width: 100%;
  button {
    width: 180rpx;
    height: 60rpx;
    font-size: 24rpx;
    float: right;
    margin-right: 40rpx;
    background-color: #0283ff;
    color: #fff;
  }
  span {
    float: left;
  }

  font-size: 22rpx;
  margin-top: 40rpx;
}

.quest_item .content {
  margin: 40rpx 0;
  font-size: 30rpx;
  color: #000;
  width: 100%;
}

.quest_item .right_area button {
  width: 160rpx;
  height: 60rpx;
  border-radius: 10rpx;
  background-color: #0084ff;
  float: right;
  background-color: blue;
  color: #fff;
  line-height: 60rpx;
}

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
</style>
