import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import GoogleMapReact from 'google-map-react'
import getDistance from '../helpers'
import mapStyle from '../mapStyle'
import Swal from 'sweetalert2'
import data from '../data'

import {
   setLoading,
   setScore,
   setQuestion,
   setCityPlaced,
   setCorrect
} from '../store/actionCreator';

import Loading from './Loading'

export default function Map() {
   const dispatch = useDispatch()
   const history = useHistory()

   // state
   const [centerLat, setOriginLat] = useState(54.5260);
   const [centerLng, setOriginLng] = useState(15.2551);

   // redux state
   const cityToFindLat = useSelector(state => state.cityToFindLat)
   const cityToFindLng = useSelector(state => state.cityToFindLng)
   const index = useSelector(state => state.index)
   const loading = useSelector(state => state.loading)
   const cityToFindName = useSelector(state => state.cityToFindName)
   const score = useSelector(state => state.score)
   const correct = useSelector(state => state.correct)

   // map style
   const createMapOptions = () => {
      return {
         panControl: false,
         mapTypeControl: false,
         scrollwheel: true,
         styles: mapStyle
      }
   }

   const getPosition = async ({ lat, lng }) => {
      dispatch(setLoading(true))
      dispatch(setCityPlaced())
      try {
         const origin = `${cityToFindLat},${cityToFindLng}`
         const destination = `${lat},${lng}`

         const { data } = await getDistance(origin, destination)
         
         const distance = Math.ceil((data.rows[0].elements[0].distance.value) / 1000)

         console.log(distance, `ini distancceeeeeeeeeee`);

         if (distance <= 50) {
            Swal.fire(
               'Correct!',
               `distance from the actual coordinate: ${distance} km`,
               'success'
            )
            dispatch(setCorrect(correct + 1))
            dispatch(setScore(distance))
            dispatch(setLoading(false))
            dispatch(setQuestion())
         }
         else {
            dispatch(setScore(distance))
            dispatch(setLoading(false))

            Swal.fire({
               icon: 'error',
               title: `Oops, that's not ${cityToFindName}`,
               text: `distance from the actual coordinate: ${distance} km`,
            })
         }
      }
      catch (error) {
         console.log(error);
         Swal.fire(
            `I'm sorry`,
            `There's some error while measuring the distance, care to play again?`,
            'question'
          )
         history.push('/')
      }
   }



   if (loading) {
      return (
         <>
            <Loading />
         </>
      )
   }

   if (index === data.cities.length) {
      history.push('/victory')
   }

   return (
      <>
         <div id='map'>
            <GoogleMapReact
               bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
               options={createMapOptions}
               defaultCenter={
                  {
                     lat: centerLat,
                     lng: centerLng
                  }
               }
               defaultZoom={3}
               onClick={getPosition}
            >
               {/* TARUH PIN NANTI */}
            </GoogleMapReact>

         </div>
      </>
   )
}