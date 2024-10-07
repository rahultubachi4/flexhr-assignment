<template>
    <div class="create-container">
      <div class="create-ForgorPassword">

        <section class="left">
          <div class="image-section">
            <img :src="logo" alt="Logo" />
          </div>
        </section>

        <section class="right">
          <div class="create-NewPassword">
            <h2>Create New Password</h2>

            <form @submit.prevent="validationForm">

            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="email">Email *</legend>
                <input type="email" id="email" placeholder=" Email " v-model="createEmpPassword.email" />
                <p class="error-message" v-if="errors.email">{{ errors.email }}</p>
              </fieldset>
            </div>

              <div class="input-field">
                <fieldset class="fieldset">
                  <legend class="newpassword"> New Password *</legend>
                  <input :type="rememberMe ? 'text' : 'password'" id="newpassword" placeholder="New Password" v-model="createEmpPassword.newPassword" />
                  <p v-if="errors.newpassword" class="error-msg">{{ errors.newpassword }}</p>
                </fieldset>
              </div>

              <div class="input-field">
                <fieldset class="fieldset">
                  <legend class="confirmpassword"> Confirm Password *</legend>
                  <input :type="rememberMe ? 'text' : 'password'" id="confirmpassword" placeholder="Confirm Password" v-model="createEmpPassword.confirmPassword" />
                  <p v-if="errors.confirmpassword" class="error-msg">{{ errors.confirmpassword }}</p>
                </fieldset>
              </div>

              <div class="remember-me">
                <label>
                  <input type="checkbox" v-model="rememberMe" /> Remember Me
                </label>
              </div>

              <div class="create-button">
                <RouterLink to="/login">
                  <button type="button" class="sign">Signin</button>
                </RouterLink>
                <button type="submit" class="submit" @click="ForgotForm">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  </template>
<script>
import axios from 'axios'

export default {
  name: 'ForgotPassword',

  data () {
    return {
      logo: require('@/assets/logo1.png'),
      rememberMe: false,

      createEmpPassword: {
        email: '',
        newPassword: '',
        confirmPassword: ''
      },
      errors: {
        email: '',
        newpassword: '',
        confirmpassword: ''
      }
    }
  },
  methods: {

    validationForm () {
      if (!this.createEmpPassword.email) {
        alert('Email Id Required !!')
      } else if (!this.createEmpPassword.newPassword) {
        alert('New Password Is Required !!')
      } else if (!this.createEmpPassword.confirmPassword) {
        alert('Confirm Password Is Required !!')
      } else if (this.createEmpPassword.newPassword === this.createEmpPassword.confirmPassword) {
        alert('Create New Password Succeesfull !!')
      } else {
        alert('Password Do not Match !!')
      }
    },

    ForgotForm () {
      axios.post('http://localhost:5020/updatepassword', this.createEmpPassword)
        .then(response => {
          console.log('Create password data saved:', response.data)
          this.createEmpPassword = {
            email: '',
            newPassword: '',
            confirmPassword: ''
          }
        })
        .catch(error => {
          console.error('Create password:', error)
        })
    }
  },

  fetchEmployers () {
    axios.get('http://localhost:8080/updatepassword')
      .then(response => {
        this.updatepass = response.data
      })
      .catch(error => {
        console.error(' fetching password:', error)
      })
  }

}

</script>
<style scoped>
#app{ @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

font-family: "Montserrat", sans-serif;
font-optical-sizing: auto;
font-style: normal;}

.create-ForgorPassword {
  display: flex;
  margin: 0px;
  height: 100vh;
  width: 100vw; 
}

.left, .right {
  flex: 1; 
}

.create-NewPassword{
  width: 90%;
  max-width: 490px;
  height: auto;
  padding: 19px;
  background-color: #606060;
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgb(20, 20, 20);
  text-align: center;
}

.left {
  background-color: #606060;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right {
  background-color: #343232;
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
    margin-bottom: 15px;
    margin-top: 15px;
}

h2 {
    display: flex;
    color: white;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    padding-top: -2px;
    margin-top:20px;
    margin-bottom: 10px;
}

.newpassword,
.confirmpassword {
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

.create-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.email {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #c9c6c6;
}

.submit {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 45px;
    cursor: pointer;
    border-radius: 5px;
    background-color: #00a025;
    color: white;
    width: 90px;
    margin-top: 10px;
    margin-right: 10px;
}

.sign {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 45px;
    cursor: pointer;
    border-radius: 5px;
    background-color: #00a025;
    color: white;
    width: 90px;
    margin-top: 10px;
    margin-left: 10px;
}

a {
    text-decoration: none;
}

.remember-me {
    display: flex;
    justify-content: left;
    color: #0f91f6;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 4px;
    font-size:17px;
}
</style>