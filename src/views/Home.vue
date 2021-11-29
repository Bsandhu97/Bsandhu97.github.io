
<template>
  <div class="home">
    <h1>
    {{ title }}
    <br />
    {{ studentName }}
    <br />
    {{ titleEnding }}
      <form >        
        <div id="v-model-select" class="form">
          <h2>
          <label class="hint-text">Astriks(*) - Input is required</label><br/>
          <span class = "section-title">* Last name: </span><br/>
          <input v-model="lastName" placeholder="Enter Last Name" id="lastName" required/>
          <br />
          <div class="error-messages" v-if="lastNameError">{{lastNameError}}</div><br/>

          <span class = "section-title">* First Name: </span><br/>
          <input v-model="firstName" placeholder="Enter First Name" id="firstname" required/>
          <br/>
          <div class="error-messages" v-if="firstNameError">{{firstNameError}}</div><br/>
          
          <span class = "section-title">* Chose preferred title:</span>
          <br/>
          <select v-model="userTitle" id="user-title" required>
            <option disabled value="">Please select one</option>
            <option>Student</option>
            <option>Professor</option>
            <option>Retired</option>
            <option>Staff</option>
            <option>None</option>
          </select>
          <div class="error-messages" v-if="userTitleError">{{userTitleError}}</div><br/>
          <br/>

          <span class = "section-title"> Select Height: </span><br/>
          <select v-model="userFeet" id="user-feet" class = "height">
            <option disabled value="">Please select feet</option>
            <option>1 feet</option>
            <option>2 feet</option>
            <option>3 feet</option>
            <option>4 feet</option>
            <option>5 feet</option>
            <option>6 feet</option>
            <option>7 feet</option>
            <option>8 feet or over</option>
          </select>
          <span>  </span>
          <select v-model="userInches" id="user-inches"  class = "height">
            <option disabled value="">Please select inches</option>
            <option>1 inch</option>
            <option>2 inches</option>
            <option>3 inches</option>
            <option>4 inches</option>
            <option>5 inches</option>
            <option>6 inches</option>
            <option>7 inches</option>
            <option>8 inches</option>
            <option>9 inches</option>
            <option>10 inches</option>
            <option>11 inches</option>
          </select>
          <br/><br/>

          <span class = "section-title">Phone Number: </span><br/>
          <label class="hint-text">Please don't use letters</label><br/>
          <input v-model="userPhone" placeholder="123-456-7891" id="user-phone" class="phone" /> 
          <div class="error-messages" v-if="phoneError">{{phoneError}}</div><br/>
          <br/>
          
          <span class = "section-title">* Address: </span><br/>
          <input v-model="userStreet" placeholder="Enter bulding number and street" id="user-street" class="address" required />
          <div class="error-messages" v-if="streetError">{{streetError}}</div><br/>
          
          <input v-model="userCity" placeholder="Enter City" id="user-city" class="address" required />
          <div class="error-messages" v-if="cityError">{{cityError}}</div><br/>
          
          <input v-model="userState" placeholder="Enter State" id="user-state" class="address" required/>
          <div class="error-messages" v-if="stateError">{{stateError}}</div><br/>
    
          <input v-model="userZipCode" placeholder="Enter ZipCode" id="user-zipcode" class="address" required/>
          <div class="error-messages" v-if="zipcodeError">{{zipcodeError}}</div><br/>
          <br/>

          <span class = "section-title"> Additional Services: </span><br/>
          <label class="hint-text">Select all that apply to you</label><br/>
          <input type="checkbox" id="email" value="email" v-model="additional">
          <label class = "checkboxText" for="email">Email</label><br/>
          <input type="checkbox" id="phone" value="phone" v-model="additional">
          <label class = "checkboxText" for="phone">Phone</label><br/>
          <input type="checkbox" id="facebook" value="facebook" v-model="additional">
          <label class = "checkboxText" for="facebook">Facebook</label><br/>
          <input type="checkbox" id="tweeter" value="tweeter" v-model="additional">
          <label class = "checkboxText" for="tweeter">Tweeter</label><br/>
          <input type="checkbox" id="surface_mail" value="surface_mail" v-model="additional">
          <label class = "checkboxText" for="surface_mail">Surface Mail</label><br/>
          <input type="checkbox" id="personal_visit" value="personal_visit" v-model="additional">
          <label class = "checkboxText" for="personal_visit">Personal Visit</label><br/>
          <br>  

          <span class = "section-title"> Budget: </span><br/>
          <select v-model="userBudget" id="user-budget" required>
            <option disabled value="">Please select one</option>
            <option>less that 50$</option>
            <option>50$ - 100$</option>
            <option>Over 100$</option>
          </select><br/><br/>
         
          <span class = "section-title">* Email: </span><br/>
          <input v-model="userEmail" placeholder="Enter Email" id="user-email" required/>
          <div class="error-messages" v-if="emailError">{{emailError}}</div><br/>
          <br />
          
          <div class = "terms">
              <input type="checkbox" v-model="terms" required>
              <label class = "checkboxText"> Accept terms and Conditions </label>
              <div class="error-messages" v-if="termsError">{{termsError}}</div><br/>
          </div> 

          
          </h2>
        </div>
      </form>
      
    <div class = "submit">
    <button class="submit-button" v-on:click="submitButton()">Submit</button>
    </div>
    <div class = "reset">
    <button class="clear-button" v-on:click="clearButton()">Clear</button>
    </div>
    <div class="error-messages" v-if="overallError">{{overallError}}</div><br/>
  </h1>
  </div>
</template>

<script>

// @ is an alias to /src
//<label class="form-label">Contact Information: </label><br/><br/>
//<label class="form-label">Additional Information: </label><br/><br/>
/*
          <span> - </span>

          <input v-model="userPhone_2" placeholder="567" id="user-phone_2" class="phone"/>
          <span> - </span>
          <input v-model="userPhone_3" placeholder="891" id="user-phone_3" class="phone"/>

          @keypress = "atPressed"
*/
import { createApp } from 'vue'
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'


export default {
  name: 'Home',
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
       overallError: "",

       maxLength: 10,
 
    }
  },
  methods: {
    async recaptcha() {
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded()

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha('login')

      // Do stuff with the received token.
    },
    setUp: function(){
      this.maxlength = 10;
    },
    termsValidation: function(){
        if(this.terms == false){
          this.termsError = "You cannot continue without accepting the Terms and Conditions!";
          return false;
        }
        this.termsError = "";
        return true;
    },
    atPressed: function(e){
      if(e.key === '-' || e.key ==='(' || e.key === ')'){
      }
    },

    phoneNumberValid: function(){
        if((/[a-zA-Z]/).test(this.userPhone)){
          document.getElementById('user-phone').style.borderColor = 'red';
          this.phoneError = "Phone Number Invalid: You cant use letters!";
          return false;
        }
        for(let i = 0; i < this.userPhone.length; i++){
          if(this.userPhone[i] === '-' ||  this.userPhone[i] ==='(' || this.userPhone[i] === ')'){
            this.maxLength = this.maxLength + 1;
          }
        } 

        if(this.userPhone.length > this.maxLength){
          document.getElementById('user-phone').style.borderColor = 'red';
          this.phoneError = "Phone number Invalid: format is incorrect or the number entered is longer than 11 numbers";
          return false;
        }

        this.phoneError=  "",
        document.getElementById('user-phone').style.borderColor = 'black';
        return true;
    },
    addressValidation: function(){
        var street = this.userStreet;
        var city = this.userCity;
        var state = this.userState;
        var zip = this.userZipCode;
        var invalid = 0;

        if(street.length > 40 || street.length == 0 ){
          document.getElementById('user-street').style.borderColor = 'red';
          this.streetError = street.length > 40 ? 
          "Street address too long, must to be less than 40 characters!" : "You must fill out the street address!";
          invalid = 1;
        }
        if(city.length > 40 || city.length == 0){
          document.getElementById('user-city').style.borderColor = 'red';
          this.cityError = city.length > 40 ? 
          "City input too long, must to be less than 40 characters!" : "You must fill out the City textbox!";
          invalid = 1;
        }
        if(state.length > 40 || state.length == 0){
          document.getElementById('user-state').style.borderColor = 'red';
          this.stateError = state.length > 40 ? 
          "State entry too long, must to be less than 40 characters!" : "You must fill out the State textbox!";
          invalid = 1;
        }
        if((/[a-zA-Z]/).test(this.userZipCode)){
          document.getElementById('user-zipcode').style.borderColor = 'red';
          this.zipcodeError = "The ZipCode cannot contain letter/s!"
        }
        if(zip.length > 5 || zip.length == 0){
          document.getElementById('user-zipcode').style.borderColor = 'red';
          this.zipcodeError = zip.length > 5 ? 
          "ZipCode entry too long, must to be 5 characters!" : "You must fill out the ZipCode textbox!";
          invalid = 1;
        }
        if(invalid == 1){
          return false;
        }
      
        this.streetError = "";
        this.cityError = "";
        this.stateError = "";
        this.zipcodeError = "";

        document.getElementById('user-street').style.borderColor = 'black';
        document.getElementById('user-city').style.borderColor = 'black';
        document.getElementById('user-state').style.borderColor = 'black';
        document.getElementById('user-zipcode').style.borderColor = 'black';
        return true;
        
     },
    firstNameValidation: function(){
      var first = this.firstName;

      this.firstNameError = first == "" ? 
      "You must enter your first name!" : ""

      if(first == ''){
        document.getElementById('firstname').style.borderColor = 'red';
        return false;
      }
      if(first.length > 40){
        document.getElementById('firstname').style.borderColor = 'red';
        return false;
      }
  
      this.firstNameError = "";
      document.getElementById('firstname').style.borderColor = 'black';
      return true; 
    },

    lastNameValidation: function(){
      var last = this.lastName;

      this.lastNameError = last == "" ? 
      "You must enter your last name!" : ""

      if(last == ''){
        document.getElementById('lastName').style.borderColor = 'red';
        return false;
      }
      if(last.length > 40){
        document.getElementById('lastName').style.borderColor = 'red';
        return false;
      }
      this.lastNameError = "";
      document.getElementById('lastName').style.borderColor = 'black';
      return true;
      
    },
    titleValidation: function(){
      this.userTitleError = this.userTitle == "" ? 
      "You must select a title!" : ""

      if(this.userTitle == ''){
        document.getElementById('user-title').style.borderColor = 'red';
        return false;
      }
      else{

        this.userTitleError = "";
        document.getElementById('user-title').style.borderColor = 'grey';
        return true;
      }
    },
    
    emailValidation: function(){

      if(this.userEmail == ''){
        document.getElementById('user-email').style.borderColor = 'red';
        this.emailError = "It is required to enter your email!";
        return false;
      }
      if(this.userEmail.search("@") == -1 || this.userEmail.search(".") == -1){
        document.getElementById('user-email').style.borderColor = 'red';
        this.emailError = "You must enter a valid email!";
        return false;
      }

      this.emailError = "";
      document.getElementById('user-email').style.borderColor = 'black';
        
      return true;
    },
    toResult(){
      this.$router.push({name: 'Result'});
    },
    persist(){
      localStorage.lastName = this.lastName;
      localStorage.firstName = this.firstName;
      localStorage.userTitle = this.userTitle;
      localStorage.userPhone = this.userPhone;

      localStorage.userFeet = this.userFeet;
      localStorage.userInches = this.userInches;

      localStorage.userStreet = this.userStreet;
      localStorage.userCity = this.userCity;
      localStorage.userState = this.userState;
      localStorage.userZipCode = this.userZipCode;

      
      localStorage.additional = this.additional;
      localStorage.userBudget = this.userBudget;
      localStorage.userEmail = this.userEmail;

      this.toResult();
    },
    submitButton: function() {
      var allValid;
      var goAhead = 0;
      allValid = this.firstNameValidation();
      if(allValid == false){
        goAhead = 1;
      }
      allValid = this.lastNameValidation();
      if(allValid == false){
        goAhead = 1;
      }
      allValid = this.titleValidation();
      if(allValid == false){
        goAhead = 1;
      }
      allValid = this.emailValidation();
      if(allValid == false){
        goAhead = 1;
      }
      allValid = this.phoneNumberValid();
      if(allValid == false){
        goAhead = 1;
      }
      allValid = this.addressValidation();
      if(allValid == false){
        goAhead = 1;
      }
      allValid = this.termsValidation();
      if(allValid == false){
        goAhead = 1;
      }

      if(goAhead === 0){
        this.overallError = "";
        this.persist();
      }
      else{
        this.overallError = "You must fix the highlighted fields before continuing!";
      }
    },

    clearButton: function () {
      this.userTitle = "";
      this.lastName = "";
      this.firstName = "";
      this.userEmail = "";
      this.userPhone = "",
      this.userStreet = "",
      this.userCity = "",
      this.userState = "",
      this.userZipCode = "",
      this.userBudget = "",
      this.additional = [],

      this.terms = false,
      this.validEmail = false,

      this.lastNameError = "",
      this.firstNameError = "",
      this.userTitleError = "",
      this.streetError = "",
      this.cityError = "",
      this.stateError = "",
      this.zipcodeError = "",
      this.emailError = "",
      this.termsError = "",
      this.phoneError=  "",
      this.overallError = "",

      document.getElementById('firstname').style.borderColor = 'black';
      document.getElementById('lastName').style.borderColor = 'black';
      document.getElementById('user-title').style.borderColor = 'grey';
      document.getElementById('user-email').style.borderColor = 'black';
      document.getElementById('user-phone').style.borderColor = 'black';
      document.getElementById('user-street').style.borderColor = 'black';
      document.getElementById('user-city').style.borderColor = 'black';
      document.getElementById('user-state').style.borderColor = 'black';
      document.getElementById('user-zipcode').style.borderColor = 'black';
      document.getElementById('user-budget').style.borderColor = 'grey';
    }, 
  },
  components: {
   
  },
  
}
const component = {
  setup() {
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

    const recaptcha = async () => {
      // (optional) Wait until recaptcha has been loaded.
      await recaptchaLoaded();

      // Execute reCAPTCHA with action "login".
      const token = await executeRecaptcha('submit');

      // Do stuff with the received token.
    }

    return {
      recaptcha
    }
  },
  template: '<button @click="recaptcha">Execute recaptcha</button>'
}

createApp(component)
  .use(VueReCaptcha, { siteKey: '6LdHfmAdAAAAADwJXvRV0RHcWYvFd4sgGdfAvG76' })

</script>

<style scoped>
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

/*Input styles*/
input{
  border: 2px solid;
  border-radius: 4px;
  background-color: rgb(250, 248, 248);
  font-size: 14px;
  margin: 0.25rem;
  padding: 5px 10px;
  transition: background-color 0.5s ease-out;
}

input:focus:invalid {
  background: url("https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg") no-repeat 95% 50% lightsalmon;
  background-size: 25px;
}

input[id = 'user-street']{
  width: 375px;
}
input[id = 'user-city']{
  width: 250px;
}
input[class = 'phone']{
  width: 20%;
  text-align: center;
  padding: 3px; 
}
.checkboxText{
  font-size: 80%; 
}
input[id = 'agree']{
  margin-right: 60%;
}
input[type = 'checkbox']{
  cursor: pointer;
}
select {
  border: 2px solid;
  border-radius: 4px;
  border-color: grey;
  background-color: rgb(250, 248, 248);
  font-size: 14px;
  margin: 0.25rem;
  padding: 5px 10px;
  transition: background-color 0.5s ease-out;
}


/*Page style*/
body {
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: #116d5f;
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

/*Class Styles*/
.section-title{
  font-size: 100%;
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

.error-messages{
  font-size: 16px;
  color: rgb(180, 12, 12)
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

</style>
