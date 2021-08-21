import Header from './header'
import Addtodo from './Addtodo'
import reducer from './reducer'
import Login from './Login'


import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const state = {
  userDetails: [],
  userinfo:[]
}

const store = createStore(reducer, state)

const sty = {
  textAlign: 'center', margin: "70px", backgroundColor: "darkgrey", width: "40%", marginLeft: '30%', border: '4px solid black', fontFamily:'"Times New Roman", Times, serif;'
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
  } 
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div style={sty}>
            <Header />
            <Switch>
	    <h1>Tushar todo list </h1>
              <Route exact path='/' component={Login} />
              <Route path='/add' component={Addtodo} />
              {/* <Route path='/lists' component={Addtodo} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}


