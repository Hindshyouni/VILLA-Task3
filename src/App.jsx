
import './App.css'
import { Navbar } from './Component/Navbar/Navbar'
import {Feauterd} from './Component/Feauterd/Feauterd'
import {Deal}  from './Component/Deal/Deal'
import Properties from './Component/Properties/Properties'
import Video from './Component/Video/Video'
import Map from './Component/Map/Map'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'


function App() {
  

  return (
    <>
     <Navbar/>
     <Header />
     <Feauterd/>
     <Video/>
     <Deal/>
     <Properties/>
     <Map />
     <Footer />

    </>
  )
}

export default App
