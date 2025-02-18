import { BrowserRouter, Route, Routes} from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import ContextProvider from './context/ContextProvider'
import Team from './components/Team'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },4000)

    
  },[])

  if(loading){
    return (
      <div className='absolute h-screen w-full bg-black text-white flex flex-col items-center justify-center'>
      <p>Loading</p>
      </div>
    )
  }
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
