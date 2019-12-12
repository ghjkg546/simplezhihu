<template>
  <div class="footer">
    <ul class="nav_ul">
      <li v-for="(item, index) in navList" :key="index" @click="bindNavigateTo(item.pagePath)"><img :src="item.iconPath">
        <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        props: [/*'selectNavIndex', 'needButton', 'handButton', 'btnText'*/],
        data() {
            return {
                navList: [
                    {
                        pagePath: "../index/main",
                        iconPath: "/static/image/index.gif",
                        selectedIconPath: "/static/images/index-active.png",
                        text: "首页"
                    },
                    {
                        pagePath: "../orderList/main",
                        iconPath: "/static/image/wode.gif",
                        selectedIconPath: "/static/images/order-active.png",
                        text: "想法"
                    },
                    {
                        pagePath: "../notice/main",
                        iconPath: "/static/image/index.gif",
                        selectedIconPath: "/static/images/icon-notice-active.png",
                        text: "市场"
                    },
                    {
                        pagePath: "../my/main",
                        iconPath: "/static/image/index.gif",
                        selectedIconPath: "/static/images/icon-notice-active.png",
                        text: "我的"
                    },
                ],
            }
        },
        created() {
        },
        methods: {
            /**
             * 点击导航栏
             * @param index
             */
            /*selectNavItem(index, pagePath) {
                console.log(this.selectNavIndex)

                if (index === this.selectNavIndex) {
                    return false;
                }


                if (index == 0 && this.selectNavIndex == -1) {
                    this.$emit("fetch-index");
                }
                this.bindViewTap(pagePath);
            },*/

            /**
             * 路由跳转
             */
            bindNavigateTo(url) {
                wx.navigateTo({
                    url
                })
            },

            /**
             * tabBar路由跳转
             */
            bindViewTap(url) {
                // 回到顶部
                if (url === '../index/main') {
                    store.commit('setGroupsID', '');
                }
                wx.switchTab({
                    url,
                })
            },
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
