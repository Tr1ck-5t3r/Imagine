import './Login.css'
import logo from '../assets/logo.png'
import logins from '../assets/login.png'

function login() {
  return (
    <div className="login_component">
        <div className="login">
            <div className="login_left">
                <p className="login_title">Welcome back!</p>
                <p className="login_desc">ReImagine your limits with Imagine</p>
                <form className="login_form">
                    <div className="input-group">
                        <input className="input-form" type="text" required=""/>
                        <label>Username</label>
                    </div>
                    <div className="input-group">
                        <input className="input-form" type="password" required=""/>
                        <label>Password</label>
                    </div>
                    <p>
                        You are agreeing to our <span className="terms">Terms and Services
                        </span><br/>by signing in.
                    </p>
                    <button>Login</button>
                </form>
            </div>
            <div className="login_right">
                  <div className="login_logo_align">
                      <img className="login_logo" src={logo} alt="logo"/>
                  </div>
                  <img className="login_img" src={logins} alt="login" />
            </div>
        </div>
    </div>
  )
}

export default login
