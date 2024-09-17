
import './App.css'
import { Navbar } from './Component/Navbar/Navbar'
import {Feauterd} from './Component/Feauterd/Feauterd'
import {Deal}  from './Component/Deal/Deal'
import Properties from './Component/Properties/Properties'
import Video from './Component/Video/Video'
import Map from './Component/Map/Map'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Property from './pages/Property/Property'
import Contact from './pages/Contact/Contact'
import Propertys from './pages/Propertys/Propertys'
import { Navigate } from 'react-router-dom';




function App() {
  

  return (
    <>

   <Navbar/> 
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="property" element={<Property />} />
        <Route path="contact" element={<Contact />} />
        <Route path="propertys" element={<Propertys />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
     
     
     <Footer />

    </>
  )
}

export default App
