import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { resetRedux } from '../store/actionCreator';

import logo from '../assets/logo.gif'


export default function LandingPage() {
   const dispatch = useDispatch()
   const history = useHistory();

   useEffect(() => {
      dispatch(resetRedux())
   }, []);

   const playAgain = () => {
      dispatch(resetRedux())
      history.push('/play')
   }

   return (
      <>
         <div id="home" className='d-flex align-items-center'>
            <div className="container">
               <div className="row space">
                  <div className='row d-flex align-items-center'>
                     <img src={logo} style={{ width: 150 }} />
                     <h1
                        style={{ color: 'white', fontFamily: "'Chewy', cursive", fontSize: 50 }}
                     >
                        Cities Quiz
                     </h1>
                  </div>
               </div>
               <div className="row d-flex justify-content-center">
                  <div className="row d-flex justify-content-center ml-3">
                     <button
                        type="button"
                        className="btn btn-danger mx-3"
                        style={{ width: 100 }}
                        onClick={playAgain}
                     >
                        Play
                     </button>
                     <button
                        type="button"
                        className="btn btn-outline-info mx-3"
                        style={{ width: 150 }}
                        data-toggle="modal"
                        data-target="#exampleModal"
                     >
                        How to play
                     </button>
                  </div>
               </div>
            </div>
         </div>

          {/* Modal  */}
          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">How to play</h5>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div className="modal-body">
                     <p>1. In order to win you must select the city you assigned to find</p>
                     <p>2. You are considered correct and can move to other city if you select the place between 50 km radius from assigned city</p>
                     <p>3. After placing pin on the map you're remaining kilometers will be reduced according the distance between assigned city and you're actual pin</p>
                     <p>4. You're considered lose if you're remaining kilometers is below 0 kilometer</p>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-primary" data-dismiss="modal">Ok, i got it!</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}