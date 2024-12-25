import {Routes ,Route} from 'react-router-dom'
import Home from './pages/home';
import Userlogin from './pages/Userlogin';
import Usersignup from './pages/Usersignup';
import Captainlogin from './pages/Captainlogin';
const App = () =>{
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Userlogin/>}/>
      <Route path='/signup' element={<Usersignup/>}/>
      <Route path='/captain-login' element={<Captainlogin/>}/>
      <Route path='/captain-signup' element={<Usersignup/>}/>
      </Routes> 
    </div>
  )
}

export default App;