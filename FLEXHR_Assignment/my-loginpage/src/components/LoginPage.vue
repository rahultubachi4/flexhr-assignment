<template>
  <div class="login-container">
    <div class="login-wrapper">

      <section class="left">
        <div class="image-section">
          <img :src="logo" alt="Logo" />
        </div>
      </section>

      <section class="right">
        <div class="login-card">
          <h2>Login</h2>

          <div class="toggle-buttons">
            <button class="emp-btn" >Employer</button>
            <button class="free-btn">Freelancer</button>
          </div>

          <form @submit.prevent="LoginForm">
            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="username"> Username (Email) *</legend>
                <input type="text" id="username" placeholder="Username"  v-model="userName" required/>
                <p v-if="errors.userName" class="error-msg">{{ errors.userName }}</p>
              </fieldset>
            </div>

            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="password"> Password *</legend>
                <input :type="rememberMe ? 'text' : 'password'" id="password" placeholder="Password" v-model="password" required />
                <p v-if="errors.password" class="error-msg">{{ errors.password }}</p>
              </fieldset>
            </div>

            <div class="remember-me">
              <label>
                <input type="checkbox" v-model="rememberMe" /> Remember Me
              </label>
              <a class="forgot">Forgot Password?</a>
            </div>

            <div class="register">
              <RouterLink to="/Signup"> <p class="reg" @click="goToRegister">Register</p></RouterLink>
              <!-- <p class="reg" @click="goToRegister">Register</p> -->

              <button type="submit" class="login"  @click="LoginForm">Login</button>
            </div>
            <div v-if="successMessage" class="success-msg">
              {{ successMessage }}
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script >
import axios from 'axios'

export default {
  data () {
    return {
      logo: require('@/assets/logo1.png'),

      rememberMe: false,
      errors: {
        userName: '',
        password: ''
      },
      successMessage: ''
    }
  },
  methods: {
    goToRegister () {
      this.$emit('changePage', 'EmployerPage')
      // this.$router.push({ name: 'signup' })
    },
    LoginForm () {
      let valid = true

      if (!this.userName) {
        alert('UserName Is Requirerd !!')
        // this.errors.userName = 'Username is required'
        valid = false
      }
      if (!this.password) {
        alert('Password Is Required')
        valid = false
      }

      if (valid) {
        const url = `http://localhost:5020/company?email=${this.userName}&password=${this.password}`
        axios.get(url).then(res => {
          console.log(res)
          if (res.data.length) {
            alert('Login Successfull !!')
          } else {
            alert('Login Fail !!')
          }
        })
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

.login-wrapper {
  display: flex;
  margin: 0px;
  height: 100vh;
}

.login-card {
  /* border: 1px solid green; */
  width: 490px;
  height: 390px;
  text-align: center;
  background-color:#606060;
  border-radius: 15px;
  padding: 19px;
  box-shadow: 10px 10px 10px rgb(20, 20, 20);

}

.left{
  background-color: #606060;
  margin-left: 170px;
  width: 1150px;
  height: 100vh;
}
.right{
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #343232;
  width: 800px;
}
.image-section {
  display: flex;
  margin-top: 110px;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.image-section img {
  width: 580px;
  height: 500px;
  border-radius: 8px;
  padding-left: 410px;
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
  font-size: 17px;
  border: 1px solid #e0e0e0;
  margin-top: 15px;
}

.emp-btn:hover {
  background-color: white;
}
.free-btn:hover {
  background-color: white;
}

.username,
.password {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  color: #c9c6c6;
}

.input-field input {
  width: 100%;
  height: 15px;
  border: none;
  outline: none;
  background-color: #606060;
  font-size: 16px;
  font-weight: bold;
  color: #c9c6c6;
}

.input-field input::placeholder {
  color: #c9c6c6;
}

.remember-me {
  display: flex;
  gap: 160px;
  padding: 10px;
  font-size: 17px;
  cursor: pointer;
  font-weight: bold;
  color: #c9c6c6;
}

.register {
  display: flex;
  justify-content: left;
  margin: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #0f91f6;
  cursor: pointer;
}
.reg{
  margin-top: 5px;
  color: #0f91f6;
  text-decoration: none;
  font-weight: bold;
}
a{
  text-decoration: none;
}

.login {
  font-size: 17px;
  margin-left: 290px;
  width: 95px;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #00a025;
  color: white;
}

.fieldset {
  border: 2px solid #e0e0e0;
}

.forgot {
  color: #0f91f6;
  margin-left: 15px;
}
.error-msg{
  font-size: 17px;
}
</style>
