<template>

<div class="container">

  <h3>Register</h3>
  <div></div>

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
  </div>
  <button v-on:click="register" type="submit" class="btn btn-primary">Register</button>
</form>

</div>

</template>


<script>
import firebase from 'firebase';
export default {
  name:'register',
  data: function () {
    return {
      email: '',
      password: ''
    };
  },
  methods:{
    register: function(e) {
      //console.log('test');
    firebase
       .auth()
       .createUserWithEmailAndPassword(this.email, this.password)
       .then(user =>{
         alert(`Account created for ${this.email}`);
         this.$router.go({path : this.$router.path});
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
