<template>
  <div class="login">
    <el-form :model="account" :rules="accountRule" ref="login" class="form">
      <h2>用户登录</h2>
      <el-form-item prop="username">
        <el-input placeholder="账号" v-model="account.username"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="密码" v-model="account.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin" :loading="loading" class="btn-block">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      account: {
        username: null,
        password: null
      },
      accountRule: {
        username: [{required: true, message: '请输入账号'}],
        password: [{required: true, message: '请输入账号'}]
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs.login.validate((isValid) => {
        if (!isValid) {
          return
        }
        this.loading = true
        this.$router.replace('/')
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background: #414b74;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    margin: 80px 140px 0;
  }
  .form {
    width: 330px;
    background: white;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .3);
    padding: 0 30px;
    h2 {
      font-size: 28px;
      font-weight: normal;
      text-align: center;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, .1);
    }
  }
}
</style>
