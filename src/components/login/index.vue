<template>
  <section>
    <div class="login_body">
      <div>
        <input type="text" class="login_text" placeholder="账户名/手机号/email" />
      </div>
      <div>
        <input type="password" class="login_text" placeholder="密码" />
      </div>
      <div class="login_btn">
        <input type="submit" value="登 录" />
      </div>
      <div class="login_link">
        <a href="#">立即注册</a>
        <a href="#">找回密码</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "login",
};
</script>

<style scoped>
.login_body {
  margin-top: 55px;
  width: 100%;
}

.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 5px;
  outline: none;
  padding: 0 5px;
}

.login_body .login_btn {
  height: 45px;
  margin: 10px;
}

.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: #fff;
  font-size: 18px;
}

.login_body .login_link {
  display: flex;
  justify-content: space-between;
}

.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
</style>
