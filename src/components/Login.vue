<template>

<div class="container">

  <h3>Login</h3>

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" class="form-control" id="email" placeholder="Enter email" v-model="email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
  </div>
  <button v-on:click="login" type="submit" class="btn btn-primary">Login</button>
</form>

</div>

</template>


<script>
import firebase from 'firebase';

export default {
  name:'login',
  data: function () {
    return {
      email: '',
      password: ''
    };
  },
  methods:{
    login: function(e) {
      //console.log('test');
    firebase
       .auth()
       .signInWithEmailAndPassword(this.email, this.password)
       .then(user =>{
         alert(`You are logged in as ${this.email}`);
         this.$router.go({path : this.$router.path});
         console.log(this.$router.path);
       },
       err =>{
         alert(err.message);
       }
       );
      e.preventDefault();
    }
  }
};

</script>
