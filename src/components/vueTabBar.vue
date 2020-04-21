<template>
  <div class="footer">
    <ul class="nav_ul">
      <li v-for="(item, index) in navList" :key="index" @click="selectNavItem(index,item.pagePath)">
        <span :class="selectNavIndex===index?item.selectedIconPath:item.iconPath"></span>
        <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        props: ['selectNavIndex', /*'needButton', 'handButton', 'btnText'*/],
        data() {
            return {
                selectNavIndex:0,
                navList: [
                    {
                        pagePath: "../index/main?index=0",
                        iconPath: "iconfont icon-index",
                        selectedIconPath: "iconfont icon-icon_home",
                        text: "首页",
                        selected:1
                    },
                    {
                        pagePath: "../articlelist/main?index=1",
                        iconPath: "iconfont icon-gonglve1",
                        selectedIconPath: "iconfont icon-gonglve",
                        text: "攻略",
                        selected:0
                    },
                    {
                        pagePath: "../notice/main?index=2",
                        iconPath: "iconfont icon-tongzhi",
                        selectedIconPath: "iconfont icon-tongzhi1",
                        text: "通知",
                        selected:0
                    },
                    {
                        pagePath: "../my/main?index=3",
                        iconPath: "iconfont icon-wode",
                        selectedIconPath: "iconfont icon-wode1",
                        text: "我的",
                        selected:0
                    },
                ],
                index:0,
            }
        },
        created() {
        },
        methods: {
            selectNavItem(index, pagePath) {
                if (index === this.selectNavIndex) {
                    return false;
                }
                console.log(index);
                if (index == 0 && this.selectNavIndex == -1) {
                    this.$emit("fetch-index");
                }
                this.bindViewTap(pagePath);
            },
            bindNavigateTo(url) {
                wx.navigateTo({
                    url
                });
            },
            bindViewTap(url) {
                let page = getCurrentPages();
                console.log(page);

                wx.reLaunch({
                    url
                });
            }
                // let new_list = [];
                // let that = this;
                // this.navList.forEach(function(v,k){
                //     v.selected = index == k?1:0
                //     new_list.push(v)
                // })
                // that.navList = new_list;
                // console.log(new_list)
                /*if (that.index === index) {
                    return false;
                }*/
                // wx.navigateTo({
                //     url:pagePath
                // });
                //this.bindViewTap(pagePath);
            

        }
    }
</script>

<style>
  .footer{position: fixed;bottom:30rpx;z-index: 10;width: 100%;height:100rpx;

  background-color: #fff;
    box-shadow:0px 2px 5px 5px #f5f5f5;}
  .nav_ul{display: flex;}
  .footer li{display: inline-block;flex: 1; font-size: 20rpx;text-align: center}
  .footer li img{width: 40rpx;height: 40rpx;margin-top: 20rpx}
</style>
