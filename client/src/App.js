import React from 'react'
import {Fragment} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import store from './store'
import './App.css';
import Country from './components/Country'
import Continent from './components/Continent'
function App() {
    return(
        <Provider store={store}>
            <Router>
                <Fragment>
                <section className="landing">
                    <div className="dark-overlay">
                        <div className="landing-inner">
                             <h1 className="x-large">Countries Project</h1>
                            <Switch>
                                <Route exact path='/' component={Continent}/>
                                <Route exact path='/:name' component={Country}/>
                            </Switch>
                        </div>
                    </div>
                </section>
                </Fragment>
            </Router>
        </Provider>
    )
}
export default App;