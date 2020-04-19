import React from 'react';

import Navbar from '../components/Navbar'
import Map from '../components/Map'
import Missions from '../components/Missions'

export default function Main() {

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