<template>
  <JobHeaderData></JobHeaderData>
  <div class="job-aside-page">
    <div class="right-section">
      <div class="first-section">
        <h2>Posted Jobs</h2>
        <button class="post-job-button" @click="toggleForm">Post a Job</button>
      </div>
      <hr class="hr-line">

      <div class="dynamically-postedjobs">
        <div v-for="(newjob, index) in postedJobs" :key="index" class="job-card" @click="selectJob(newjob)">
          <div class="title-applicant">
            <h1>{{ newjob.jobtitle }}</h1>
            <h2>{{ newjob.applicantsCount }} Applicants<span v-if="newjob.applicantsCount > 1"></span></h2>
          </div>
          <hr class="hr-line">
          <div class="post-dead">
            <span>Posted On: {{ newjob.postedon }}</span>
            <span>DeadLine: {{ newjob.deadline }}</span>
          </div>
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
    </div>

    <div class="left-section">
      <div v-if="selectedJob">
        <div class="job-card1">
          <div class="title-applicant">
            <h1>{{ selectedJob.jobtitle }}</h1>
            <h2>{{ selectedJob.applicantsCount }} Applicants<span v-if="selectedJob.applicantsCount > 1"></span></h2> 
          </div>
          <hr class="hr-line1">
          <div class="post-dead">
            <span>Posted On: {{ selectedJob.postedon }}</span>
            <span>DeadLine: {{ selectedJob.deadline }}</span>
          </div>
          <div class="sal">
            <span>Salary: {{ selectedJob.salary }}</span>
          </div>
          <div class="tag">
            <span>Tags: [{{ selectedJob.jobSkills.split(',').map(skill => skill.trim().toLowerCase()).join(', ') }}]</span>
          </div>
          <div class="des">
            <span>Description: {{ selectedJob.description }}</span>
          </div>
          <div class="req">
            <span>Requirements: {{ selectedJob.requirements }}</span>
          </div>
          <hr class="hr-line2">

          <div>
            <h1 class="applicant">Applicants:</h1>
          </div>

        </div>
      </div>

      <div class="newjob" v-if="showForm">
        <h1>Post New Job</h1>
        <form @submit.prevent="PostJobForm">
    
          <div class="input-field">
            <fieldset :class="{ 'has-error': errors.jobtitle }">
              <legend class="job-title">Job Title *</legend>
              <input type="text" id="job-title" placeholder="Enter job title" v-model="newjob.jobtitle" />
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
            <fieldset :class="{ 'has-error': errors.postedon }">
              <legend class="postedon">Posted On *</legend>
              <input type="date" id="postedon" v-model="newjob.postedon" />
            </fieldset>
            <span v-if="errors.postedon" class="error">{{ errors.postedon }}</span>
          </div>

          <div class="input-field">
            <fieldset :class="{ 'has-error': errors.deadline }">
              <legend class="deadline">Deadline *</legend>
              <input type="date" id="deadline" v-model="newjob.deadline" />
            </fieldset>
            <span v-if="errors.deadline" class="error">{{ errors.deadline }}</span>
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
            <fieldset :class="{ 'has-error': errors.salary }">
              <legend class="salary">Salary (in LPA) *</legend>
              <input type="text" id="salary" placeholder="Enter salary" v-model="newjob.salary" />
            </fieldset>
            <span v-if="errors.salary" class="error">{{ errors.salary }}</span>
          </div>

          <div class="postjob">
            <button type="submit" class="post-job">Post Job</button>
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

  data() {
    return {
      showForm: false,       
      selectedJob: null, 

      newjob: {
        jobtitle: '',
        description: '',
        jobSkills: '',
        postedon: '',
        deadline: '',
        duration: '',
        requirements: '',
        salary: '',
        applicantsCount: 1 
      },
      postedJobs: [],
      errors: {},
      successMessage: ''
    }
  },

  methods: {
    toggleForm() {
      this.showForm = true
      this.selectedJob = null; 
    },

    selectJob(job) {
      this.selectedJob = job;
      this.showForm = false;
    },

    validateAndSubmit() {
      this.errors = {}
      if (!this.newjob.jobtitle) {
        this.errors.jobtitle = 'Title is required'
      } else if (!this.newjob.description) {
        this.errors.description = 'Description is required'
      } else if (!this.newjob.jobSkills) {
        this.errors.jobSkills = 'Skills are required'
      } else if (!this.newjob.postedon) {
        this.errors.postedon = 'Posted on date is required'
      } else if (!this.newjob.deadline) {
        this.errors.deadline = 'Deadline is required'
      } else if (!this.newjob.duration) {
        this.errors.duration = 'Duration is required'
      } else if (!this.newjob.requirements) {
        this.errors.requirements = 'Requirements are required'
      } else if (!this.newjob.salary) {
        this.errors.salary = 'Salary is required'
      }
      return Object.keys(this.errors).length === 0
    },

    
  PostJobForm() {
    if (!this.validateAndSubmit()) {
    return;
   }

  const existingJob = this.postedJobs.find(
    (job) => job.jobtitle.toLowerCase() === this.newjob.jobtitle.toLowerCase()
  );

  if (existingJob) {

    existingJob.applicantsCount += 1;

    axios.put(`http://localhost:5020/jobs/${existingJob.id}`, existingJob)
      .then(response => {
        console.log('Job applicant count updated:', response.data);
      })
      .catch(error => {
        console.error('Error updating job:', error);
        alert(' updating same job applicants count...');
      });
  } else {
    this.newjob.applicantCount = 1;

    axios.post('http://localhost:5020/jobs', this.newjob)
      .then(response => {
        console.log('New job posted:', response.data);

       
        this.postedJobs.push({ ...this.newjob });
        this.newjob = {
          jobtitle: '',
          description: '',
          jobSkills: '',
          postedon: '',
          deadline: '',
          duration: '',
          requirements: '',
          salary: '',
          applicantsCount: 1
        };

        alert('Job posted successfully!');
        this.showForm = false;
      })
      .catch(error => {
        console.error('Error posting job:', error);
    
      });
    }
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
   .postedon,
   .job-duration,
   .requirements,
   .deadline,
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
    max-height: 480px; 
    overflow-y: auto; 
    scrollbar-width: none; 
    -ms-overflow-style: none; 
    width: 750px;
    margin-top:10px;
    cursor:pointer;
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
.post-dead{
  display:flex;
  justify-content: space-between;
  margin-right:20px;
}
.job-card1{
  color:white;
  font-size:20px;
}
.post-dead,
.sal,
.tag,
.des,
.req
{
  color:white;
  font-size: 18px;
  margin-bottom:20px;
  margin-left:20px;
  font-weight:bold ;

}
.job-card1 h1{
  font-size:24px;
  margin-left:20px;

}
.hr-line1{
margin-left:20px;
margin-right:20px;
}
.hr-line2{
margin-left:20px;
margin-right:20px;
}
.title-applicant {
  display:flex;
  justify-content: space-between;
  margin-right:20px;
}
.title-applicant h2{
  font-size:20px;
  color:#00a025;
}
.title-applicant h1{
  font-size:20px;
  color:white;
  font-weight: bold;
}
</style>