import React from 'react'
import {Link} from 'react-router-dom' 

export default class Dash extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {users} =this.props
        // const{ match: {params: { id } }  } = this.props

        return(
            <div >
                {users.map(e => <div> <Link to={`dash/${e.id}`}>{e.name} </Link> </div>)}
            </div>
        )
    }
}