<template>
    <div class="container">
      <div class="header">
        <h1>NETFLIX</h1>
      </div>

      <router-link to="netflix"> <button class="btn-back">Back</button></router-link>

      <div class="movie-title">
    <h1>TV Shows</h1>
    
    <div class="movie-loop-list">
    
      <button class="prev-btn" @click="scrollLeft">&#10094;</button>
      
      <div class="movie-list" ref="movieList">
        <div v-for="movie in movieslist" :key="movie.id" class="movie-loop">
          <img :src="movie.thumbnail" class="movie-img"><br>
          <span class="movie-name">{{ movie.name }}</span>
          <span class="movie-name">{{ movie.rating }}</span>
          <!-- <span class="movie-name">{{ movie.category }}</span> -->
        </div>
      </div>

      
      <button class="next-btn" @click="scrollRight">&#10095;</button>
    </div>
  </div>

    </div>
  </template>
<script>
import { movieslist } from './MoviesData';

export default {
  name: 'TvShowsPage',
  data() {
    return {
      movieslist
    };
  },
  methods: {
    scrollLeft() {
      const movieList = this.$refs.movieList;
      movieList.scrollLeft -= 600; 
    },
    scrollRight() {
      const movieList = this.$refs.movieList;
      movieList.scrollLeft += 600;
    }
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
  

  .movie-loop-list{
  /* border: 1px solid red; */
  position: relative;
  display: flex;
  align-items: center;
  margin-top:20px;

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


.movie-list {
  display: flex;
  gap: 38px;
  padding: 10px;
  overflow: hidden;
  scroll-behavior: smooth; 
  height: 650px;
  width: 100%;
}

.movie-loop {
  text-align: center;
  flex: 0 0 auto;
}

.movie-img {
  height: 500px;
  width: 330px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.movie-img:hover {
  transform: scale(1.20); 
}
.movie-name {
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
  display: block;
}

.prev-btn, .next-btn {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  height:50px;
  font-size:23px;
}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}

.prev-btn:hover, .next-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.movie-list {
  scrollbar-width: none;
  -ms-overflow-style: none;  
}
.movie-list::-webkit-scrollbar { 
  display: none;  
}
.movie-title{
font-size:10px;
/* border:1px solid red; */
background-color:black;
color:white;
padding-left:10px;

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
  