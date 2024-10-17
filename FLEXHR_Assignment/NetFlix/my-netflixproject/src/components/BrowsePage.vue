<template>
    <div class="container">
      <div class="header">
        <h1>NETFLIX</h1>
        <!-- <NetFlixHeader></NetFlixHeader> -->
      </div>
      <div class="home">

       <router-link to="netflix"> <button class="btn-back">Back</button></router-link>

        <div class="main-home">
         <h1 class="about">Browse & languages</h1>
       <router-link to="/kannadamovies"> <li>Kannada </li></router-link> 
       <router-link to="/Englishmovies"> <li>English</li></router-link> 
       <router-link to="/HindiMovies"><li>Hindi</li></router-link> 
       <router-link to="/Temilmovies"> <li>Temil</li></router-link>
       <router-link to="/Telgumovies"> <li>Telgu</li></router-link>
         <li>Urdu</li>
         <li>Japanese</li>
         <li>German</li>
         <li>French</li>
        </div>
      </div>
    </div>
  </template>
  
  <script>
//   import NetFlixHeader from './NetFlixHeader.vue';
  
  export default {
    name: 'HomePage',
  
    components: {
    //   NetFlixHeader
    }
  }
  </script>
  
  <style scoped>
  .container {
    background-color: black;
    min-height:100vh;
    color: white; 
    padding: 20px;
  }
  .home{
    /* border:1px solid red; */
  }
  .main-home{
    /* border:1px solid red; */
    width:950px;
    margin-left:460px;
    margin-top:-15px;
  }
  .main-home p{
  font-size: 20px;
  }

  .main-home li {
  font-size: 25px;
  text-align: center;
list-style-type: none;
margin-bottom:23px;
cursor:pointer;
color:white;

  }


  .header h1{
    color:red;
    margin-left:10px;
  }
  
  
  h1, h2 {
    margin: 20px 0;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  .btn-back{
    font-size:20px;
    width:80px;
    margin-top:30px;
    background-color: black;
    color:white;
    border:none;
    cursor:pointer;
  }
  .about{
    font-size: 35px;
    color:red;
    text-align: center;
    text-decoration:underline ;
  }
  a{
    text-decoration: none;
  }
  </style>
  