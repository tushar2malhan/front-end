import React from 'react'
import Header from './Header'
import Mounting from './mouting'
import Updating from './updating'
import Unmounting from './unmounting'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default class Routing extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {

        return (
            <div style={{ textAlign: "center" }}>
               <div>
                    <BrowserRouter>
                        <Header/>
                        <Switch>
                            <Route path="/mounting" component={Mounting} />
                            <Route path="/Updating" component={Updating} />
                            <Route path="/Unmounting" component={Unmounting} />
                        </Switch>
                    </BrowserRouter>
                </div>

            </div>
        )
    }
}

// Mounting
// Updating
// Unmounting
