<template>
 <div class="job">
<JobHeaderData></JobHeaderData>
<JobAsideData></JobAsideData>

</div>
</template>

<script>
import JobHeaderData from '../components/JobHeaderData.vue'
import JobAsideData from '../components/JobAsideData.vue'

export default {
  components: {
    JobHeaderData,
    JobAsideData,
  }
}
</script>

<style>
body{
    height:100vh;
}
</style>

