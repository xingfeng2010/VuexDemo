<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div>
      <router-link to="/">首页</router-link>|
      <router-link to="/MyVue">MyVue</router-link>|
      <router-link to="/params/198/jspang website is very good">params</router-link>|
      <router-link to="/jspang">jspang</router-link>|
      <router-link to="/Count">Count</router-link>
      <!--<router-link to="/Error"></router-link>-->
      <!--<router-link :to="{name: 'MyVue1', params: {username: 'JSPARAME'}}">MyVue1</router-link>|-->
      <!--<router-link to="/MyVue/MyVue2">MyVue2</router-link>-->
    </div>

    <div id="clickButton" style="text-align:center">
      <el-button type="text" icon="el-icon-plus" @click="buttonClick">点击跳转</el-button>
    </div>

    <p> {{ $route.name }}</p>

    <transition name="fade">
      <router-view ></router-view>
    </transition>

    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
    <!--<button @click="goback">后退</button>-->
    <!--<button @click="goHome">回到首页</button>-->
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
      goback() {
          this.$router.go(-1);
      },

      goHome() {
          this.$router.push('/');
      },

    buttonClick() {
          this.$router.push('/button-push');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
#clickButton {
  position: fixed;
  width: 100px;
  height: 100px;
  text-align:center;
  background: url("./assets/music_play.png")  no-repeat;
}
</style>
