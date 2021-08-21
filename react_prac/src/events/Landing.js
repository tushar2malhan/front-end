import React from 'react'
import namelist from './namelist'

// import Dashboard from './Dashboard'
        //<div>{this.state.dashboard='ok'} </div>
        /* <Dashboard/> */

export default class Landing_page extends React.Component{
    constructor(props){
        super(props)// props here will be object - key={value}
        this.state={ // === object , THAT GETS UPDATED EVERYWHERE
            name:['john','tushar','ok','cena','taker',] 
        }
    }
    render() {
        return (
            <div>
                
                {/* { <div>{this.props.dummy}</div>  */}
                {/* /*{console.log(this.state)}
                <div>{this.state.name}</div>
                <input type="text" value={this.state.name} onChange={ (e) =>  { console.log(this.state); this.setState({ name:e.target.value })}    }   />
               
               <input type="button" value='submit' onClick={() => this.props.handlechange('Hi , this is change from handlechnage created by dashboard for landing page ') } /> */}
                
                <ul>
                
                {this.state.name.map( (item ,index) => {
                    return(
                        // <li key={index} ><h3> {item} </h3></li>
                        <namelist key ={index} name ={item}/>
                        
                        )
                        
                    })}
                </ul>

            </div>
            
        )
    }
}

