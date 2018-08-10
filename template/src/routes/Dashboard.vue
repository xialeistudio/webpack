<template>
  <div class="dashboard">
    <!--header-->
    <header>
      <div class="brand">Element-Boilerplate</div>
      <div class="actions">
        <el-button type="text" class="btn-navbar" @click="handleLogout">退出登录</el-button>
      </div>
    </header>
    <el-container>
      <!--菜单-->
      <el-aside class="menu-box">
        <el-menu
          router
          :default-openeds="['/']"
          background-color="#eee">
          <el-menu-item index="/">
            <i class="el-icon-star-on"></i>
            <span>首页</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!--主体内容-->
      <el-container>
        <el-main>
          <breadcrumb/>
          <div class="main-box">
            <router-view/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'Dashboard',
  components: {Breadcrumb},
  data () {
    return {}
  },
  methods: {
    async handleLogout () {
      try {
        await this.$confirm('确定退出登录吗?')
        this.$router.replace('/guest')
      } catch (e) {
        this.$message.error(e.message)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dashboard {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    box-sizing: border-box;
    padding: 0 20px;
    background: #222;
    .brand {
      font-size: 20px;
      color: white;
    }
    .actions {
      .btn-navbar {
        color: white;
      }
    }
  }
  .menu-box {
    height: calc(100vh - 64px);
    width: 200px !important;
    background: #eee;
    .el-menu {
      border-right: 0;
    }
  }
  .main-box {
    height: calc(100vh - 60px - 64px - 14px);
    overflow-y: auto;
  }
}
</style>
