<template>
  <router-view/>
</template>
<script>

export default {
 data(){
    return{
      studentName: "Bhagdeep Sandhu",
      title: "CSC 642 848 Fall 2021 Individual Assignment",
      titleEnding: "Data survey form",
      userTitle: "",
      
      lastName: "",
     
      firstName: "",
      userFeet: "",
      userInches: "",
      userEmail: "",
      userPhone: "",
      userStreet: "",
      userCity: "",
      userState: "",
      userZipCode: "",
      userBudget: "",
      additional: [],
      terms: false,
      
      validEmail: false,

       lastNameError: "",
       firstNameError: "",
       userTitleError: "",
       streetError: "",
       cityError: "",
       stateError: "",
       zipcodeError: "",
       emailError: "",
       termsError: "",
       phoneError: "",

       maxLength: 10,
 
    
    }
  },
  
  /*localStorage.setItem('studentName',JSON.stringify(this.studentName));
        localStorage.setItem('titleEnding',JSON.stringify(this.titleEnding));
      
      this.studentName = JSON.parse(localStorage.getItem("studentName"));
    this.titleEnding = JSON.parse(localStorage.getItem("titleEnding"));
      */
 
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-color: white;
}
@import'~bootstrap/dist/css/bootstrap.css';
input{
  border: 2px solid;
  border-radius: 4px;
  font-size: 14px;
  margin: 0.25rem;
  padding: 5px 10px;
  transition: background-color 0.5s ease-out;
}
input[id = 'user-street']{
  width: 375px;
}
input[id = 'user-city']{
  width: 250px;
}
input[class = 'phone']{
  width: 75px;
  text-align: center;
  padding: 3px; 
}
input[id = 'agree']{
  margin-right: 60%;
}
body {
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: #0f5e4a;
  text-align: center;
}
body > div {
  height: 100%;
  width: 90%;
  margin: 0 auto;
}
h1 {
  background-color: rgb(240, 239, 239);
  border-radius: 2%;
  padding: 77px 30px;
}
h2 {
  background-color: white;
  border-radius: 2%;
  margin-left: 15%;
  margin-right: 15%;
  text-align: left;
  padding: 3%;
}
.form-label{
  font-size: 150%;
}
.terms-agree{
  font-size: 16px;
  text-align: left;
}
.hint-text{
  font-size: 14px;
  color: rgb(95, 95, 95);
}
.form {
  font-family: sans-serif;
  font-size: 37%;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 5%;
  user-select: none;
  overflow-x: auto;
}
.submit-button {
  float: right;
  margin-right: 20%;
  color: white;
  display: block;
  width: 10%;
  border: none;
  background-color: #04aa6d;
  padding: 1% 1%;
  font-size: 60%;
  cursor: pointer;
  text-align: center;
}
.clear-button {
  float: left;
  margin-left: 20%;
  color: white;
  display: block;
  width: 10%;
  border: none;
  background-color: grey;
  color: white;
  border-color: gray;
  padding: 1% 1%;
  font-size: 60%;
  cursor: pointer;
  text-align: center;
}
input:focus:invalid {
  background: url("https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg") no-repeat 95% 50% lightsalmon;
  background-size: 25px;
}
select {
  font-family: sans-serif;
  font-size: 14px;
  border-width: 2px;
  padding: 2px 7px;
  cursor: pointer;
  text-align: left;
  color: black;
  margin: 10px;
  transition: background-color 0.5s ease-out;
}
/*select:required:valid {
  padding: 2px 7px;
  font-size: 14px;
  border-width: 2px;
  border-color: green;
}*/
</style>
