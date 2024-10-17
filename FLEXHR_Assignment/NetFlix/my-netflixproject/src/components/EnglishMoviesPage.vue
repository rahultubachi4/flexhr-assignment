<template>
    <div class="container">
      <div class="header">
        <h1>NETFLIX</h1>
      </div>

      <router-link to="browse&languages"> <button class="btn-back">Back</button></router-link>

      <div class="movie-title">
    <h1>English Movies</h1>
    
    <TvShowsMovieListPage></TvShowsMovieListPage>

    </div>
  </div>

 
  </template>
<script>
import TvShowsMovieListPage from './TvShowsMovieListPage.vue';

export default {
  name: 'EnglishMoviesPage',

  components: {
    TvShowsMovieListPage
  }

  
};
</script>
  
  <style scoped>
  .container {
    background-color: black;
    min-height:100vh;
    color: white; 
    padding: 20px;
  }
  .header h1{
    color:red;
    margin-left:10px;
  }
  


.movie-title h1{
    display:flex;
    justify-content: center;
    margin-top:50px;
    font-size:30px;
    color:red;
    font-weight:bold;
    text-decoration:underline ;
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

  </style>
  