import './App.css'
import Footer from './components/Footer'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Chat from './pages/Chat'
import Terms from './pages/Terms'
import About from './pages/About'


function App() {
  
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Chat' element={<Chat />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
