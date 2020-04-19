import {
   CHANGE_LOADING,
   CHANGE_INDEX,
   CHANGE_SCORE,
   CHANGE_CITY_TO_FIND,
   CHANGE_CITY_PLACED
} from './actionTypes'

export function setLoading (value) {
   return {
      type: CHANGE_LOADING,
      payload: value
   }
}

export function setScore (value) {
   return {
      type: CHANGE_SCORE,
      payload: value
   }
}

export function setIndex () {
   return {
      type: CHANGE_INDEX
   }
}

export function setCityToFind () {
   return {
      type: CHANGE_CITY_TO_FIND
   }
}

export function setQuestion () {
   return function (dispatch) {
      dispatch(setIndex())
      dispatch(setCityToFind())
   }
}

export function setCityPlaced() {
   return {
      type: CHANGE_CITY_PLACED
   }
}