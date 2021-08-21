import React from 'react';
import Header from '../mouting/Header'
import Landing_page from './Landing'


// class base components 
class Dashboard extends React.Component{  // this react.component class is taken from which parent class 
    constructor(props){
        super(props)
        this.state = { dashboard:'dummy value sending to landing screen from dashboard  '
        }// giving attribute to another component from current dashboard to landing  == props 
    }
    handlechange = val => {this.setState( {  dashboard:val } )} // setting object  for landing & supplying it to landing 

    // handleChange = (keyName, e) => { this.setState({ [dashboard]: e.target.value }); }
/* <input type="text" onClick ={ () => {this.handleChange()}} /> */

    
    render(){
        return(
            <div>
                <Header/> 
                <Landing_page dummy = {this.state.dashboard} handlechange ={this.handlechange} />  
                <button onClick ={(e) => {this.setState({ dashboard:'changed me for now ! ' }) }} > Change state  </button>
                <p> Dashboard</p>
                
            </div>

        )
    } 

}

export default Dashboard; // can this 1 be change as Dashboard -yes  