import React from 'react';
import loadingGif from '../assets/loading.gif'

export default function Loading() {

   return (
      <>
         <div id="loading">
            <img
               // src='https://cdn.dribbble.com/users/22930/screenshots/1919115/line-art-map_2.gif'
               src={loadingGif}
               style={{ width: 300 }}
            />
         </div>
      </>
   )
}