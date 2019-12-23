<template>

  <div class="tabs">
        <ul>
          <li
            v-for="(value, key) in tabs"
            :key="index"
            :class="activeIndex == key ?'active':''"
            @click="tabClick(key)"
          >{{ value }}</li>
        </ul>
      </div>
</template>

<script>
    export default {
        props: ['tabs'],
        data() {
        },
        created() {
        },
        methods: {
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
</style>
