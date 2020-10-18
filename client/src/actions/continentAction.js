import axios from 'axios'
import {
  FETCH_CONTINENT_REQUEST,
  FETCH_CONTINENT_SUCCESS,
  FETCH_CONTINENT_FAILURE
} from './actionTypes'

export const fetchContinents = () => 
    async dispatch => {
        try {
            dispatch(fetchContinentsRequest())
           //getting the continent list
            const response=await axios.get('/api/continent')
             const continents = response.data.continents
             //confirm the success of the fetching
             dispatch(fetchContinentsSuccess(continents))   
        } catch (error) {
           // error.message is the error message
           console.log(error.message)
          dispatch(fetchContinentsFailure(error.message)) 
        }
    }
  
  export const fetchContinentsRequest = () => {
    return {
      type: FETCH_CONTINENT_REQUEST
    }
  }
  
  export const fetchContinentsSuccess = continents => {
    return {
      type: FETCH_CONTINENT_SUCCESS,
      payload: continents
    }
  }
  
  export const fetchContinentsFailure = error => {
    return {
      type: FETCH_CONTINENT_FAILURE,
      payload: error
    }
  }
