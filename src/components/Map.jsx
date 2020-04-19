import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import getDistance from '../helpers'
import mapStyle from '../mapStyle'

export default function Map() {
   const [centerLat, setOriginLat] = useState(54.5260);
   const [centerLng, setOriginLng] = useState(15.2551);

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
         const origin = `${centerLat},${centerLng}`
         const destination = `${lat},${lng}`

         const { data } = await getDistance(origin, destination)
         const distance = data.rows[0].elements[0].distance.value
         console.log(distance);
      } 
      catch (error) {
         console.log(error);
      }

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

            </GoogleMapReact>
         </div>
      </>
   )
}