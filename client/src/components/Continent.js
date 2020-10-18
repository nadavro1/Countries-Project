import React, { Fragment, useEffect } from 'react'
import {Link} from "react-router-dom"
import Spinner from './spinner.js' 
import { connect } from 'react-redux'
import { fetchContinents } from '../actions/continentAction.js';

function Continent({fetchContinents,loading,continentsData,error}) {
    useEffect(() => {//getting continents data
        fetchContinents()
      }, [fetchContinents])
    //   if finished loading - will display the continents
    return loading? <Spinner/>: error? (<h2>error</h2>):
        <Fragment>
            {continentsData &&
                <table>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Continent name</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                    {continentsData.map(continent=>
                        <tr key={continent.code}>
                            <td><Link to={`/${continent.name}`}>{continent.code}</Link></td>
                            <td><Link to={`/${continent.name}`}>{continent.name}</Link></td>
                        </tr>
                    )}
                    
                    </tbody>
                </table>
            }
            
        </Fragment>
}

const mapStateToProps = state => {
    return {
      continentsData: state.continent.continents,
      loading:state.continent.loading,
      error:state.continent.error
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchContinents: () => dispatch(fetchContinents())
    }
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Continent)

