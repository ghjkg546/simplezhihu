<template>
  <div class="tabs">
        <ul>
          <li
            v-for="(item, index) in tabs" :key="index"
            :class="activeIndex == index ?'active':''"
            @click="reloadQuestion(index)"
          >{{ item }}</li>
        </ul>
      </div>
</template>

<script>
    export default {
        props: ['tabs','activeIndex'],
        created() {
        },
        methods: {
            //刷新问题
            reloadQuestion(index) {
               this.$emit("reloadQuestion",index);
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
