import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './assets/pages/Home'

const App = ()=>{
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
