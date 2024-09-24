<template>
  <div id="app">
    <component :is="currentComponent" @changePage="changeComponent"></component>
    <!-- <component :is="currentComponent2" @changePage="changeComponent2"></component>
    <component :is="currentComponent3" @changePage="changeComponent3"></component> -->

  </div>
</template>

<script>
import LoginPage from '../components/LoginPage.vue'
// import EmployerPage from '../components/EmployerPage.vue'
// import FreelancerPage from '../components/FreelancerPage.vue'

export default {
  components: {
    LoginPage
    // EmployerPage,
    // FreelancerPage
  },
  data () {
    return {
      currentComponent: 'LoginPage'
    }
  },
  // data2 () {
  //   return {
  //     currentComponent2: 'FeelancerPage'
  //   }
  // },
  // data3 () {
  //   return {
  //     currentComponent3: 'EmployerPage'
  //   }
  // },

  methods: {
    changeComponent (componentName) {
      this.currentComponent = componentName
    }

    // changeComponent2 (componentName) {
    //   this.currentComponent2 = componentName
    // },

    // changeComponent3 (componentName) {
    //   this.currentComponent3 = componentName
    // }

  }
}
</script>

<style>
#app{ @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

font-family: "Montserrat", sans-serif;
font-optical-sizing: auto;
font-style: normal;}

body {
  display: flex;
  justify-content: right;
  align-items: center;
}
</style>
