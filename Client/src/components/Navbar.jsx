import './Navbar.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/logo.png'

function LoggedIn() {
  return (
    <div>
      <Link to='/'><button>Logout</button></Link>
    </div>
  );
}

function LoggedOut() {
  return (
    <div>
      <Link to='/login'><button>Login</button></Link>
    </div>
  );
}

function Navbar() {
  const islogged = useSelector(state => state.islogged);
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="nav_elements">
        <Link to='/' className="navlink">Home</Link>
        <Link to='/chat' className="navlink">Chat</Link>
        <Link to='/terms' className="navlink">Terms</Link>
        <Link to='/about' className="navlink">About</Link>
      </div>
      {
        islogged ? <LoggedIn /> : <LoggedOut />
      }
    </div>
  )
}

export default Navbar
