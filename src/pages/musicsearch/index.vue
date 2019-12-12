<template>
  <div class="container">
    <div class="weui-search-bar">
      <div class="weui-search-bar__box">
        <icon class="weui-icon-search_in-box" size="14" type="search"></icon>
        
        <div class="weui-search-bar__form">

          <input type="text" class="weui-search-bar__input" @input ="inputing"></input>
        </div>
        
      </div>
      
    </div>
    <ul>
      <li v-for="(item, itemIndex) in songList" :key="item.id" @click="clickMusic(item)">
        <p>{{item.songname}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                inputValue:'ab',
                motto: 'Hello World',
                userInfo: {},
                content:[],
                follow_text:'关注aa',
                id:0,
                write_bool:false,
                answer_content:'',
                songList:[]
            }
        },
        onLoad() {
           /* var that=this;
            that.id = this.$root.$mp.query.id || 1
            this.answerlist();

            console.log('oneload')*/
        },
        methods: {
          confirm(){

          },
          clickMusic(item){
            wx.setStorage({
              key: 'musicHash',
              data: item.hash
            })
            wx.navigateTo({
              url: '../musicplay/main'
            })
            
          },
          blur(){

          },
            inputing(e){
              let that=this;
              that.keyword=e.mp.detail.value;
              wx.request({
                url: 'http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword='+that.keyword+'&page=1&pagesize=20&showtype=1', // 仅为示例，并非真实的接口地址
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success(res) {
                  that.songList=res.data.data.info
                }
              })
            },
            gotocomment (key) {
                const url = '../comment/main?id='+key
                wx.navigateTo({ url })
            },

        },
        created () {
        }
    }
</script>

<style scoped lang="less">
.search{width:100%}
ul{width:100%;}
li{width:100%;list-style-type:none;border-bottom:2px solid #333}
li p{margin-left:10%}
.weui-search-bar{width:100%}
.container{width:100%;display:flex}


</style>
