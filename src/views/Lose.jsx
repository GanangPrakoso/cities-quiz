import React from 'react';
import { useSelector } from 'react-redux'
import lose from '../assets/gameov.png'

export default function Lose() {
   const cityPlaced = useSelector(state => state.cityPlaced)

   return (
      <>
         <div className="container">
            <div id="lose">
               <img src={lose} alt="" />
            </div>
         </div>
      </>
   )
}