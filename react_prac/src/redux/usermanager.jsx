
import React, { useState } from 'react'
import {connect } from 'react-redux'



const mapStateToProp = initialstate => {
    return{
        userinfo :initialstate.userDetails}
    }
    
    const sendingData = dispatch => {
        return{
            addName : val => dispatch({ type :'ADD_NAME' , payload:val}),
            insertName: val => dispatch({ type:'insert' , payload:val }),    // we can dispatch any value we want with any index as well 
            deleteName: val => dispatch ({type:'delete' ,payload:val })
        }}


function Usermanager(props){
    const {userinfo} =props
    const [name , setName ] = useState('')
    const { addName , insertName , deleteName  } = props
    return(
        <div  >
            <h1>Users </h1>
            {userinfo.map((e,ind) => <li > {e.name}  
            <button onClick={() => insertName({ ind,name }) } style={{float:'left'}} > position</button>
            <button onClick={() => {deleteName(ind)}} style={{float:'inline'}}  >Delete </button> </li> )}   

            <div>
                <input type="text" onChange = { (e) => setName(e.target.value) }  value={name}  />
                <button onClick ={() => { addName(name) ;setName(''); }} > Add user </button>
            </div>

        </div>
    )}
    
// just send the function addName(val)  == addname(name) > which is given already 




export default connect(mapStateToProp, sendingData)(Usermanager)






// we dispatch data from this usersmanagement from connect >  to reducer and to >  app.js 




