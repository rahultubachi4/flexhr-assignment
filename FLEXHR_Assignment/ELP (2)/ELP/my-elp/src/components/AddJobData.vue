<template>
  <JobHeaderData></JobHeaderData>

  <div class="job-aside-page">
    <div class="right-section">
      <div class="first-section">
        <h2>Posted Jobs</h2>

  <RouterLink to="/JobAsideData"><button class="post-job-button" >Post a Job</button></RouterLink> 

      </div>
      <hr class="hr-line">

   <router to="/newjob"><button class="post-job-card" @click="toggleForm">
        <div class="job-card">
          <h3>Internal Solutions Orchestrator</h3>
          <hr class="hr-line">
          <div class="details">
            <span>Posted on: 2024-02-05</span>
            <span>Deadline: 2024-08-31</span>
          </div>
          <div class="tags">
            <span>SNAPCHAT</span>
            <span>TRELLO</span>
            <span>TELEGRAM</span>
          </div>
        </div>
      </button></router>

    </div>

    <div class="left-section">
      <div class="newjob" v-if="showForm">

        <form @submit.prevent="validateAndSubmit">
          
        <div class="job-card-data">
          <div class="head">
          <h1>Internal Solutions Orchestrator</h1>
         <hr class="line">
        </div>
        <div class="details">
            <span class="pasted1">Posted on: 2024-02-05</span>
            <span class="deadline1">Deadline: 2024-08-31</span>
          </div>
          <div class="tags">
            <span class="snap">SNAPCHAT</span>
            <span>TRELLO</span>
            <span>TELEGRAM</span>
          </div>
          <div class="description-data">
          <h1>Description</h1>
          <p>Non adnuo velut creptio bellum conspergo amor,Venustas vociferor pecus cuppediaVirga atatus ducimus asci articulus adflicto tabernus</p>
          </div>
          <div class="Requirement-data">
          <h1>Requirement</h1>
          <p>Non adnuo velut creptio bellum conspergo amor,Venustas vociferor pecus cuppediaVirga atatus ducimus asci articulus adflicto tabernus</p>
          </div>
          <hr class="line">
         
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import JobHeaderData from '../components/JobHeaderData.vue'
export default {
components: {
  JobHeaderData,
},
data () {
  return {
    showForm: false,
  }
},
methods: {
  toggleForm () {
    this.showForm = !this.showForm
  },

}
}

</script>

<style scoped>
#app{ @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

font-family: "Montserrat", sans-serif;
font-optical-sizing: auto;
font-style: normal;}

 .job-aside-page {
   display: flex;
   height: 92vh;
   width: 100vw;
 }

 .left-section {
   background-color: #474849;
   width: 50vw;
 }

 .right-section {
   background-color: #474849;
   color: white;
   width: 50vw;
   padding: 40px;
   border-right: 1px solid white;
   box-sizing: border-box;
 }

 .first-section {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 30px;
 }

 .post-job-button {
   background-color: #007bff;
   color: white;
   padding: 10px 20px;
   border-radius: 5px;
   cursor: pointer;
   font-size: 18px;
 }
 .post-job-card{
 background-color:#696d73;
 width: 750px;
 border-radius: 15px;
 margin-top: 13px;
}

 .job-card {
   height: 110px;
   background-color: #696d73;
   padding: 20px;
   border-radius: 8px;
   margin-bottom: 30px;
   margin-top: 30px;
 }

 .job-card h3 {
   margin: 0;
   font-size: 18px;
 }
 .job-card h3{
 color: white;
 font-size: 25px;
 margin-right: 320px;
}

 .details {
   display: flex;
   justify-content: space-between;
   margin: 10px 0;
   margin-bottom: 20px;
   color: white;
   font-size: 17px;
 }

 .tags {
   display: flex;
   gap: 10px;
   color: white;
 }

 .tags span {
   background-color: #323232;
   padding: 5px 10px;
   border-radius: 5px;
   font-size: 16px;
 }

 .newjob h1 {
   display: flex;
   margin-left: 15px;
   font-size: 20px;
   margin-top: 50px;
   color: white;
 }

 fieldset {
   width: 78 0px;
   margin: 15px;
   border-radius: 5px;
   margin-bottom: 5px;
 }

.post-job {
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #00a025;
 height: 45px;
 width: 110px;
 font-size: 18px;
 border-radius: 5px;
 color: white;
 font-weight: bold;
 cursor: pointer;
 margin-left: 832px;
 margin-top: 5px;
}


.post-job-card{
 background-color:#696d73;
 width: 750px;
 border-radius: 15px;
}

.job-card-data{
  font-size:20px;
  font-weight:bold;
  margin-left:20px;
}
.line{
  margin-right: 20px;
}
.deadline1{
  margin-right: 20px;
}
.head h1{
  margin-right: 60px;
}
.description-data h1{
  font-size:20px;
  margin-left:20px;
}
.description-data p{
  color:white;
  font-weight:bold;
  margin-left:20px;
}
.Requirement-data h1{
  color:white;
  font-weight:bold;
  margin-left:20px;
}
.Requirement-data p{
margin-left:20px;
color:white;
}

.pasted1{
  margin-left:20px;
}
.snap{
  margin-left:20px;
}

</style>