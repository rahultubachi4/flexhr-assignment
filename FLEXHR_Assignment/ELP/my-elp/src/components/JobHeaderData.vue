<template>
    <div class="job-header">
      <h1 class="intuit">INTUIT</h1>
      <h1 class="title">INTUIT HIRE</h1>
    <RouterLink to="/login"><button class="logout-button">Logout</button></RouterLink>
    </div>
  </template>

<script>
export default {
  name: 'JobHeaderData'
}
</script>

  <style scoped>
 #app{ @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

font-family: "Montserrat", sans-serif;
font-optical-sizing: auto;
font-style: normal;}

  .job-header{
    display: flex;

    width: 1919px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: #676767;
    margin: px 0px 0px 15px;
  }

  .logout-button{
   height: 45px;
   width: 110px;
   cursor: pointer;
   border-radius: 5px;
   font-size: 18px;
   margin: 0px 10px 0px 10px;
   background-color: #9c9c9c;
   color: white;
   font-weight: bold;
 }
 .title{
    font-size: 23px;
    margin-right: 1520px;
    color:  #2fa5ff;
    font-weight: bold;
 }
 .intuit{
    display: flex;
    align-items: center ;
    border:1px solid red;
    font-size: 13px;
    border-radius: 80px;
    height: 50px;
    width: 50px;
    margin: 20px;
    background-color: #0f91f6;
    color: white;
    font-weight: bold;
    border: none;
   justify-content: center;
   margin-left: 50px;

 }

  </style>