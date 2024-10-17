<template>
    <div class="header">
      <div class="header-left">
        <h1>NETFLIX</h1>
        <ul class="nav-menu">
      <router-link to="/abouthome"><li><a href="#">Home</a></li></router-link> 

      <router-link to="/tvshows">   <li><a href="#">TV Shows</a></li></router-link> 

      <router-link to="/movies"> <li> <a href="#">Movies</a>  </li></router-link> 
    
        
          <li><a href="https://www.netflix.com/tudum/topics/trending">New & Popular</a></li>

          <li><a href="https://help.netflix.com/en/node/10523">My List</a></li>

          <router-link to="/browse&languages">  <li><a href="#">Browse by Languages</a></li></router-link>

        </ul>
      </div>
      <div class="header-right">
     <img :src="require('@/assets/searchicon.png')" alt="Search Icon" class="search-icon" /> 
        <span>Children</span>
        <img :src="require('@/assets/bellicon.png')" alt="bell Icon" class="bell-icon" />
        <img :src="require('@/assets/netflixsmileu.png')" alt="netflixsmileu Icon" class="netflixsmileu-icon" />
        <img :src="require('@/assets/sortdownarrow.png')" alt="sortdownarrow Icon" class="sortdownarrow-icon" />
   
      </div>

    </div>
   
  </template>
  
  <script>

  export default {
    name: 'NetFlixHeader',

   
  }
  
  </script>
  
  <style scoped>

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 70px;
    background-color: black;
    /* border: 1px solid red; */
  }
  
  .header-left {
    display: flex;
    align-items: center;
  }
  
  .header-left h1 {
    color: red;
    margin-right: 30px;
  
  }
 
  
  .nav-menu {
    list-style: none;
    display: flex;
    gap: 25px;
    font-size:20px;
  }
  
  .nav-menu li {
    display: inline-block;
  }
  
  .nav-menu a {
    text-decoration: none;
    color: white;
  }
  
  .header-right {
    display: flex;
    align-items: center;
    gap: 25px;
    margin-right:10px;
  }
  .header-right span{
    font-size:20px;
    color:white
  }


  
  .header-right .icon {
    cursor: pointer;
    font-size:18px;
  }
 .search-icon {
  width: 25px;
  height: 25px;
  filter: invert(100%) brightness(1000%);
}
.bell-icon {
  width: 25px;
  height: 25px;
  background: white;
  filter: invert(100%) brightness(1000%);
}
.netflixsmileu-icon{
    width: 29px;
   height: 29px; 
}
.sortdownarrow-icon{
  width: 18px;
  height: 18px;
  margin-left:-15px;
  filter: invert(100%) brightness(1000%);
}
.select{
  background-color: black;
}






  </style>
  