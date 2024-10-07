<template>
  <div class="Freelancer-container">
    <div class="Freelancer-Page ">

      <section class="left">
      <div class="image-section">
        <img :src="logo" alt="Logo" />
      </div>
      </section>

      <section class="right">
      <div class="Freelancer-Pagecard">
        <h2>Signup</h2>

        <div class="toggle-buttons">
          <button class="emp-btn" @click="goToEmployer">Employer</button>
          <button class="free-btn" :class="{ active: activeButton1 === 'Freelancer' }" @click="setActiveButton1('Freelancer')">Freelancer</button>
        </div>

        <form @submit.prevent=" validationForm">

          <div class="input-field">
             <fieldset class="fieldset">
              <legend class="fullname"> Full Name *</legend>
              <input type="text" id="fullname" placeholder="Full Name"  v-model="newFreelancer.fullName" required />
              <p v-if="errors.fullName" class="error-msg">{{ errors.fullName }}</p>
            </fieldset>
          </div>

          <div class="input-field">
            <fieldset class="fieldset">
              <legend class="github"> Github Username *</legend>
              <input type="text" id="github" placeholder=" Github Username "  v-model="newFreelancer.githubUsername" required />
              <p v-if="errors.githubUsername" class="error-msg">{{ errors.githubUsername }}</p>
            </fieldset>
          </div>

          <div class="input-field">
            <fieldset class="fieldset">
              <legend class="email">Email (Username)*</legend>
              <input type="email" id="email" placeholder=" Email "  v-model="newFreelancer.email" required />
              <p v-if="errors.email" class="error-msg">{{ errors.email }}</p>
            </fieldset>
          </div>

          <div class="input-field">
            <fieldset class="fieldset">
              <legend class="Contact">Contact Number *</legend>
              <input type="text" id="Contact" placeholder=" Contact Number "  v-model="newFreelancer.contactNumber"  maxlength="10" required/>
              <p v-if="errors.contactNumber" class="error-msg">{{ errors.contactNumber }}</p>
            </fieldset>
          </div>

          <div class="input-field">
            <fieldset class="fieldset">
              <legend class="password"> Password *</legend>
              <input type="password" id="password" placeholder="Password"  v-model="newFreelancer.password" required/>
              <p v-if="errors.password" class="error-msg">{{ errors.password }}</p>
            </fieldset>
          </div>

          <div class="input-field">
            <fieldset class="fieldset">
              <legend class="Confirm-password"> Confirm Password *</legend>
              <input type="password" id="Confirm-password" placeholder="Confirm-Password"  v-model="newFreelancer.confirmPassword" required/>
              <p class="error-msg" v-if="errors.confirmpassword">{{ errors.confirmpassword }}</p>
            </fieldset>
          </div>

         <div class="sign-btn">
           <RouterLink to="/login"><button  class="Signin-btn">Signin</button></RouterLink>

          <div class="Signup">
           <button  class="Signup-btn" @click="FreelancerForm">Signup</button>
          </div>
        </div>

        <p v-if="successMessage" class="success-msg">{{ successMessage }}</p>

     </form>
      </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FreelancerPageData',

  data () {
    return {
      logo: require('@/assets/logo1.png'),

      newFreelancer: {
        fullName: '',
        githubUsername: '',
        email: '',
        contactNumber: '',
        password: '',
        confirmPassword: ''
      },

      errors: {},
      
      successMessage: '',
      activeButton1: 'Freelancer'
    }
  },
  methods: {
    goToEmployer () {
      this.$emit('changePage', 'EmployerPageData')
    },

    setActiveButton1 (buttonType) {
      this.activeButton1 = buttonType
    },

    
    validationForm () {
      this.errors = {}

      if (!this.newFreelancer.fullName) {
        alert('FullName Is Required!!')
      
      } else if (!this.newFreelancer.githubUsername) {
        alert('GitHubUserName Is Required!!')
      } else if (!this.newFreelancer.email) {
        alert('Email Id Is Required!!')
      } else if (!this.newFreelancer.contactNumber) {
        alert('Contact Number Is Required!!')
      } else if (!this.newFreelancer.password) {
        alert('Password Is Required!!')
      } else if (!this.newFreelancer.confirmPassword) {
        alert('ConfirmPassword Is Required!!')
      }

      return Object.keys(this.errors).length === 0
    },

    FreelancerForm () {
      if (!this.validationForm()) { return }
      axios.post('http://localhost:5020/freelancer', this.newFreelancer)
        .then(response => {
          console.log('Freelancer data saved:', response.data)
          alert('SignUp successful!!!')
        this.newFreelancer = {
        fullName: '',
        githubUsername: '',
        email: '',
        contactNumber: '',
        password: '',
        confirmPassword: ''
          }
        })
        .catch(error => {
          console.error('Error saving employer data:', error)
        })
    }
  },
  fetchFreelancer () {
    axios.get(`http://localhost:5020/freelancer?fullName=${this.newFreelancer.fullName}$githubUsername=${this.newFreelancer.githubUsername}$email=${this.newFreelancer.email}$contactNumber=${this.newFreelancer.contactNumber}$password=${this.newFreelancer.password}$confirmPassword=${this.newFreelancer.confirmPassword}`)
      .then(response => {
        if (response.data.lenght) {
          alert('Freelancer Successfull !!')
        } else {
          alert('Freelancer Fail !!')
        }
      })
      .catch(error => {
        console.error('Error fetching employers:', error)
      })
  }
}
</script>

<style scoped>

#app{ @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

font-family: "Montserrat", sans-serif;
font-optical-sizing: auto;
font-style: normal;}

.Freelancer-Page {
  display: flex;
  margin: 0px;
  height: 100vh;
  width: 100vw;
}
.left, .right {
  flex: 1; 
}

.Freelancer-Pagecard {
  width: 90%;
  max-width: 490px;
  height: auto;
  padding: 19px;
  background-color: #606060;
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgb(20, 20, 20);
  text-align: center;
}
.right{
  background-color: #343232;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left{
  background-color: #606060;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.image-section img {
  width: 100%; 
  height: 550px;
  max-width: 600px;
  border-radius: 8px; 
}

fieldset {
  width: 440px;
  margin: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

h2 {
  display: flex;
  color: white;
  justify-content: left;
  margin: 10px;
  font-size: 35px;
  font-weight: bold;
}

.emp-btn,
.free-btn {
  width: 235px;
  height: 35px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #606060;
  color: black;
  font-size: 18px;
  border: 1px solid #e0e0e0;
  margin-top: 15px;
}

.emp-btn:hover {
  background-color: white;
}

.free-btn:hover {
  background-color: white;
}
.free-btn.active {
  background-color:white;
}

.password {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #c9c6c6;
}
.fullname {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #c9c6c6;
}
.github{
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #c9c6c6;
}

.email{
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #c9c6c6;
}
.Contact{
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #c9c6c6;
}
.Confirm-password{
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #c9c6c6;
}

.input-field input {
  width: 100%;
  height: 15px;
  border: none;
  outline: none;
  background-color: #606060;
  font-size: 18px;
  font-weight: bold;
  color: #c9c6c6;
}

.input-field input::placeholder {
  color: #c9c6c6;

}

.fieldset {
  border: 2px solid #e0e0e0;
}

.forgot {
  color: #0f91f6;
}
.sign-btn{
display: flex;
}
.Signin-btn{
background-color: #0f91f6;
margin-left: 10px;
height: 45px;
width: 90px;
font-size: 18px;
border-radius: 5px;
color: white;
font-weight: bold;
cursor: pointer;
}
.Signup-btn{
background-color:#00a025;
margin-left: 290px;
height: 45px;
width: 90px;
font-size: 18px;
border-radius: 5px;
color: white;
font-weight: bold;
cursor: pointer;
}
.error{
  font-size: 117px;
}
</style>
