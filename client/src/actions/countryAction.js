import Axios from 'axios';
import {
    FETCH_COUNTRY_REQUEST,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_FAILURE
} from './actionTypes'
//get the countries data from specific continent
export const fetchCountries= conName=>
    async dispatch =>{
        try {
            dispatch(CountriesRequest());
            const response= await Axios.get(`/api/country/${conName}`);
            if (!response) {
                CountriesFailure('Countries not found')
            }
            let countries = response.data
            dispatch(CountriesSuccess(countries))
        } catch (error) {
            console.log(error.message);
            CountriesFailure(error.message);
        }
    }

//request to load the countries
export const CountriesRequest = ()=>{
    return {
        type: FETCH_COUNTRY_REQUEST
      }
}
//failed to load countries
export const CountriesFailure = error=>{
    return {
        type: FETCH_COUNTRY_FAILURE,
        payload: error
      }
}
//success in loading countries and dispatch to update the state
export const CountriesSuccess = continents=>{
    return {
        type: FETCH_COUNTRY_SUCCESS,
        payload: continents
      }
}