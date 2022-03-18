<template>
  <div id="nav">
    <el-container>
      <!--顶部-->
      <el-header>
        <!--logo-->
        <!-- <img src="../static/favicon.ico" width="180" height="60" /> -->
        <div>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item, index, key) in menuList"
                :key="key"
                icon="el-icon-circle-plus-outline"
                >{{ item.title }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!--左侧导航栏-->
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :unique-opened="true"
            ><!--是否在点击菜单项后隐藏菜单 默认值为true-->
            <el-submenu
              v-for="(item, index, key) in asideList"
              :key="key"
              :index="index"
            >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="(item1, index1, key1) in item.kid"
                  :key="key1"
                  :index="index - index1"
                  @click="jump(item1)"
                  >{{ item1 }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!--主提-->
        <el-main>{{ showtext }}</el-main>
      </el-container>
      <!--脚部-->
      <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  props :{
    testcontent 
  },
  data() {
    return {
      disabled: false,
      menuList: [{ title: '个人中心' }, { title: '帮助' }],
      asideList: [
        { title: '考勤管理', kid: ['考勤详情', '考勤汇总'] },
        { title: '合同管理', kid: ['合同详情', '合同汇总'] },
      ],
      showtext: 'main',
    }
  },
  methods: {
    jump(item1) {
      this.showtext = item1
    },
  },
}
</script>
<style lang="less" scoped>
/*下拉框样式*/
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
/*后期header样式*/
.el-header {
  /*流式布局*/
  display: flex;
  justify-content: right;
}
.el-avatar {
  margin-top: 10px;
  padding-right: 30px;
}
/*整体框架样式*/
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
html,
#max,
#max > section {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
