import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import GoogleMapReact from 'google-map-react'
import getDistance from '../helpers'
import mapStyle from '../mapStyle'
import Swal from 'sweetalert2'
import data from '../data'
import redPin from '../assets/pin.png'

import {
   setLoading,
   setScore,
   setQuestion,
   setCityPlaced,
   setCorrect
} from '../store/actionCreator';

import Loading from './Loading'

const AnyReactComponent = () => {
   return <img src={redPin} style={{ width: 10 }} />
}

export default function Map() {
   const dispatch = useDispatch()
   const history = useHistory()

   // state
   const [centerLat, setOriginLat] = useState(54.5260);
   const [centerLng, setOriginLng] = useState(15.2551);
   const [pins, setPins] = useState([]);

   // redux state
   const cityToFindLat = useSelector(state => state.cityToFindLat)
   const cityToFindLng = useSelector(state => state.cityToFindLng)
   const index = useSelector(state => state.index)
   const loading = useSelector(state => state.loading)
   const cityToFindName = useSelector(state => state.cityToFindName)
   // const score = useSelector(state => state.score)
   const correct = useSelector(state => state.correct)
   const cityPlaced = useSelector(state => state.cityPlaced)

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
      try {
         dispatch(setLoading(true))
         dispatch(setCityPlaced(cityPlaced + 1))
         const origin = `${cityToFindLat},${cityToFindLng}`
         const destination = `${lat},${lng}`

         let newPin = { lat, lng }
         setPins([...pins, newPin])


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
         Swal.fire(
            `I'm sorry`,
            `There's some error while measuring the distance, care to play again?`,
            'question'
         )
         // history.push('/')
         dispatch(setLoading(false))
         if (cityPlaced === 0) {
            dispatch(setCityPlaced(0))
         }
         else {
            dispatch(setCityPlaced(cityPlaced - 1))
         }
         if (index === data.cities.length) {
            history.push('/victory')
         }
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
               {/* {
                  pins.map((pin, index) => {
                     <AnyReactComponent
                        key={index}
                        lat={pin.lat}
                        lng={pin.lng}
                     />
                  })
               } */}
               <AnyReactComponent 
                  lat={centerLat}
                  lng={centerLng}
               />
            </GoogleMapReact>

         </div>
      </>
   )
}