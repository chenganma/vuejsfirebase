<template>

<div id="login" class="container">

  <h3>Welcome to my World !!</h3>

  <table>
    <tr><td>
    User Name: <input class="formtext" type="text"><br> Passwords: <input class="formtext" type="text">
    </td></tr>
  
  <tr><td>
    <button type="button" class="btn btn-primary btn-xs">login</button>
    <button type="button" class="btn btn-xs">reset</button>

  </td></tr>

  <tr><td>
    
    <a href="#">find my passwords</a>

  </td></tr>

  </table>

</div>

</template>


<script>
export default {
  name:'Login',
  data () {
    return {
  
    }
  }
}

</script>
