<template>
  <div class="parent">
    <div class="login-container"><img class="logo" src="../assets/logo.png" alt="logo" srcset=""
    />
      <div>
        <h4>Welcome to postIt!</h4>
      </div>
      <div>
        <h4>
          <a href="#">Create an Account</a>
        </h4>
      </div>
      <div>
        <h4>Or</h4>
      </div>
      <div class="login-form">
        <h3>Please log in</h3>
       <form @submit.prevent>
          <div>
          <input type="text" name="email" placeholder="Email">
        </div>
        <div>
          <input type="password" name="password" placeholder="Password">
        </div>
        <div>
          <button class="button"><router-link to="/">Log in</router-link></button>
        </div>
        <div>
          <small>
            <a href="#">Forgot password?</a>
          </small>
        </div>
       </form>

      </div>
    </div>
 </div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>

a {
  color: #40c4ff;
}

.parent {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 
  
}

.login-container {
  margin-top: 5vh;
  min-width: 25%;
  width: 40%;
  padding: 25px 45px 45px 10px;
  background-color: #f8f9fa;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  text-align: center;
}

.login-container img{
  width: 80px;
  float: left;
}

.login-container h4{
  margin-top: 50px;
}

.login-container form div > input {
  padding: 8px 16px;
  margin: 4px 0;
}
.login-form input {
  margin: 10px 0;
}

button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}
.container{
  background-color: #0277bd;
}

</style>