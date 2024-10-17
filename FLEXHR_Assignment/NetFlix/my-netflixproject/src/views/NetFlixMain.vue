<template>
    <div class="main">
      <NetFlixHeader class="header"></NetFlixHeader>
      <div class="content">
        <TvShowsMovieListPage></TvShowsMovieListPage>
        <ActionMovieList></ActionMovieList>
        <ComedyMovie></ComedyMovie>
        <HorrorMovies></HorrorMovies>
        <KannadaMoviesList></KannadaMoviesList>
      </div>
    </div>
  </template>
  
  
<script>
import NetFlixHeader from '../components/NetFlixHeader.vue'
import TvShowsMovieListPage from '../components/TvShowsMovieListPage.vue'
import ActionMovieList from '../components/ActionMovieList.vue';
import ComedyMovie from '../components/ComedyMovie.vue';
import HorrorMovies from '../components/HorrorMovies.vue';
import KannadaMoviesList from '../components/KannadaMoviesList.vue';

export default {
    name: 'NetFlixMain',

    components: {
        NetFlixHeader,
        TvShowsMovieListPage,
        ActionMovieList,
        ComedyMovie,
        HorrorMovies,
        KannadaMoviesList

    }

}
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color:black;
  margin-left:1px;
  margin-right:1px;
}

.header {
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; 
  background-color: rgb(0, 0, 0); 
  color: white;
  /* padding: 10px 8px; */
  margin-left:9px;
  margin-right:9px;
}

.content {
  flex-grow: 1;
  overflow-y: auto;
  height: 100%;
  margin-top: 0; 
  padding-top: 63px;
  position: relative;
  scrollbar-width: none; 
}
.content::-webkit-scrollbar {
  display: none; 
}
</style>


