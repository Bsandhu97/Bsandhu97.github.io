/* eslint-disable */

<template>
  <div class="Result">
     <h1>
    {{ title }}
    <br />
    {{ studentName }}
    <br />
    {{ titleEnding }}
    <h2>
      <label class = "page-title"> Survey Result </label><br/><br/>

      <div class="section-title" v-if="lastName" > 
        <label class = "input-title"> Last Name: </label>
        <label class = "input">&nbsp;{{lastName}}</label>
        </div><br/>

      <div class="section-title" v-if="firstName">
        <label class = "input-title"> First Name: </label>
        <label class = "input"> &nbsp;{{firstName}}</label></div><br/>

      <div class="section-title" v-if="userTitle">
        <label class = "input-title">Title: </label> 
        <label class = "input"> &nbsp;{{userTitle}} </label>
        </div><br/>

      <div class="section-title" v-if="userFeet">
        <label class = "input-title"> Height: </label>
        <label class = "input"> &nbsp;{{userFeet }} {{userInches}} </label>
        </div><br/>

      <div class="section-title" v-if="userPhone">
        <label class = "input-title"> Phone Number: </label>
        <label class = "input"> &nbsp;{{userPhone}} </label>
        </div><br/>

      <div class="section-title" v-if="userStreet"> 
        <label class = "input-title">Address: </label>
        <br/>
        <label class = "sub-input-title"> &emsp; Street: 
          <label class = "input"> &nbsp;{{userStreet}} </label>
          </label></div>
      <div class="section-title" v-if="userCity"> 
        <label class = "sub-input-title"> &emsp; City: 
          <label class = "input"> &nbsp;{{userCity }} </label>
          </label></div>
      <div class="section-title" v-if="userState">
        <label class = "sub-input-title"> &emsp; State: 
          <label class = "input"> &nbsp;{{userState}}</label>
          </label></div>
      <div class="section-title" v-if="userZipCode">
        <label class = "sub-input-title"> &emsp; ZipCode: 
          <label class = "input"> &nbsp;{{userZipCode}}</label>
          </label></div>

      <iframe class = "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.8173965085075!2d-122.47907518440849!3d37.72396382285378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7db0ef7096cb%3A0x867d765f162e8be9!2sCollege%20of%20Science%20and%20Engineering!5e0!3m2!1sen!2sus!4v1637914964524!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      <br/><br/>
      
      <div class="section-title" v-if="userBudget">
        <label class = "input-title"> Budget: </label>
        <label class = "input"> &nbsp;{{userBudget}}</label>
        </div><br/>

      <div class="section-title" v-if="userEmail">
        <label class = "input-title"> Email: </label>
        <label class = "input"> &nbsp;{{userEmail}}</label>
        </div><br/>

    </h2>
    <button class="clear-button" v-on:click="goBackButton()">Back</button>
  </h1>
  </div>
</template>

<script>
//import Home from '../views/Home.vue'
// <button class="submit-button" v-on:click="submitButton('button pressed')"> Submit</button>

export default {
  name: "Form",
  data() {
    return {
     studentName: "Bhagdeep Sandhu",
      title: "CSC 642 848 Fall 2021 Individual Assignment",
      titleEnding: "Data survey form",

      lastName: '',
      firstName: "",
      userTitle: "",
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
    }
  },
  methods: {
    goBackButton(){
      this.$router.go(-1);
    },
    phoneFormat(){

      var str;
      var str1;
      var str2;
      var str3;
      var numLength;
      var index = 0;

      var dash = 0;
      var par = 0;

      str = this.userPhone;
      numLength = str.length;

      if(str.search("-") == -1){
        dash = 1;
      }
      /*if(str.search("(") == -1){
        par = 1;
      }
      */
      if(dash === 1){
        str1 = str.substring(0,3);
        str2 = str.substring(3,6);
        str3 = str.substring(6,10);

         str = str1 + "-" + str2 + "-" + str3; 
         //str = "(" + str1 + ") - " + str2 + " - " + str3;
      }
      /*
      else if(dash === 1){
        str1 = str.substring(0,4);
        str2 = str.substring(4,7);
        str3 = str.substring(7,11);

        str = str1 + " - " + str2 + " - " + str3;
      }
      else if(par === 1){
        str1 = str.substring(0,3);
        str2 = str.substring(3,10);
  
        str = "(" + str1 + ") " + str2;
      }
    */
      
      this.userPhone = str;
    }
  },
  mounted() {
    if (localStorage.lastName) {
      this.lastName = localStorage.lastName;
    }
    if (localStorage.firstName) {
      this.firstName = localStorage.firstName;
    }
    if (localStorage.userFeet) {
      this.userFeet = localStorage.userFeet;
    }
    if (localStorage.userInches) {
      this.userInches = localStorage.userInches;
    }
    if (localStorage.userTitle) {
      this.userTitle = localStorage.userTitle;
    }
    if (localStorage.userPhone) {
      this.userPhone = localStorage.userPhone;
      this.phoneFormat();
    }
    if (localStorage.userStreet) {
      this.userStreet = localStorage.userStreet;
    }
    if (localStorage.userCity) {
      this.userCity = localStorage.userCity;
    }
    if (localStorage.userState) {
      this.userState = localStorage.userState;
    }
    if (localStorage.userZipCode) {
      this.userZipCode = localStorage.userZipCode;
    }

    if (localStorage.userBudget) {
      this.userBudget = localStorage.userBudget;
    }
    if (localStorage.additional) {
          this.additional = localStorage.additional;
    }
    if (localStorage.userEmail) {
          this.userEmail = localStorage.userEmail;
    }
  }
};
</script>

<style scoped>
.page-title{
  font-size: 125%;
  margin-left: 35%;
  padding: 10px 5px;
  font-weight: 800;
  border-bottom: 3px solid rgb(197, 195, 195);
}
.input-title{
  font-size: 100%;
  font-weight: 600;
}
.sub-input-title{
  font-style: italic;
  font-size: 100%;
  font-weight: 500;
}
.input{
  font-weight: 300;
  font-style: normal;
   font-size: 95%;
}
.map{
  margin-left: 58% ;
}
</style>
