define('component/signup/index', ['react'], function (React) {
    //require('./base.css');

    var SignupForm = React.createClass({
      render: function() {
        var rememberMe;
        if (this.props.type === 'signup') {
            rememberMe = (<div className="checkbox">
              <label>
                <input type="checkbox" value="remember-me"/>记住我
              </label>
            </div>)
        }
        return (
          <form className="form-signin">
            <h2 className="form-signin-heading">{this.props.welcomeTitle}</h2>
            <label for="inputEmail" className="sr-only">用户名</label>
            <input type="number" id="inputEmail" className="form-control" placeholder="手机号" required autofocus/>
            <label for="inputPassword" className="sr-only">密码</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="密码" required/>
            {rememberMe}
            <button className="btn btn-lg btn-primary btn-block" type="submit">{this.props.typeDes}</button>
          </form>
        );
      }
    });
    return SignupForm;
});
