<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    //基于 token 的方式实现退出:销毁本地的 token
    logout() {
      //清空token
      window.sessionStorage.clear();
      // 跳转到登录页
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
</style>