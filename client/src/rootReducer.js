import {combineReducers} from 'redux';
import {continentReducer}  from "./reducers/continentReducer";
import { countryReducer } from './reducers/countryReducer';

const rootReducer= combineReducers({
    continent:continentReducer,
    country:countryReducer
})

export default rootReducer