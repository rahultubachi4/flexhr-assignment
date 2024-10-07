<template>
   <JobHeaderData></JobHeaderData>
    <div class="job-aside-page">
      <div class="right-section">

        <div class="first-section">
          <h2>Posted Jobs</h2>
  
          <button class="post-job-button" @click="toggleForm">Post a Job</button>
        </div>
        <hr class="hr-line">
  
   <RouterLink to="/newjob"> <button class="post-job-card">
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
        </button></RouterLink>

 <div class="dynamically-postedjobs">
        <div v-for="(newjob, index) in postedJobs" :key="index" class="job-card">
          <h1>{{ newjob.jobtitle }}</h1>
          <hr class="hr-line">
          <div class="details-span">
            <span>Description: {{ newjob.description }}</span>
            <span>Duration: {{ newjob.duration }}</span>
            <span>Requirements: {{ newjob.requirements }}</span>
            <span>Salary: {{ newjob.salary }}</span>
          </div>
          <div class="tags">
            <span v-for="(skill, i) in newjob.jobSkills.split(',')" :key="i">{{ skill.trim().toUpperCase() }}</span>
          </div>
        </div>
  </div>
        <!-- <div class="job-card">
          <h3>Central Creative Specialist</h3>
          <hr class="hr-line">
          <div class="details">
            <span>Posted on: 2024-06-29</span>
            <span>Deadline: 2024-12-12</span>
          </div>
          <div class="tags">
            <span>BITBUCKET</span>
            <span>PINTEREST</span>
            <span>SLACK</span>
            <span>MICROSOFT TEAMS</span>
            <span>TUMBLR</span>
          </div>
        </div> -->
  
      </div>
  
      <div class="left-section">
        <div class="newjob" v-if="showForm">
          <h1>Post New Job</h1>
  
          <form @submit.prevent="validateAndSubmit">
  
            <div class="input-field">
              <fieldset :class="{ 'has-error': errors.jobtitle }">
                <legend class="job-title">Job Title *</legend>
                <input type="text" id="job-title" placeholder=" Enter job title " v-model="newjob.jobtitle" />
              </fieldset>
              <span v-if="errors.jobtitle" class="error">{{ errors.jobtitle }}</span>
            </div>
  
            <div class="input-field">
              <fieldset :class="{ 'has-error': errors.description }">
                <legend class="description">Description *</legend>
                <textarea id="jobDescription" placeholder="Enter job description" v-model="newjob.description"></textarea>
              </fieldset>
              <span v-if="errors.description" class="error">{{ errors.description }}</span>
            </div>
  
            <div class="input-field">
              <fieldset :class="{ 'has-error': errors.jobSkills }">
                <legend class="job-skills">Skills *</legend>
                <input type="text" id="job-skills" placeholder="Enter comma separated skills (e.g. JAVA, Python)" v-model="newjob.jobSkills" />
              </fieldset>
              <span v-if="errors.jobSkills" class="error">{{ errors.jobSkills }}</span>
            </div>
  
            <div class="input-field">
              <fieldset :class="{ 'has-error': errors.duration }">
                <legend class="job-duration">Duration *</legend>
                <input type="text" id="job-duration" placeholder="Enter duration" v-model="newjob.duration" />
              </fieldset>
              <span v-if="errors.duration" class="error">{{ errors.duration }}</span>
            </div>
  
            <div class="input-field">
              <fieldset :class="{ 'has-error': errors.requirements }">
                <legend class="requirements">Requirements *</legend>
                <textarea id="requirements" placeholder="Enter requirements" v-model="newjob.requirements"></textarea>
              </fieldset>
              <span v-if="errors.requirements" class="error">{{ errors.requirements }}</span>
            </div>
  
            <div class="input-field">
              <fieldset :class="{ 'has-error':errors.salary }">
                <legend class="salary">Salary (in LPA) *</legend>
                <input type="text" id="salary" placeholder=" Enter salary" v-model="newjob.salary" />
              </fieldset>
              <span v-if="errors.salary" class="error">{{ errors.salary }}</span>
            </div>
  
            <div class="postjob">
              <button type="submit" class="post-job" @click="PostJobForm">Post Job</button>
            </div>
  
            <p v-if="successMessage" class="success-msg">{{ successMessage }}</p>
  
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import JobHeaderData from '../components/JobHeaderData.vue'
  export default {
    name: 'JobAsideData',
    components: {
    JobHeaderData
  },

    data () {
      return {
        showForm: false,

        newjob: {
          jobtitle: '',
          description: '',
          jobSkills: '',
          duration: '',
          requirements: '',
          salary: ''
        },
        postedJobs: [],

        errors: {
          jobtitle: '',
          description: '',
          jobSkills: '',
          duration: '',
          requirements: '',
          salary: '',
          successMessage: ''
        }
      }
    },
  //   mounted() {
  //   const savedJobs = localStorage.getItem('postedJobs');
  //   if (savedJobs) {
  //     this.postedJobs = JSON.parse(savedJobs);
  //   }
  // },
    methods: {

      toggleForm () {
        this.showForm = !this.showForm
      },
  
      validateAndSubmit () {
        this.errors = {}
        if (!this.newjob.jobtitle) {
          this.errors.jobtitle = 'Title is required'
        } else if (!this.newjob.description) {
          this.errors.description = 'Description is required'
        } else if (!this.newjob.jobSkills) {
          this.errors.jobSkills = 'Skills are required'
        } else if (!this.newjob.duration) {
          this.errors.duration = 'Duration is required'
        } else if (!this.newjob.requirements) {
          this.errors.requirements = 'Requirements are required'
        } else if (!this.newjob.salary) {
          this.errors.salary = 'Salary is required'
        }
        return Object.keys(this.errors).length === 0
      },
  
      PostJobForm () {
        if (!this.validateAndSubmit()) { return }
        axios.post('http://localhost:5020/jobs', this.newjob)
          .then(response => {
            console.log('Create newjob data saved:', response.data)
            localStorage.setItem('showModal', 'true')
            // localStorage.setItem('postedJobs', JSON.stringify(this.postedJobs));
            alert('successfull post job !!')
            this.postedJobs.push({...this.newjob})  
            this.newjob = {
              jobtitle: '',
              description: '',
              jobSkills: '',
              duration: '',
              requirements: '',
              salary: ''
            }
          })
          .catch(error => {
            console.error('Create newjob:', error)
          })
      },
      closeModal() {
        this.showModal = false;
        localStorage.setItem('showModal', 'true')

      }
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
     height: 95vh;
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
     padding: 50px;
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
     height: 45px;
   }
  .post-job-card {
  background-color: #696d73;  
  width: 750px;               
  border-radius: 15px;         
  margin-top: 13px;            
  padding: 20px;               
  display: inline-block;       
}
.job-card {
  background-color: #696d73;   
  padding: 20px;               
  border-radius: 8px;       
  margin-bottom: 30px;    

}

.job-card h3 {
  margin: 0;                   
  font-size: 25px;            
  color: white; 
  margin-right: 290px; 
  margin-bottom: 20px;            
}
.details {
  display: flex;               
  justify-content: space-between; 
  margin: 10px 0;              
  color: white;                
  font-size: 17px;             
}

.tags {
  display: flex;               
  gap: 10px;                  
  color: white;               
  font-size: 14px;                
}
.tags span {
  background-color: #4a4d52;   
  padding: 5px 10px;           
  border-radius: 5px;          
  text-transform: uppercase;  
  font-size: 16px; 
  margin-top: 15px;            
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
  
   .job-title,
   .description,
   .job-skills,
   .job-duration,
   .requirements,
   .salary {
     font-size: 20px;
     font-weight: bold;
     color: #c9c6c6;
   }
  
   .input-field input
    {
     width: 100%;
     height: 18px;
     border: none;
     outline: none;
     background-color: #474849;
     font-size: 20px;
     font-weight: bold;
     color: #c9c6c6;
   }
  
   .input-field textarea {
     width: 100%;
     height: 24px;
     border: none;
     outline: none;
     background-color: #474849;
     font-size: 20px;
     font-weight: bold;
     color: #c9c6c6;
     resize: none;
   }
  
   .input-field input::placeholder {
     color: #c9c6c6;
     background-color: #474849;
   }
  
   .input-field textarea::placeholder {
     color: #c9c6c6;
     background-color: #474849;
  
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
   margin-top: 15px;
  }
  .error {
   color: red;
   font-size: 14px;
   margin-left: 17px;
  }
  
  fieldset.has-error {
   border-color: red;
  }
  
  fieldset.has-error legend {
   color: red;
  }
  
  .post-job-card{
   background-color:#696d73;
   width: 750px;
   border-radius: 15px;
  }




  .dynamically-postedjobs {
    max-height: 380px; 
    overflow-y: auto; 
    scrollbar-width: none; 
    -ms-overflow-style: none; 
    width: 750px;
    margin-top:10px;
}

.dynamically-postedjobs::-webkit-scrollbar {
    display: none; 
}

.job-card {
    padding: 15px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
}

.hr-line {
    margin: 10px 0;
}

.details-span span {
    display: block;
    margin-bottom: 8px;
}
.tags span {
  background-color: #474849;
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 5px;
    font-weight: bold;
}

  .dynamic-button{
   background-color:#696d73;
   width: 700px;
   border-radius: 15px;
  }
  .job-card h1{
    display:flex;
    color:white;
    align-item:left;
    font-size:25px;
  }
  .details-span{
    display: flex;               
  justify-content: space-between; 
  margin: 10px 0;              
  color: white;                
  font-size: 18px;   
  }

 
  </style>