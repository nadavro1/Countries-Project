import React, { Fragment, useEffect } from 'react'
import {Link} from "react-router-dom"
import Spinner from './spinner.js' 
import { connect } from 'react-redux'
import { fetchCountries } from '../actions/countryAction.js'
import Card from "react-bootstrap/Card";
import {Row,Col} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Country({match,countriesData,loading,error,fetchCountries}) {
    useEffect(() => {//getting countries data
        fetchCountries(match.params.name)
    }, [fetchCountries,match.params.name])
    return loading? <Spinner/>: error? (<h2>error</h2>):
        <Fragment>
            <Link to="/" className="btn btn-primary goBack"
            ><i className="fas fa-user-circle text-primary"></i> Go Back to continents</Link >
            {countriesData &&
                    countriesData.map(country=>
                        <Row key={country.alpha3Code}>
                            <Col>
                                <Card style={{ width: '45rem', marginBottom: '20px' }} bg={'info'}>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={8}>
                                                <Card.Subtitle className="mb-2 text-muted">{country.alpha3Code}</Card.Subtitle>
                                                <Card.Title>{country.name}</Card.Title>
                                                <Card.Text><b>Phone: </b>{country.callingCodes[0]}</Card.Text>
                                                <Card.Text><b>Capital: </b>{country.capital}</Card.Text>
                                                <Card.Text><b>Currency: </b>{country.currencies[0].name}</Card.Text>
                                                <Card.Text><b>Languages:</b>
                                                {country.languages.map((lang,index)=>
                                                   <li key={index}>{lang.name}</li> 
                                                )}
                                                </Card.Text>
                                            </Col>
                                            <Col sm={4}>
                                                <Card.Img variant="right" src={`https://www.countryflags.io/${country.alpha2Code}/shiny/64.png`} alt="Flag" onError={(e)=>{e.target.onerror = null; e.target.src="https://www.countryflags.io/IL/shiny/64.png"}}/>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}
        </Fragment>
}

const mapStateToProps= state=>{
    return{
        countriesData: state.country.countries,
        loading: state.country.loading,
        error: state.country.error
    }
}


export default connect(
    mapStateToProps,
    {fetchCountries}
  )(Country)