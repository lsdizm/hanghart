<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  // 로그인 여부 예시 (실제로는 상태 관리 라이브러리 사용 권장)
  data() {
    return {
      isLoggedIn: false, // 실제로는 localStorage 등에서 가져와야 함      
    };
  },
  created() {
    // 로그인 여부 확인하여 라우팅
    if (!this.isLoggedIn) {
      this.$router.push('/login');
    } else {
      this.$router.push('/main');
    }
  },
};
</script>
