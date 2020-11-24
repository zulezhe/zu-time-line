<!--
 * @Author: wangchaoxu
 * @Date: 2020-06-04 10:41:23
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-10-15 09:43:16
 * @Description:
-->
<template>
  <div class="time-line-container">
    <a href="javascript:;" class="time-line-close" @click="handleCloseTimeLIne" v-show="false">×</a>
    <div type="flex" justify="" :gutter="10" class="time-line">
      <!-- 播放 -->
      <div :span="2" class="handle-con play-btn" @click="handlePlay">
        <img class="img-con" :src="isPlay ? playImg : stopPlayImg" alt="" />
      </div>
      <!-- 时间轴 -->
      <div :span="10" class="line-con">
        <!-- 轴线 -->
        <div class="line" ref="line" id="line">
          <div class="mark-con" :style="{ width: markWidthInit }" v-for="(item, index) in lineData" :key="index" :title="item" ref="markCon" @click.stop="markerClick(item, index + 1, $event)">
            <!-- 刻度 -->
            <div class="mark" :style="index % 2 == 0 ? { height: '15px' } : { height: '15px' }"></div>
            <!-- 文字 -->
            <div class="label">{{ item | formatTime }}</div>
          </div>
          <!-- 游标 -->
          <div class="vernier" ref="vernier" :style="{ left: vernierLeft }">
            <div class="tooltip">
              <div class="text">{{ value | dateFormat }}</div>
              <div class="trangle"></div>
            </div>
          </div>
        </div>
        <!-- 过去的 -->
        <div class="passed"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { timeFormat, timeRange, findNearByArr } from "./common";
export default {
  name: "wTimeLine",
  components: {},
  props: {
    btime: {
      type: Date,
    },
    etime: {
      type: Date,
    },
    lineData: {
      type: Array,
      default: () => timeRange(timeFormat(new Date(), "yyyy-MM-dd 00:00:00"), timeFormat(new Date(), "yyyy-MM-dd 24:00:00"), 24),
    },
    playImg: {
      type: String,
      default: require("./images/stop.png"),
    },
    stopPlayImg: {
      type: String,
      default: require("./images/play.png"),
    },
    nextImg: require("./images/next.png"),
    preImg: require("./images/pre.png"),
  },
  data() {
    return {
      isPlay: false,
      date: new Date(),
      count: this.lineData.length, //分段的长度
      timer: null, //播放时的定时器
      vernierLeft: "0",
      markWidth: "", //每个mark的宽度
      index: 1, //当前所在元素的下标
      value: null, //当前元素的时间
      timeList: [],
    };
  },
  methods: {
    // 用户修改时间确认
    handleChangeDate(val) {
      console.log("修改时间", val);
      this.$nextTick(() => {
        this.initTimeline();
      });
    },
    time() {},
    // 点击播放
    handlePlay() {
      this.isPlay = !this.isPlay;
      if (this.isPlay) {
        this.playImg = require("./images/stop.png");
        this.timer = setInterval(() => {
          this.nextMove();
        }, 800);
      } else {
        clearInterval(this.timer);
        this.playImg = require("./images/play.png");
      }
    },
    nextMove() {
      if (this.index == this.count) this.index = 0;
      this.index++;
      this.getIndexTime();
      this.vernierLeft = this.markerPosition(this.index, this.markWidth);
      this.$emit("handlePlay", this.value);
    },
    //点击mark
    markerClick(val, index) {
      console.log("点击mark");
      this.isPlay = false;
      clearInterval(this.timer);
      this.playImg = require("./images/play.png");
      this.vernierLeft = this.markerPosition(index, this.markWidth);
      this.index = index;
      this.value = val;
      this.$emit("handleMarkerClick", this.value);
    },
    // 设置游标的位置
    markerPosition(index, markWidth) {
      return parseFloat(markWidth) * index - parseFloat(markWidth) / 2 - 8 + "px";
    },
    // 初始化时间
    initTimeline(time = timeFormat(time)) {
      this.markWidth = this.getMarkWidth();
      this.index = this.lineData.indexOf(time) + 1;
      this.value = time;
      this.vernierLeft = this.markerPosition(this.index, this.markWidth);
      this.$emit("handleInit", this.value);
    },
    // 获取分段的宽度
    getMarkWidth() {
      let with2 = document.defaultView.getComputedStyle(document.getElementById("line"), null).width;
      return parseFloat(with2) / this.count;
    },
    // 获取下标对应的时间
    getIndexTime() {
      this.value = this.lineData[this.index - 1];
    },
    // 关闭时间轴
    handleCloseTimeLIne() {
      if (this.isPlay) {
        this.isPlay = false;
        clearInterval(this.timer);
        this.playImg = require("./images/play.png");
      }
      this.$emit("handleCloseTimeLIne", false);
    },
  },
  filters: {
    dateFormat(val) {
      return timeFormat(val, "yyyy-MM-dd HH:mm");
    },
    formatTime(val) {
      return timeFormat(val, "HH:mm");
    },
  },
  computed: {
    markWidthInit() {
      return 100 / this.count + "%";
    },
  },
  mounted() {
    setTimeout(() => {
      let timeData = this.lineData.map((item) => new Date(item).getTime());
      this.initTimeline(timeFormat(findNearByArr(new Date().getTime(), timeData)));
    });
  },
};
</script>
<style scoped lang="less">
.time-line-container {
  position: fixed;
  bottom: 50px;
  left: 17%;
  color: #ddd;
  z-index: 99;
  width: 70%;
  height: 81px;
  background: rgba(7, 13, 21, 0.7);
  border-radius: 10px;
  padding: 0 10px;

  .time-line {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  // 操作按钮
  .handle-con {
    display: felx;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 4em;
    .img-con {
      width: 2em;
      height: 2em;
    }
    .next-img {
      background: url("./images/next.png") no-repeat 0 0;
      background-size: cover;
    }
    .pre-img {
      background: url("./images/pre.png") no-repeat 0 0;
      background-size: cover;
    }
    .btn-title {
      font-size: 12px;
    }
  }
  // 时间轴
  .line-con {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .line {
      width: 100%;
      height: 8px;
      background-color: rgba(248, 245, 245, 0.3);
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      // 刻度
      .mark-con {
        height: 60px;
        display: inline-block;
        position: relative;
        vertical-align: top;
        .mark {
          width: 2px;
          height: 1em;
          background-color: rgba(248, 242, 242, 0.3);
          margin: 0 auto;
          margin-top: 8px;
          border-radius: 5px;
        }
        .label {
          width: 100%;
          text-align: center;
          font-size: 10px;
        }
      }
    }
    // 游标
    .vernier {
      position: absolute;
      left: 0;
      top: -5px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.3s;
      background: rgba(247, 167, 21, 1);
      border: 1px solid rgba(255, 255, 255, 1);
      .tooltip {
        width: 112px;
        height: 24px;
        background: rgba(44, 193, 255, 0.7);
        border-radius: 4px;
        position: absolute;
        top: -34px;
        left: -50px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 1);
        .text {
          // display: flex;
          // align-items: center;
          width: 100%;
          // justify-content: space-around;
          color: #fff;
          font-size: 12px;
        }
        .trangle {
          position: absolute;
          top: 24px;
          left: 50px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 5px 5px 0 5px;
          border-color: rgba(44, 193, 255, 0.7) transparent transparent transparent;
        }
      }
    }
  }
  // 关闭时间轴按钮
  .time-line-close {
    position: absolute;
    right: 0.5%;
    top: 1%;
    font-size: 22px;
    color: #fff;
    text-decoration: none;
  }
}
</style>
