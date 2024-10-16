<template>
  <div id="app">

    <LoginPageData></LoginPageData>

  </div>
</template>

<script>
import LoginPageData from '../components/LoginPageData.vue'

export default {
  components: {
    LoginPageData
  }
}

</script>

<style>
#app{ @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

font-family: "Montserrat", sans-serif;
font-optical-sizing: auto;
font-style: normal;}

body {
  display: flex;
  justify-content: right;
  align-items: center;
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
.emp-btn.active,
.free-btn.active {
  background-color: white;
}
</style>
