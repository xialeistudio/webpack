<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      :to="item.path"
      v-if="item.name"
      v-for="(item,index) in $route.matched"
      :key="index">
      {{item.name}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {}
  },
  created () {
    console.log(this.$router, this.$route)
  }
}
</script>
