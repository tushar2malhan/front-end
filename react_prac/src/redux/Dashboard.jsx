import React from 'react'

import Usermanager from './usermanager'  // connecting from other file 
import Comment from './commentmanager'
import { connect } from 'react-redux'
import axios from 'axios'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


const mapDispatchToProps = dispatch => {
    return {
        initialUser: (val) => { dispatch({ type: 'ADD_USER', payload: val }) },
        initialComment: (val) => { dispatch({ type: 'ADD_comments', payload: val }) }
    }
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const { initialUser, initialComment } = this.props                                     //  = this.props = because we created the dispatch here 
        axios('https://jsonplaceholder.typicode.com/users').then(e => {                         // and in class based components , we use this.props not in function based components 
            initialUser(e.data)
        })
        axios('https://jsonplaceholder.typicode.com/comments').then(e => {
            initialComment(e.data)
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div >
                    <div style ={{display:'inline-flex'}}> <br />
                        <div> <button><Link to='/'> Users</Link></button> </div> <br /> <br />
                        <div>  <button><Link to='/comments'>comments</Link></button></div>
                    </div>

                    <Switch>
                        <Route exact path='/' component={Usermanager} />
                        <Route path='/comments' component={Comment} />
                    </Switch>
                    <br />
                    <button onClick={() => { timer(); }}>Call</button>

                </div>

            </BrowserRouter>
        )}}
function timer ()  { 
    var ref = 3000;
        if(ref){
            clearTimeout(ref)
            console.log('clear')
        }
         ref = setTimeout(() => {
            console.log('Calling server')
            ref = null 
        },1500)

}

export default connect(null, mapDispatchToProps)(Dashboard)

// we take null states from parent  &&  send dispatch function to children
// this dispatch action will be send across the reducer function
// from dashboard we brought data > we dispatch to reducer > we further transfer it to app.js initialData - userDetais as action.payload  