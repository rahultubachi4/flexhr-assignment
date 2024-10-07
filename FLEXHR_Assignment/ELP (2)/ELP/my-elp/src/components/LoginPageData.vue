<template>
  
  <div class="login-container">
    <div class="login-Page">

      <section class="left">
        <div class="image-section">
          <img :src="logo" alt="Logo" />
        </div>
      </section>

      <section class="right">
        <div class="login-Pagecard">
          <h2>Login</h2>

          <div class="toggle-buttons">
            <button class="emp-btn" :class="{ activeEmployer: activeButton === 'employer' }"  @click="toggleButton('employer')">Employer</button>
            <button class="free-btn" :class="{ activeFreelancer: activeButton === 'freelancer' }" @click="toggleButton('freelancer')">Freelancer</button>
          </div>

          <form @submit.prevent="validationForm">
            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="username"> Username (Email) *</legend>
                <input type="text" id="username" placeholder="Username"  v-model="userName" required/>
               
             
              </fieldset>
            </div>

            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="password"> Password *</legend>
                <input :type="rememberMe ? 'text' : 'password'" id="password" placeholder="Password" v-model="password" required />
          
                
              </fieldset>
            </div>

            <div class="remember-me">
              <label>
                <input type="checkbox" v-model="rememberMe" /> Remember Me
              </label>

              <RouterLink to="/Forgot"> <a class="forgot" @click="goToForgot">Forgot Password?</a></RouterLink>
            </div>

            <div class="register">
              <RouterLink to="/Signup"> <p class="reg" @click="goToRegister">Register</p></RouterLink>


             <button type="submit" class="login"  @click="LoginForm">Login</button>
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
  name: 'LoginPageData',

  data () {
    return {
      logo: require('@/assets/logo1.png'),

      rememberMe: false,
      activeButton: '',

    }
  },
  methods: {
    goToRegister () {
      this.$emit('changePage', 'EmployerPageData')
    },

    toggleButton (buttonType) {
      this.activeButton = buttonType
    },

    setActiveButton (buttonType) {
      this.activeButton = buttonType
    },

    validationForm () {
      let valid = true

      if (!this.userName) {
        alert('UserName Is Requirerd !!')
        valid = false
      } else if (!this.password) {
        alert('Password Is Required')
        valid = false
      }

      if (valid) {
        const url = `http://localhost:5020/company?email=${this.userName}&password=${this.password}`
        axios.get(url).then(res => {
          console.log(res)
          if (res.data.length) {  
            this.$router.push('/JobAsideData')
             alert('Company Login Successful !!!')
          } else {
            const url = `http://localhost:5020/freelancer?email=${this.userName}&password=${this.password}`
            axios.get(url).then(res => {
              console.log(res)
              if (res.data.length) {
                this.$router.push('/FreeJobData')
                alert('freelancer Login Successful !!!')
              } else {
                alert('Login Fail !!')
              }
            })
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

.login-Page {
  display: flex;
  margin: 0px;
  height: 100vh;
  width: 100vw; 
}
.left, .right {
  flex: 1; 
}
.login-Pagecard {
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
.activeEmployer {
  background-color: white;
}
.activeFreelancer {
  background-color: white;
}
.emp-btn:hover,
.free-btn:hover {
  background-color: white;
}

.username,
.password {
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
  font-size: 18px;
  margin-left: 290px;
  width: 95px;
  height: 45px;
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
  margin-left: 17px;
  font-size: 17px;
}
.error-msg{
  font-size: 17px;
}
</style>
