import { useState } from 'react'
import Navbar from './Assests/Navbar'
import Home from './Assests/Home'
import About from './Assests/About'
import Services from './Assests/Services'
import Skills from './Assests/Skills'
import Contact from './Assests/Contact'
import Footer from './Assests/Footer'
import Pprojects from './Assests/Pprojects'



function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <Navbar/>
     <Home/>
     <About/>
     <Services/>
     <Pprojects/>
     <Skills/>
     <Contact/>
     <Footer/>
     
     </div>
     
  )
}

export default App
