import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register';

function App() {
  

  return (
    <div className='text-black h-[100vh] flex justify-center items-center bg-cover'  style={{"backgroundImage":"url('../src/assets/wallhaven-8586my_1600x900.png')"}}>
    <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register />} />
    </Routes>
    </div>
  )
}

export default App;
