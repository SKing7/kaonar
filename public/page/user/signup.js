
var React = require('react');
var $ = require('jquery');
var SignupForm = require('component/signup/index');

React.render(
  <SignupForm type="signup" typeDes="注册" welcomeTitle="欢迎注册"/>,
  document.querySelector('.J-main-container')
);
