<template>
  <div class="login-container">
    <div class="login-box">
      <h1>로그인</h1>
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="userId">아이디</label>
          <input type="text" id="userId" v-model="userId" required>
        </div>
        <div class="input-group">
          <label for="password">비밀번호</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit" class="login-button">로그인</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      userId: '',
      password: '',
      // 로그인 성공 여부 예시 (실제로는 서버 API 호출로 변경)

      isLoginSuccess: true,
    };
  },
  methods: {
    login() {
      // 서버 API 호출 후 로그인 여부 확인      
      if (this.userId === 'a' && this.password === 'a') {
        console.log('로그인 성공');
        this.isLoginSuccess = true;
        // 로그인 성공 시 처리:
        // 1. 로그인 상태 변경 (예: localStorage에 저장)
        localStorage.setItem('isLoggedIn', 'true');
        // 2. 라우팅 이동
        this.$router.push('/main');
      } else {
        console.log('로그인 실패');
        this.isLoginSuccess = false;
        // 로그인 실패 시 처리:
        // 1. 에러 메시지 출력
        alert('로그인 정보가 일치하지 않습니다.');
        // 2. input clear
        this.userId = '';
        this.password = '';
      }
    },
  },
};
</script>

<style
 scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.login-box {
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
}

.login-button {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #36986c;
}
</style>
