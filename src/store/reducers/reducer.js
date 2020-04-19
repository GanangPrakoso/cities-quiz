import {
   CHANGE_CITY_TO_FIND,
   CHANGE_LOADING,
   CHANGE_INDEX,
   CHANGE_SCORE,
   CHANGE_CITY_PLACED
} from '../actionTypes'
import data from '../../data'

const initialState = {
   loading: false,
   index: 0,
   cityToFindName: data.cities[0].name,
   score: 1500,
   cityPlaced: 0,
   cityToFindLat: data.cities[0].position.lat,
   cityToFindLng: data.cities[0].position.lng
}

export default function reducer(state = initialState, action) {
   switch (action.type) {
      case CHANGE_LOADING: {
         return { ...state, loading: action.payload }
      }
      case CHANGE_INDEX: {
         return { ...state, index: state.index + 1 }
      }
      case CHANGE_CITY_TO_FIND: {
         return {
            ...state,
            cityToFindName: data.cities[state.index].name,
            cityToFindLat: data.cities[state.index].position.lat,
            cityToFindLng: data.cities[state.index].position.lng
         }
      }
      case CHANGE_SCORE: {
         return {...state, score: state.score - action.payload}
      }

      case CHANGE_CITY_PLACED: {
         return {...state, cityPlaced: state.cityPlaced + 1}
      }
      default:
         return state
   }
}