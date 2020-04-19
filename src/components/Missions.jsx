import React from 'react';

export default function Missions() {

   return (
      <>
         <div className="container space">
            <div id="missions" style={{ marginTop: 20 }}>
               <div className="row space">
                  <div className="mission-item bg-dark shadow text-center">
                     <p className='mission-text'><strong>1500</strong> Kilometers left</p>
                  </div>
                  <div className="mission-item bg-dark shadow text-center">
                     <p className='mission-text'><strong>0</strong> cities placed</p>
                  </div>
                  <div className="mission-item bg-dark shadow text-center">
                     <p className='mission-text'>Find: <strong>Amsterdam</strong></p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}