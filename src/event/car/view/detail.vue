<template>
  <div>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link tag="a" to="/">
        <mt-button icon="back" type="danger">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-header title="多个按钮">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <img src="../../../assets/logo.png" alt="">
  </div>
</template>
<script>
import Backend from '../../../backend/Backend';

export default {
  data() {
    return {
      item: {},
    };
  },
  created() {
    Backend.getInstance('321321dasdsadas').getMsgList();
  },
};
</script>
