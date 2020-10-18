import {
    FETCH_COUNTRY_REQUEST,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_FAILURE
  } from '../actions/actionTypes'

  const initialState = {
    loading: false,
    countries: [],
    error: ''
  }

  export const countryReducer = (state = initialState, action) =>{
      switch(action.type){
          case FETCH_COUNTRY_REQUEST:
              return{
                  ...state,
                  loading:true
              }
          case  FETCH_COUNTRY_SUCCESS:
              return{
                  loading:false,
                  countries:action.payload,
                  error:''
              }
          case FETCH_COUNTRY_FAILURE:
              return{
                  loading:false,
                  countries:[],
                  error:action.payload
              }
          default:
              return state
      }
  }