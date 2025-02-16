import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import ContextProvider from './context/ContextProvider'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {

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
