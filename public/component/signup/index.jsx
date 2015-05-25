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
              <form className="form-signin"  onSubmit={this.handleSubmit}>
                <h2 className="form-signin-heading">{this.props.welcomeTitle}</h2>
                <label for="inputName" className="sr-only">用户名</label>
                <input type="number" id="inputName" onChange={this.onPhoneChange}  className="form-control" placeholder="手机号" required autofocus value={this.state.phone}/>
                <label for="inputPassword" className="sr-only">密码</label>
                <input type="password" id="inputPassword" onChange={this.onPwdChange} className="form-control" placeholder="密码" required value={this.state.pwd}/>
                {rememberMe}
                <button className="btn btn-lg btn-primary btn-block" type="submit">{this.props.typeDes}</button>
              </form>
            );
        },
        getInitialState: function() {
            return {phone: 'a', pwd: ''};
        },
        onPhoneChange: function(e) {
            this.setState({phone: e.target.value});
        },
        onPwdChange: function(e) {
            this.setState({pwd: e.target.value});
        },
        handleSubmit: function(e) {
            e.preventDefault();
            $.ajax('/api/abc');
        },
    });
    return SignupForm;
});
