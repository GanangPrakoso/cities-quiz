import React from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import Navbar from '../components/Navbar'
import Map from '../components/Map'
import Missions from '../components/Missions'

export default function Main() {
   const history = useHistory();

   // state
   const score = useSelector(state => state.score)

   if (score <= 0) { //nanti ganti!
      history.push('/gameover')
   }

   return (
      <>
         <div id="main" style={{ height: '100vh' }}>
            <Navbar />
            {/* <Score /> */}
            <Missions />
            <Map />
         </div>
      </>
   )
}