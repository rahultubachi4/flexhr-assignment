<template>
  <div class="movie-title">
    <h1>Action Movies</h1>
    
    <div class="movie-loop-list">
    
      <button class="prev-btn" @click="scrollLeft">&#10094;</button>
      
      <div class="movie-list" ref="movieList">
        <div v-for="actionmovie in Actionmovieslist" :key="actionmovie.id" class="movie-loop">
          <img :src="actionmovie.thumbnail" class="movie-img"><br>
          <span class="movie-name">{{actionmovie.title }}</span>
          <span class="movie-name">{{ actionmovie.rating }}</span>
      
        </div>
      </div>

      
      <button class="next-btn" @click="scrollRight">&#10095;</button>
    </div>
  </div>
</template>

<script>
import { Actionmovieslist } from './MoviesData';

export default {
  name: 'ActionMoviesList',
  data() {
    return {
      Actionmovieslist
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
.movie-loop-list{
  /* border: 1px solid red; */
  position: relative;
  display: flex;
  align-items: center;
}

.movie-list {
  display: flex;
  gap: 38px;
  padding: 10px;
  overflow: hidden;
  scroll-behavior: smooth; 
  height: 350px;
  width: 100%;
}

.movie-loop {
  text-align: center;
  flex: 0 0 auto;
}

.movie-img {
  height: 280px;
  width: 280px;
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
  color:white;
}

.prev-btn, .next-btn {
  position: absolute;
  top: 45%;
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

</style>
