define('page/user/signup', ['react', 'component/signup/index'], function (React, SignupForm) {
    React.render(
      <SignupForm type="signup" typeDes="注册" welcomeTitle="欢迎注册"/>,
      document.querySelector('.J-main-container')
    );
});
