<template>
  <div>
    <h1>index</h1>
    <h1 @click="click">{{posts}}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  async asyncData() {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/data.json',
    })
    return res.data
  },
  mounted(){
    
  },
  data() {
    return {}
  },
  methods: {
    click(){
    this.$toast.error('服务器开小差啦~~');
    }
  },
}
</script>
<style lang="less" scoped>
</style>