import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { setScore, setIndex, setQuestion, resetRedux } from '../store/actionCreator';


import Navbar from '../components/Navbar'
import Map from '../components/Map'
import Missions from '../components/Missions'

export default function Main() {
   const dispatch = useDispatch()
   const history = useHistory();

   // state
   const score = useSelector(state => state.score)

   useEffect(() => {
      dispatch(resetRedux())
   }, []);

   if (score <= 0) {
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