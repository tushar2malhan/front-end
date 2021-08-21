import React from 'react'
import { Link } from 'react-router-dom'


export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name:''
        }
    }

    // static getDerivedStateFromPops(prevProps,state){
    //     const { match: {params: { id } } ,users } = props
    //     const { name } = users.find(e => e.id == id ) 
    // }

    render() {
        const{ match: {params: { id } } , handlechange } = this.props
        return (
            <div>
                <div>Header </div>
                We edit user for id  {id}

             <div>
                 <input type="text" onChange={(e) => { this.setState({name:e.target.value}) }} />
                 <button onClick={() => {handlechange(id,this.state.name) }} > Update name</button>                 
             </div>
            </div>
        )
    }
}