<template>
  <div class="container">

    <h3></h3>
 
  <div class="panel panel-drfault">
    <div class="panel body">
      <form id="form" class="form-inline" v-on:submit.prevent="addBook">
        <div class="form-group">
          <label for="date">Date:</label>
          <input type="date" id="date" class="form-control" v-model="newRecords.date">
        </div>
        <div class="form-group">
          <label for="miles">Total miles:</label>
          <input type="number" pattern="[0-9]*" id="miles" class="form-control" v-model="newRecords.miles">
        </div>
        <div class="form-group">
          <label for="gallons">Gallon:</label>
          <input type="number" id="gallons" class="form-control" v-model="newRecords.gallons">
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" id="price" class="form-control" v-model="newRecords.price">
        </div>
        <input type="submit" class="btn btn-primary" value="Add">
      </form>
    </div>
  </div>

  <div class="panel panel-default">
      <table class="table table-striped">
        <thead>
          <tr>
           <th>
            Date
           </th>
           <th>
            Miles
           </th>
           <th>
            Gallons
           </th>
           <th>
            price
           </th>
           <th>
            Delete
           </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books">
            <td>
              {{book.date}}
            </td>
            <td>
              {{book.miles}}
            </td>
            <td>
              {{book.gallons}}
            </td>
            <td>
              {{book.price}}
            </td>
            <td>
              <span class="glyphicon glyphicon-trash" v-on:click="removeBook(book)"></span>
            </td>
          </tr>
        </tbody>
      </table>
  </div>

  </div>
</template>

<script>
import Firebase from 'firebase'

import toastr from 'toastr'

var config = {
    apiKey: "AIzaSyDsanLnUec8kfArWpE_wqOiwbv0-e5N07U",
    authDomain: "vuejs-firebase-01-793f1.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-01-793f1.firebaseio.com",
    projectId: "vuejs-firebase-01-793f1",
    storageBucket: "vuejs-firebase-01-793f1.appspot.com",
    messagingSenderId: "868654287155"
  };

  let app = Firebase.initializeApp(config);
  let db = app.database();

  let recordsRef = db.ref('books');

export default {
  name: 'home',
  firebase:{
  books: recordsRef
  },
  data (){
      return {
        newRecords: {
          date: '',
          miles: '',
          gallons: '',
          price: ''
        }
      }
  },
  methods: {
    addBook: function(){
      recordsRef.push(this.newRecords);
      this.newRecords.date = '';
      this.newRecords.miles = '';
      this.newRecords.gallons = '';
      this.newRecords.price = '';
    },
    removeBook: function(book){
      recordsRef.child(book['.key']).remove();
      toastr.success("Record removed!!")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
