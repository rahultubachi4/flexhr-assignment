<template>
    <div class="Registration">
   <component :is="currentComponent2" @changePage="changeComponent2"></component>
   <component :is="currentComponent3" @changePage="changeComponent3"></component>
   <component :is="currentComponent" @changePage="changeComponent"></component>

    </div>
</template>
<script>
import EmployerPage from '../components/EmployerPage.vue'
import FreelancerPage from '../components/FreelancerPage.vue'
import LoginPage from '../components/LoginPage.vue'

export default {
  components: {
    EmployerPage,
    FreelancerPage,
    LoginPage
  },
  data () {
    return {
      currentComponent2: 'EmployerPage'
    }
  },
  data2 () {
    return {
      currentComponent3: 'FreelancerPage'
    }
  },
  //   data3 () {
  //     return {
  //       currentComponent: 'EmployerPage'
  //     }
  //   },
  methods: {
    changeComponent2 (componentName) {
      this.currentComponent2 = componentName
    },

    changeComponent3 (componentName) {
      this.currentComponent3 = componentName
    },
    // Router link with loginPage
    changeComponent (componentName) {
      this.currentComponent = componentName
    }
  }
}

</script>
