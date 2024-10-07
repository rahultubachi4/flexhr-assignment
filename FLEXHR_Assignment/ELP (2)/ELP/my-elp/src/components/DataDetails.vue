<template>
    <JobHeaderData></JobHeaderData>
    <div class="job-aside-page">
      <div class="right-section">

      <div v-if="job" class="job-detail">
      <h2>{{ job.title }}</h2>
      <hr>

      <div class="dates">
      <p><strong>Posted On:</strong>&nbsp;&nbsp;{{ job.postedOn }}</p>
      <p><strong>Deadline On: </strong>&nbsp;&nbsp; {{ job.deadlineOn }}</p>
    </div>
    <div class="info-cst">
    <p><strong>Company:</strong>&nbsp;&nbsp; {{ job.company }}</p>
    <p><strong>Salary:</strong> &nbsp;&nbsp;{{ job.salary }}</p>
    <p><strong>Tags:</strong> &nbsp;&nbsp;{{ job.tags }}</p>
  </div>

    <div class="req-des">
      <p><strong>Requirements:</strong> &nbsp;&nbsp;{{ job.reuirements }}</p>
      <p><strong>Description:</strong> &nbsp;&nbsp;{{ job.description }}</p>
    </div>
    <hr>

    <div class="btn">
     <RouterLink to="/FreeJobData"> <button class="close-btn">Close</button>
      <button class="apply-btn">Apply</button></RouterLink> 
    </div>

    </div>
    <div v-else>
      <p>Loading job details...</p>
    </div>
       
  </div>
  </div>
  </template>
     
     <script>
     import JobHeaderData from '../components/JobHeaderData.vue'
   export default {
    name: 'FreeJobData',

     components: {
     JobHeaderData
     },

     data() {
      return {
        job: null 
      };
    },
    mounted() {
      this.fetchJobDetails(); 
    },
    methods: {
      fetchJobDetails() {
        const jobTitle = this.$route.params.jobTitle; 
  
       
        const jobs = this.fetchJobs(); 
  
       
        this.job = jobs.find(job => job.title === jobTitle) || null;
  
  
        if (!this.job) {
          console.error(`Job with title "${jobTitle}" not found.`);
        }
      },
      fetchJobs() {
       
        return [

        {
          title: 'Internal Brand Engineer',
          postedOn: '2024-06-03',
          deadlineOn: '2024-07-03',
          reuirements: 'Triduana vestrum communis adipisci expedita cursim causa...',
          description: 'Triduana vestrum communis adipisci expedita cursim causa...',
          salary: '4LPA',
          company: 'Oracle',
          tags: ['SNAPCHAT', 'TWITTER', 'ZOOM'],
        },
        {
          title: 'Data Analyst',
          postedOn: '2024-09-31',
          deadlineOn: '2024-10-31',
          reuirements: 'Laborum suscipit reprehenderit distinctio...',
          description: 'Laborum suscipit reprehenderit distinctio...',
          salary: '6LPA',
          company: 'Spotify',
          tags: ['AZURE', 'AWS'],
        },
        {
          title: 'Product Manager',
          postedOn: '2024-07-11',
          deadlineOn: '2024-08-11',
          reuirements: 'Voluptatem amet error corporis facilis...',
          description: 'Voluptatem amet error corporis facilis...',
          salary: '8LPA',
          company: 'Predovic LLc',
          tags: ['SQL', 'JAVA', 'FLASK'],
        },
        {
          title: 'UI/UX Designer',
          postedOn: '2024-09-29',
          deadlineOn: '2024-10-29',
          reuirements: 'Expedita consequatur aut maiores...',
          description: 'Expedita consequatur aut maiores...',
          salary: '7LPA',
          company: 'Lesch,smith and Farrell',
          tags: ['HTML', 'C++'],
        },
        {
          title: 'Web Developer',
          postedOn: '2024-09-05',
          deadlineOn: '2024-10-05',
          reuirements: 'Similique placeat est doloremque...',
          description: 'Similique placeat est doloremque...',
          salary: '5.5LPA',
          company: 'Hickle,mckenzie and Gleichner',
          tags: ['HTML', 'CSS', 'PHP'],
        },
        {
          title: 'Java Specialist',
          postedOn: '2024-05-18',
          deadlineOn: '2024-06-18',
          reuirements: 'Commodi perspiciatis quae maiores tempore illum...',
          description: 'Commodi perspiciatis quae maiores tempore illum...',
          salary: '5LPA',
          company: 'Amazon',
          tags: ['FLASK', 'HTML'],
        },
        {
        title: 'SQL Developer',
          postedOn: ' 2024-06-09',
          deadlineOn: '2024-06-23',
          reuirements: 'SQL Developer with expertise in database design and optimization...',
          description: 'SQL Developer with expertise in database design and optimization...',
          salary: '5LPA',
          company: 'Tesla',
          tags: ['FLASK', 'HTML', 'AZURE'],
        },
        {
        title: 'Team Leader',
          postedOn: ' 2024-08-01',
          deadlineOn: '2024-08-31',
          reuirements: 'Team Leader skilled in guiding teams to achieve project goals...',
          description: 'Team Leader skilled in guiding teams to achieve project goals...',
          salary: '9LPA',
          company: 'Microsoft',
          tags: ['ASP.NET', 'PHP'],
        },
        {
        title: 'Front End Developer',
          postedOn: '2024-09-22',
          deadlineOn: '2024-11-03',
          reuirements: 'Crafts responsive, user-friendly web interfaces...',
          description: 'Crafts responsive, user-friendly web interfaces...',
          salary: '3LPA',
          company: 'Intel',
          tags: ['GOOGLE CLOUD', 'ELASTICSEARCH'],
        },
        {
        title: 'React Developer',
          postedOn: '2024-07-11',
          deadlineOn: '2024-09-13',
          reuirements: 'Builds dynamic applications with React...',
          description: 'Builds dynamic applications with React...',
          salary: '12LPA',
          company: 'Gitlab',
          tags: ['KUBERNETES', 'SQL SERVER'],
        },
        {
        title: 'AWS Developer',
          postedOn: '2024-10-30',
          deadlineOn: '2024-12-03',
          reuirements: 'Specializes in cloud solutions using AWS...',
          description: 'Specializes in cloud solutions using AWS...',
          salary: '14LPA',
          company: 'Adobe',
          tags: ['SCALA', 'RUST'],
        },
        {
        title: 'Business Analyst',
          postedOn: ' 2024-08-02',
          deadlineOn: '2024-09-05',
          reuirements: 'Analyzes data to drive business decisions...',
          description: 'Analyzes data to drive business decisions...',
          salary: '9LPA',
          company: 'Trello',
          tags: ['VUE', 'SQL SERVER'],
        },
        {
        title: 'Manager',
          postedOn: ' 2024-09-04',
          deadlineOn: '2024-10-03',
          reuirements: 'Leads teams to meet business objectives...',
          description: 'Leads teams to meet business objectives...',
          salary: '4.5LPA',
          company: 'ZOOM',
          tags: ['SWIFT', 'EXPRESS', 'DART'],
        },
        {
        title: 'Junior Developer',
          postedOn: '2024-09-23',
          deadlineOn: '2024-10-23',
          reuirements: 'Assists in coding and debugging projects...',
          description: 'Assists in coding and debugging projects...',
          salary: '6LPA',
          company: 'Flexehr',
          tags: ['VUE', 'HTML', 'CSS'],
        },
        {
        title: 'Senior Developer',
          postedOn: '2024-09-17',
          deadlineOn: '2024-11-08',
          reuirements: 'Oversees development with expertise and leadership...',
          description: 'Oversees development with expertise and leadership...',
          salary: '24.5LPA',
          company: 'Netflix',
          tags: ['CSS', 'HTML'],
        },
        {
        title: 'DevOps Engineer',
          postedOn: '2024-08-05',
          deadlineOn: '2024-09-20',
          reuirements: 'Develops native and hybrid mobile apps...',
          description: 'Develops native and hybrid mobile apps...',
          salary: '20LPA',
          company: 'jp-morgan',
          tags: ['CSS', 'HTML'],
        },
        {
        title: 'Mobile App Developer',
          postedOn: '2024-07-15',
          deadlineOn: '2024-07-31',
          reuirements: 'Develops native and hybrid mobile apps...',
          description: 'Develops native and hybrid mobile apps...',
          salary: '17LPA',
          company: 'Uber',
          tags: ['FLUTTER', 'REACT NATIVE'],
        },
        {
        title: 'Cybersecurity Specialist',
          postedOn: '2024-08-30',
          deadlineOn: '2024-11-03',
          reuirements: 'Protects systems from cyber threats and attacks...',
          description: 'Protects systems from cyber threats and attacks...',
          salary: '28LPA',
          company: 'Cisco',
          tags: ['FIREWALL', 'ENCRYPTION'],
        },
        {
        title: 'AI Engineer',
          postedOn: '2024-09-02',
          deadlineOn: '2024-12-01',
          reuirements: 'Designs and develops artificial intelligence solutions...',
          description: 'Designs and develops artificial intelligence solutions...',
          salary: '35LPA',
          company: 'OpenAI',
          tags: ['PYTHON', 'TENSORFLOW'],
        },
        {
        title: 'Cloud Architect',
          postedOn: '2024-06-25',
          deadlineOn: '2024-07-26',
          reuirements: 'Designs scalable and secure cloud infrastructure...',
          description: 'Designs scalable and secure cloud infrastructure...',
          salary: '8LPA',
          company: 'Google',
          tags: ['AWS', 'AZURE'],
        },
        {
        title: 'CEO',
          postedOn: '2024-06-26',
          deadlineOn: '2024-08-08',
          reuirements: 'Handle every thing...',
          description: 'Handle every thing...',
          salary: '90LPA',
          company: 'Google',
          tags: ['AWS', 'AZURE', 'Java'],
        }, 
 
        ];
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
      height: 90vh;
       width: 100vw;
       }
  
  
  .right-section {
    /* border:1px solid red; */
    background-color: #1f1f1f;
    color: white;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
  }
  .job-detail h2{
    font-size:25px;
  }
  .job-detail {
    padding: 20px;
    /* border: 1px solid #ccc; */
    border-radius: 5px;
    margin: 20px 0;
    width:950px;
    height:400px;
    margin-bottom:320px;
  }
  .job-detail p{
    font-size:18px;
  }

.btn {
    display: flex;
    justify-content: flex-end;
    margin:10px;
}
.apply-btn {
  background-color: #00a025;
  margin-left:10px;
  height: 45px;
  width: 95px;
  font-size: 18px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.close-btn {
  background-color: red;
  height: 45px;
  width: 95px;
  font-size: 18px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.dates{
  display: flex;
  justify-content: space-between;
}

.job-detail strong{
  font-size:19px;
}
.info-cst{
  margin-bottom:45px;
}
 </style>