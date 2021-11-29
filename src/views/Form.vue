/* eslint-disable */

<template>
  <h1>
    {{ title }}
    <br />
    {{ studentName }}
    <br />
    {{ titleEnding }}
    <h2>
      <div id="v-model-select" class="demo">
        <span>Last name: </span>
        <input v-model="lastName" placeholder="Enter Last Name" />
        <br />
        <span>First Name: </span>
        <input v-model="firstName" placeholder="Enter First Name" />
        <br />
        <br />
        <span>Chose preferred title:</span>
        <br />
        <select v-model="userTitle">
          <option disabled value="">Please select one</option>
          <option>Student</option>
          <option>Professor</option>
          <option>Retired</option>
          <option>Staff</option>
          <option>None</option>
        </select>
      </div>
    </h2>
    <button class="submit-button" v-on:click="submitButton('button pressed')">
      Submit
    </button>
    <button class="clear-button" v-on:click="clearButton()">Clear</button>
  </h1>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      studentName: "Bhagdeep Sandhu",
      title: "CSC 642 848 Fall 2021 Individual Assignment",
      titleEnding: "Data survey form",
      userTitle: "",
      lastName: "",
      firstName: "",
    };
  },
  methods: {
    submitButton: function (message) {
      alert(message);
    },
    clearButton: function () {
      userTitle = "";
      lastName = "";
      firstName = "";
    },
  },

  /*computed: {
    charactersLeft() {
        var char = this.studentName,
            limit = 140;

        return (limit - char) + " / " + limit + "characters remaining";
      }
  }*/
};
</script>

<style scoped>

</style>
