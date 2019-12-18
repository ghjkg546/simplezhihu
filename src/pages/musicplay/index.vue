<template>
  <div class="container">
    <slider @change="dragend" @changing="draging" :value="time" :max="maxValue" class="myslider"></slider>
    <button @click="playmusic">播放</button>
    <button @click="pausemusic">{{pauseText}}</button>
  </div>
</template>

<script>
import mpButton from "mpvue-weui/src/button";
import mpSearchbar from "mpvue-weui/src/searchbar";
import mpSlider from "mpvue-weui/src/slider";
export default {
  components: {
    mpSlider,
    mpSearchbar
  },
  data() {
    return {
      backgroundAudioManager: null,
      inputValue: "ab",
      motto: "Hello World",
      showValue: 10,
      maxValue: 100,
      userInfo: {},
      content: [],
      follow_text: "关注aa",
      id: 0,
      write_bool: false,
      answer_content: "",
      songList: [],
      time: 0,
      isMovingSlider: false,
      pauseText: "暂停"
    };
  },
  onLoad() {
    let that = this;
    that.backgroundAudioManager = wx.getBackgroundAudioManager();
  },
  methods: {
    confirm() {},
    blur() {},
    pausemusic() {
      let that = this;
      wx.getBackgroundAudioPlayerState({
        success(res) {
          const status = res.status;
          if (status == 1) {
            //播放中
            that.backgroundAudioManager.pause();
            that.pauseText = "继续";
          } else if (status == 2) {
            wx.showToast({
              title: "当前没有播放音乐",
              icon: "success",
              duration: 1000
            });
          } else {
            that.pauseText = "暂停";
            that.backgroundAudioManager.play();
          }
        }
      });
    },
    playmusic() {
      let that = this;
      wx.getStorage({
        key: "musicHash",
        success(res) {
          wx.request({
            url:
              "https://www.kugou.com/yy/index.php?r=play/getdata&hash=" +
              res.data, // 仅为示例，并非真实的接口地址
            header: {
              "content-type": "application/json" // 默认值
            },
            success(res) {
              // 设置了 src 之后会自动播放
              let song = res.data.data;
              console.log(song);
              that.backgroundAudioManager.title = song.audio_name;
              that.backgroundAudioManager.epname = song.album_name;
              that.backgroundAudioManager.singer = song.authors[0].author_name;
              that.backgroundAudioManager.coverImgUrl = song.img;
              that.backgroundAudioManager.src = song.play_url;
            }
          });
        }
      });

      that.backgroundAudioManager.onTimeUpdate(() => {
        if (!that.isMovingSlider) {
          that.time = that.backgroundAudioManager.currentTime;
        }

        that.maxValue = that.backgroundAudioManager.duration;
      });
    },
    dragend(e) {
      let that = this;
      that.isMovingSlider = false;
      that.backgroundAudioManager.seek(e.mp.detail.value);
    },
    draging(e) {
      let that = this;
      that.isMovingSlider = true;
      that.backgroundAudioManager.seek(e.mp.detail.value);
    }
  },
  created() {}
};
</script>

<style scoped lang="less">
li {
  width: 100%;
  list-style-type: none;
  border-bottom: 2px solid #333;
}
.myslider {
  width: 100%;
  height: 10px;
}
button {
  margin-top: 20px;
}
</style>
