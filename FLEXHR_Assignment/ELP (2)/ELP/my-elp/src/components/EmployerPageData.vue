<template>
  <div class="EmployerForm-container">
    <div class="Employee-page ">

      <section class="left">
        <div class="image-section">
          <img :src="logo" alt="Logo" />
        </div>
      </section>

      <section class="right">
        <div class="Employee-PageCard">
          <h2>Signup</h2>

          <div class="toggle-buttons">
            <button class="emp-btn" :class="{ active:activeButton === 'employer' }" @click="setActiveButton('employer')">Employer</button>
            <button class="free-btn" @click="goToFreelancer">Freelancer</button>
          </div>

          <form @submit.prevent="validationForm">
            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="companyname"> Company Name *</legend>
                <input type="text" id="companyname" placeholder="Companyname " v-model="newEmployer.companyName"
                  required />
                  <p class="error-message" v-if="errors.companyName">{{ errors.companyName }}</p>
              </fieldset>
            </div>

            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="email">Email *</legend>
                <input type="email" id="email" placeholder=" Email " v-model="newEmployer.email" required />
                <p class="error-message" v-if="errors.email">{{ errors.email }}</p>
              </fieldset>
            </div>

            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="Contact">Contact Number *</legend>
                <input type="text" id="Contact" placeholder=" Contact Number " v-model="newEmployer.contactNumber"
                 maxlength="10" />
                 <p class="error-message" v-if="errors.contactNumber">{{ errors.contactNumber }}</p>
              </fieldset>
            </div>

            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="password"> Password *</legend>
                <input type="password" id="password" placeholder="Password" v-model="newEmployer.password" required />
                <p class="error-message" v-if="errors.password">{{ errors.password }}</p>
              </fieldset>
            </div>

            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="Confirm-password">Confirm Password *</legend>
                <input type="password" id="Confirm-password" placeholder="Confirm-Password"
                  v-model="newEmployer.confirmPassword" required />
                  <p class="error-message" v-if="errors.confirmpassword">{{ errors.confirmpassword }}</p>
              </fieldset>
            </div>

            <div class="sign-btn">
              <RouterLink to="/login"><button  class="Signin-btn">Signin</button></RouterLink>

              <div class="Signup">
                <button class="Signup-btn" @click="EmployerForm">Signup</button>
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
  name: 'EmployerPageData',

  data () {
    return {
      logo: require('@/assets/logo1.png'),

      newEmployer: {
        companyName: '',
        email: '',
        contactNumber: '',
        password: '',
        confirmPassword: ''
      },

      errors: {},
      successMessage: '',

      activeButton: 'employer'
    }
  },
  
  methods: {
    goToFreelancer () {
      this.$emit('changePage', 'FreelancerPageData')
    },

    setActiveButton (buttonType) {
      this.activeButton = buttonType
    },

    validationForm () {
      this.errors = {}

      if (!this.newEmployer.companyName) {
        alert('Company Name Is Required!!')
      } else if (!this.newEmployer.email) {
        alert('Email Id Is Required!!')
      } else if (!this.newEmployer.contactNumber) {
        alert('Contact Number Is Required!!')
      } else if (!this.newEmployer.password) {
        alert('Password Is Required!!')
      } else if (!this.newEmployer.confirmPassword) {
        alert('ConfirmPassword Is Required!!')
      }

      return Object.keys(this.errors).length === 0
    },

    EmployerForm () {
      if (!this.validationForm()) { return }
      axios.post('http://localhost:5020/company', this.newEmployer)
        .then(response => {
          console.log('Employer data saved:', response.data)
          alert('SignUp successful!!!')
          this.newEmployer = {
            companyName: '',
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
  fetchEmployers () {
    axios.get(`http://localhost:5020/company?companyName=${this.newEmployer.companyName}$email=${this.newEmployer.email}$contactNumber=${this.newEmployer.contactNumber}$password=${this.newEmployer.password}$confirmPassword=${this.newEmployer.confirmPassword}`)
      .then(response => {
        if (response.data.lenght) {
          alert('Employer Successfull !!')
        } else {
          alert('Employer Fail !!')
        }
      })
      .catch(error => {
        console.error('Error fetching employers:', error)
      })
  }
}

</script>

<style scoped>
#app {
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.Employee-page  {
  display: flex;
  margin: 0px;
  height: 100vh;
  width: 100vw; 
}
.left, .right {
  flex: 1; 
}

.Employee-PageCard {
  width: 90%;
  max-width: 490px;
  height: auto;
  padding: 19px;
  background-color: #606060;
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgb(20, 20, 20);
  text-align: center;
}

.right {
  background-color: #343232;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left {
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
.emp-btn.active,
.free-btn.active {
  background-color: white;
}

.companyname {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #c9c6c6;
}

.password {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #c9c6c6;
}

.email {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #c9c6c6;
}

.Contact {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #c9c6c6;
}

.Confirm-password {
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
  background-color: #606060;
}

.fieldset {
  border: 2px solid #e0e0e0;
}

.forgot {
  color: #0f91f6;
}

.sign-btn {
  display: flex;
}

.Signin-btn {
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

.Signup-btn {
  background-color: #00a025;
  margin-left: 290px;
  height: 45px;
  width: 90px;
  font-size: 18px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.error-msg{
  font-size: 117px;
}
</style>
