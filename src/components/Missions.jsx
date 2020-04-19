import React from 'react';
import { useSelector } from 'react-redux'

export default function Missions() {
   const cityToFindName = useSelector(state => state.cityToFindName)
   const score = useSelector(state => state.score)
   const cityPlaced = useSelector(state => state.cityPlaced)

   return (
      <>
         <div className="container space">
            <div id="missions" style={{ marginTop: 20 }}>
               <div className="row space">
                  <div className="mission-item bg-dark shadow text-center">
                     <p className='mission-text'><strong>{score}</strong> Kilometers left</p>
                  </div>
                  <div className="mission-item bg-dark shadow text-center">
                     <p className='mission-text'><strong>{cityPlaced}</strong> cities placed</p>
                  </div>
                  <div className="mission-item bg-dark shadow text-center">
                     <p className='mission-text'>Find: <strong>{cityToFindName}</strong></p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}