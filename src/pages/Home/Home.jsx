import React from 'react'
import { Outlet } from 'react-router-dom'
import CardComponent from '../../Component/CardComponent/CardComponent'
import { Deal } from '../../Component/Deal/Deal'
import { Feauterd } from '../../Component/Feauterd/Feauterd'


import Header from '../../Component/Header/Header'
import Map from '../../Component/Map/Map'
import Properties from '../../Component/Properties/Properties'
import Video from '../../Component/Video/Video'
import './Home.css'

const Home = () => {
  return (
    <>
    <Header />
    <Feauterd/>
    <Video/>
    <Deal/>
    <CardComponent cardCount={6} />
    <Map />
    <Outlet/>
    </>
  )
}

export default Home