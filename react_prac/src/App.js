import React from 'react'
// import Dummy from './hooks'
import Practice3 from './practice.js/practice3'
// import Dummy from './practice.js/hooks'



import { createStore } from 'redux'     // store here 
import Reducer from './redux/reducer' // altering data from another file 
import { Provider } from 'react-redux' // injecting from here 
import Dashboard from './redux/Dashboard' 



const initialState  ={
    userDetails :[],
    userComments :[]
}
const store = createStore( Reducer , initialState )

export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Provider store ={store} >
            <div>
                <Dashboard/>
                
            </div>
            </Provider>
        )
    }
}