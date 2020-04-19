import React from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import lose from '../assets/gameov.png'
import { resetRedux } from '../store/actionCreator';


export default function Lose() {
   const dispatch = useDispatch()
   const history = useHistory()

   const cityPlaced = useSelector(state => state.cityPlaced)
   const correct = useSelector(state => state.correct)

   const playAgain = () => {
      dispatch(resetRedux())
      history.push('/')
   }

   return (
      <>
         <div id="end">
            <div className="container" style={{ marginTop: '10vh' }}>
               <div className="row space" onClick={playAgain}>
                  {/* <div className="col"> */}
                  <img
                     src={lose}
                     style={{
                        width: 400
                     }}
                  />
               </div>
               <div className="row space" style={{ marginTop: 50 }}>
                  <div className='end-game text-center'>
                     <h3>city pinned: {cityPlaced}</h3>
                     <h3>correct cities: {correct}</h3>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}