import {
    FETCH_CONTINENT_REQUEST,
    FETCH_CONTINENT_SUCCESS,
    FETCH_CONTINENT_FAILURE
  } from '../actions/actionTypes'

  const initialState = {
    loading: false,
    continents: [],
    error: ''
  }

  export const continentReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CONTINENT_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_CONTINENT_SUCCESS:
        return {
          loading: false,
          continents: action.payload,
          error: ''
        }
      case FETCH_CONTINENT_FAILURE:
        return {
          loading: false,
          continents: [],
          error: action.payload
        }
      default: return state
    }
  }