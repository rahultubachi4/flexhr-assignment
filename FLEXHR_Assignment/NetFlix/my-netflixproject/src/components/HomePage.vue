<template>
    <div class="container">
      <div class="header">
        <h1>NETFLIX</h1>
        <!-- <NetFlixHeader></NetFlixHeader> -->
      </div>
      <div class="home">

       <router-link to="netflix"> <button class="btn-back">Back</button></router-link>

        <div class="main-home">
         <h1 class="about">About Netflix</h1>
        <h1>Welcome to Netflix</h1>

        <p>At Netflix, we want to entertain the world. Whatever your taste, and no matter where you live, we give you access to best-in-class TV series, documentaries, feature films and games. Our members control what they want to watch, when they want it, in one simple subscription. We’re streaming in more than 30 languages and 190 countries, because great stories can come from anywhere and be loved everywhere. We are the world’s biggest fans of entertainment, and we’re always looking to help you find your next favorite story.</p>


        <p>Netflix is a leading streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.</p>
        
        <h2>Discover Your Next Favorite Series</h2>
        <p>With a vast library of content, Netflix is home to some of the most popular series in the world, including original productions like:</p>
        <ul>
          <li><strong>Stranger Things</strong> - A thrilling sci-fi series set in the 1980s.</li>
          <li><strong>The Crown</strong> - A historical drama about the reign of Queen Elizabeth II.</li>
          <li><strong>Bridgerton</strong> - A romantic period drama based on Julia Quinn's novels.</li>
        </ul>
  
        <h2>Personalized Experience</h2>
        <p>Netflix uses advanced algorithms to provide personalized recommendations tailored to your viewing habits, making it easy to find content you love.</p>
        
        <h2>Accessible Anytime, Anywhere</h2>
        <p>With the ability to download content for offline viewing and a user-friendly interface, Netflix allows you to enjoy your favorite shows and movies anytime, anywhere.</p>
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
  </style>
  