<template>
    <div class="container">
      <div class="header">
        <h1>NETFLIX</h1>
      </div>

      <router-link to="netflix"> <button class="btn-back">Back</button></router-link>

      <div class="list">
        <h1>All Movies</h1>
      </div>



        <TvShowsMovieListPage></TvShowsMovieListPage>
        <ActionMovieList></ActionMovieList>
        <ComedyMovie></ComedyMovie>
        <HorrorMovies></HorrorMovies>
        <KannadaMoviesList></KannadaMoviesList>

      
    </div>
  </template>
<script>
import TvShowsMovieListPage from '../components/TvShowsMovieListPage.vue'
import ActionMovieList from '../components/ActionMovieList.vue';
import ComedyMovie from '../components/ComedyMovie.vue';
import HorrorMovies from '../components/HorrorMovies.vue';
import KannadaMoviesList from '../components/KannadaMoviesList.vue';

export default {
  name: 'MoviesPage',
  components: {
      
        TvShowsMovieListPage,
        ActionMovieList,
        ComedyMovie,
        HorrorMovies,
        KannadaMoviesList

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
  .header h1{
    color:red;
    margin-left:10px;
  }
  .list{
    display:flex;
    font-size:20px;
    color:red;
   justify-content: center;
   margin-top:-40px;
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
  