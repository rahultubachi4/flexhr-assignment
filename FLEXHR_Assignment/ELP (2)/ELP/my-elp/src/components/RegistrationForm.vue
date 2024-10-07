<template>
    <div class="RegistrationForm">
   <component :is="currentComponent2" @changePage="changeComponent2"></component>
   <component :is="currentComponent3" @changePage="changeComponent3"></component>

    </div>
</template>
<script>
import EmployerPageData from '../components/EmployerPageData.vue'
import FreelancerPageData from '../components/FreelancerPageData.vue'

export default {
  components: {
    EmployerPageData,
    FreelancerPageData,
  },

  // Employeer page Data
  data () {
    return {
      currentComponent2: 'EmployerPageData'
    }
  },

  // Freelancer page Data
  data2 () {
    return {
      currentComponent3: 'FreelancerPageData'
    }
  },

  methods: {
    changeComponent2 (componentName) {
      this.currentComponent2 = componentName
    },

    changeComponent3 (componentName) {
      this.currentComponent3 = componentName
    }
  }
}

</script>
