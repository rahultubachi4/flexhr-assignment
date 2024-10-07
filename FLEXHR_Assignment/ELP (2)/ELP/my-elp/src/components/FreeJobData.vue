<template>
  <JobHeaderData></JobHeaderData>
  <div class="job-aside-page">
    <div class="right-section">
      <div class="filter-container">
        <h3>Filter</h3>

        <div class="input-field">
          <fieldset class="fieldset">
            <legend class="search">Search</legend>
            <input type="text" id="search" placeholder="Search" v-model="search" required />
          </fieldset>
        </div>

        <div class="input-field">
          <fieldset class="fieldset1">
            <legend class="salary">Salary per annum</legend>
            <select v-model="selectedSalary" id="salary">
              <option value="" class="salaryrange">Select a range</option>
              <option value="0-6">0-6</option>
              <option value="6-12">6-12</option>
              <option value="12-18">12-18</option>
              <option value="18-24">18-24</option>
              <option value="24-28">24-28</option>
              <option value="28-32">28-32</option>
              <option value="32-38">32-38</option>
              <option value="38-42">38-42</option>
              <option value="42-48">42-48</option>
              <option value="48-54">48-54</option>
              <option value="54-90">54-90</option>
            </select>
          </fieldset>
        </div>


        <div class="tags-check">
          <h4>Tags:</h4>
          <div class="check-box scrollable">
            <label v-for="tag in tags" :key="tag">
              <input type="checkbox" v-model="selectedTags" :value="tag" /> {{ tag }}
            </label>
          </div>
        </div>

        <div class="tags-check-company">
          <h4>Company:</h4>
          <div class="check-box scrollable">
            <label v-for="company in companies" :key="company">
              <input type="checkbox" v-model="selectedCompanies" :value="company" /> {{ company }}
            </label>
          </div>
        </div>
      </div>
    </div>


    <div class="left-section">
    <div class="scrollable-left">
      <div class="m-l">

        <div v-if="filteredJobs.length">

       <div class="job-listing-left" v-for="job in filteredJobs" :key="job.title">

       <div @click="showJobDetails(job)" class="job-listing-link">

      <div class="title-date">
        <h3>{{ job.title }}</h3>
        <p><strong>Posted On:</strong> {{ job.postedOn }}</p>
      </div>

      <p>{{ job.description }}</p>
      <p><strong>Salary:</strong> {{ job.salary }}</p>

      <div class="company-tags">
        <p><strong>Company:</strong> {{ job.company }}</p>
        <p><strong>Tags:</strong>
          <span class="tag" v-for="tag in job.tags" :key="tag">{{ tag }}</span>
        </p>
      </div>

    </div>
  </div>
</div>

<div class="not-found" v-else>
  <p>Data Not Found</p>
</div>
  
      </div>
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
   
    
     methods: {
      showJobDetails(job) {
  
      this.$router.push({ name: 'DataDetails', params: { jobTitle: job.title, job } });
  }

  },

   data() {
    return {
      search: '',
      selectedSalary: '',
      selectedTags: [],
      selectedCompanies: [],
      selectedJob: null,

      tags: [
        'SNAPCHAT', 'TWITTER', 'LINKEDIN', 'ZOOM', 'TRELLO',
        'C++', 'HTML', 'GITLAB', 'JAVA', 'PYTHON', 'JAVASCRIPT',
        'CSS', 'ANGULAR', 'VUE', 'REACT', 'NODE.JS', 'EXPRESS',
        'MYSQL', 'MONGODB', 'GOLANG', 'RUBY', 'SWIFT', 'KOTLIN',
        'PERL', 'RUST', 'SCALA', 'DART', 'PHP', 'ASP.NET', 'FLASK',
        'DJANGO', 'LARAVEL', 'SQL SERVER', 'ORACLE DB', 'POSTGRESQL',
        'ELASTICSEARCH', 'DOCKER', 'KUBERNETES', 'AWS', 'AZURE',
        'GOOGLE CLOUD',
      ],

      companies: [
        'Predovic LLC', 'Klocko, Tremblay and Flatley', 'Lesch, Smith and Farrell',
        'Kessel, Feil and Klein', 'Medhurst and Sons', 'Hickle, McKenzie and Gleichner',
        'Microsoft', 'Amazon', 'Apple', 'Facebook', 'Spotify', 'Tesla', 'Uber', 'Oracle',
        'Predovic LLc', 'Lesch,smith and Farrell', 'Hickle,mckenzie and Gleichner', 'Microsoft', 
        'Intel', 'Gitlab', 'Adobe', 'ZOOM', 'Cisco', 'Netflix', 'OpenAI','Flexehr','jp-morgan',
        'Google',
      ],

      
      jobs: [
        {
          title: 'Internal Brand Engineer',
          postedOn: '2024-06-03',
          description: 'Triduana vestrum communis adipisci expedita cursim causa...',
          salary: '4LPA',
          company: 'Oracle',
          tags: ['SNAPCHAT', 'TWITTER', 'ZOOM','LINKEDIN'],
        },
        {
          title: 'Data Analyst',
          postedOn: '2024-09-31',
          description: 'Laborum suscipit reprehenderit distinctio.',
          salary: '6LPA',
          company: 'Spotify',
          tags: ['AZURE', 'AWS','LINKEDIN'],
        },
        {
          title: 'Product Manager',
          postedOn: '2024-07-11',
          description: 'Voluptatem amet error corporis facilis.',
          salary: '8LPA',
          company: 'Predovic LLc',
          tags: ['SQL', 'JAVA', 'FLASK'],
        },
        {
          title: 'UI/UX Designer',
          postedOn: '2024-09-29',
          description: 'Expedita consequatur aut maiores.',
          salary: '7LPA',
          company: 'Lesch,smith and Farrell',
          tags: ['HTML', 'C++', 'LINKEDIN'],
        },
        {
          title: 'Web Developer',
          postedOn: '2024-09-05',
          description: 'Similique placeat est doloremque.',
          salary: '5.5LPA',
          company: 'Hickle,mckenzie and Gleichner',
          tags: ['HTML', 'CSS', 'PHP'],
        },
        {
          title: 'Java Specialist',
          postedOn: '2024-05-18',
          description: 'Commodi perspiciatis quae maiores tempore illum.',
          salary: '5LPA',
          company: 'Amazon',
          tags: ['FLASK', 'HTML'],
        },
        {
        title: 'SQL Developer',
          postedOn: ' 2024-06-09',
          description: 'SQL Developer with expertise in database design and optimization..',
          salary: '5LPA',
          company: 'Tesla',
          tags: ['FLASK', 'HTML', 'AZURE'],
        },
        {
        title: 'Team Leader',
          postedOn: ' 2024-08-01',
          description: 'Team Leader skilled in guiding teams to achieve project goals.',
          salary: '9LPA',
          company: 'Microsoft',
          tags: ['ASP.NET', 'PHP'],
        },
        {
        title: 'Front End Developer',
          postedOn: '2024-09-22',
          description: 'Crafts responsive, user-friendly web interfaces',
          salary: '3LPA',
          company: 'Intel',
          tags: ['GOOGLE CLOUD', 'ELASTICSEARCH'],
        },
        {
        title: 'React Developer',
          postedOn: '2024-07-11',
          description: 'Builds dynamic applications with React.',
          salary: '12LPA',
          company: 'Gitlab',
          tags: ['KUBERNETES', 'SQL SERVER'],
        },
        {
        title: 'AWS Developer',
          postedOn: '2024-10-30',
          description: 'Specializes in cloud solutions using AWS.',
          salary: '14LPA',
          company: 'Adobe',
          tags: ['SCALA', 'RUST'],
        },
        {
        title: 'Business Analyst',
          postedOn: ' 2024-08-02',
          description: 'Analyzes data to drive business decisions.',
          salary: '9LPA',
          company: 'Trello',
          tags: ['VUE', 'SQL SERVER'],
        },
        {
        title: 'Manager',
          postedOn: ' 2024-09-04',
          description: 'Leads teams to meet business objectives',
          salary: '4.5LPA',
          company: 'ZOOM',
          tags: ['SWIFT', 'EXPRESS', 'DART'],
        },
        {
        title: 'Junior Developer',
          postedOn: '2024-09-23',
          description: 'Assists in coding and debugging projects',
          salary: '6LPA',
          company: 'Flexehr',
          tags: ['VUE', 'HTML', 'CSS'],
        },
        {
        title: 'Senior Developer',
          postedOn: '2024-09-17',
          description: 'Oversees development with expertise and leadership.',
          salary: '24.5LPA',
          company: 'Netflix',
          tags: ['CSS', 'HTML'],
        },
        {
        title: 'DevOps Engineer',
          postedOn: '2024-08-05',
          description: 'Develops native and hybrid mobile apps.',
          salary: '20LPA',
          company: 'jp-morgan',
          tags: ['CSS', 'HTML'],
        },
        {
        title: 'Mobile App Developer',
          postedOn: '2024-07-15',
          description: 'Develops native and hybrid mobile apps.',
          salary: '17LPA',
          company: 'Uber',
          tags: ['FLUTTER', 'REACT NATIVE'],
        },
        {
        title: 'Cybersecurity Specialist',
          postedOn: '2024-08-30',
          description: 'Protects systems from cyber threats and attacks.',
          salary: '28LPA',
          company: 'Cisco',
          tags: ['FIREWALL', 'ENCRYPTION'],
        },
        {
        title: 'AI Engineer',
          postedOn: '2024-09-02',
          description: 'Designs and develops artificial intelligence solutions.',
          salary: '35LPA',
          company: 'OpenAI',
          tags: ['PYTHON', 'TENSORFLOW'],
        },
        {
        title: 'Cloud Architect',
          postedOn: '2024-06-25',
          description: 'Designs scalable and secure cloud infrastructure.',
          salary: '8LPA',
          company: 'Google',
          tags: ['AWS', 'AZURE'],
        },
        {
        title: 'CEO',
          postedOn: '2024-06-26',
          description: 'Handle every thing.',
          salary: '90LPA',
          company: 'Google',
          tags: ['AWS', 'AZURE', 'Java'],
        },
      ],
    };  
  },
  
  computed: {
    filteredJobs() {
      const searchTerm = this.search.toLowerCase();
      return this.jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm) ||
                            job.company.toLowerCase().includes(searchTerm) ||
                            job.salary.toString().toLowerCase().includes(searchTerm) ||
                            job.tags.some(tag => tag.toLowerCase().includes(searchTerm))||
                            job.postedOn.toLowerCase().includes(this.search.toLowerCase());

        const salaryRange = this.selectedSalary.split('-');
        const salaryValue = parseFloat(job.salary) || 0; 

        const matchesSalary = this.selectedSalary
          ? salaryValue >= parseFloat(salaryRange[0]) && salaryValue < parseFloat(salaryRange[1])
          : true;

        const matchesTags = this.selectedTags.length ? this.selectedTags.some(tag => job.tags.includes(tag)) : true;
        const matchesCompanies = this.selectedCompanies.length ? this.selectedCompanies.includes(job.company) : true;

        return matchesSearch && matchesSalary && matchesTags && matchesCompanies;
      });
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
    height: 90vh;
     width: 100vw;
     }


.right-section {
  /* border:1px solid red; */
  background-color: #1f1f1f;
  color: white;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
}
.filter-container{
    /* border:1px solid red; */
    height:750px;
    width:500px;
    background-color: #606060;
    margin-left:250px;
    border-radius: 10px;;
}
.tags-check h4{
  font-size:20px;
}

.filter-container h3{
    font-size:20px;
    text-align: left;
    font-weight: bold;
    /* padding-left: 10px; */
    margin-bottom: 20px;
    margin-left: 22px;
}
fieldset{
    border-radius:5px;
    width:350px;
    margin-bottom: 20px;
    margin-left: 15px;
}

.input-field input {
  width: 100%;
  height: 15px;
  border: none;
  outline: none;
  background-color: #606060;
  font-size: 17px;
  font-weight: bold;
  color: #c9c6c6;
}
.input-field input::placeholder {
    background-color: #606060;
  color: #c9c6c6;
}
.search,.salary{
    font-size: 18px;
    font-weight: bold;
}
 .salary{
    font-size: 18px;
    font-weight: bold;
    margin-bottom:-4px;
}

#salary {
  width: 100%;
  padding: 10px;
  box-sizing: border-box; 
  background-color: #606060;
  color:white;
  border:none;
  outline: none;
  font-size: 18px;
  margin-top:5px;
}  

.fieldset1{
    height:60px;
}
.tags-check{
    font-size:16px;
    padding-left: 15px;
    margin-top:-8px;
}

.tags-check-company{
    font-size:16px;
    padding-left: 15px;
    margin-top:-15px;
    margin-top: 40px;
}

#box{
    font-size:16px;
    margin-top:-20px;
}
.check-box{
    margin-top:-20px;
}

.scrollable {
  max-height: 150px; 
  overflow-y: auto; 
  padding: 10px;
  width: 100%;
  scrollbar-width: none;  
}
.scrollable::-webkit-scrollbar {
  display: none; 
}

.check-box label {
  display: block;
  margin: 5px 0;
}



.left-section {
  /* border:1px solid red; */
  background-color: #1f1f1f;
  width: 80vw;
  padding: 20px;
  color: white;
}

.job-listing-left {
  /* border:1px solid red; */
  background-color: #3c3c3c;
  padding: 20px;
  border-radius: 10px;
  margin:10px 10px 10px 10px;
  margin-top:-4px;
  margin-bottom:50px;
  margin-right:20px;
} 

.title-date{
    display:flex;
    justify-content: space-between;
   
}
.tags-check-company h4{
font-size:18px;
}

.company-tags{
    display:flex;
    justify-content: space-between;
}

.job-listing-left h3 {
  margin-bottom: 10px;
  font-weight: 700;
}

.job-listing p {
  margin: 5px 0;
}

.tag {
  background-color: #565656;
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
}

.scrollable-left {
    max-height: 710px;
    overflow-y: auto; 
    padding: 10px;
}

.scrollable-left::-webkit-scrollbar {
  display: none; 
}


.job-listing-left {
    border-bottom: 1px solid #e0e0e0;
    padding: 10px 0;
    cursor: pointer;
}

.title-date h3,p {
    margin-left: 10px; 
    margin-right: 10px; 
}

.tag {
    background-color: #212020;
    border-radius: 3px; 
    padding: 2px 5px; 
    margin-right: 5px; 
}
.m-l{
    /* border:1px solid red; */
    margin-right:110px;
}

.job-listing-link {
  text-decoration: none;
  display: block;
  padding: 10px; 
  border: 1px solid #ddd; 
  margin-bottom: 10px; 
  border:none;
  outline:none;
  color:white;

}

.not-found{
  font-size:24px;
  color:red;
  font-weight:bold;
  margin-left:130px;
}

   </style>