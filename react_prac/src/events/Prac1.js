import React from 'react'
import User from './prac2.js'


export default class Prac1 extends React.Component {
    constructor(props) {
        super(props) 
        this.state={
            obj:[],
            select :''
        }

    }

    handlechange=(e,id) => {
        const { changeselectedid } = this.props
        if(e.target.checked ==true ){
            changeselectedid(id)
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => { 
            this.setState({obj:data})

        })
    }


    render() {  

        return (
            <div>

                <h1> app </h1>
                { this.state.obj.map(e => {
                    return <div> 
                        <fieldset><input type="radio" /> name:{e.name}  <br/>username:{e.username}   <br/></fieldset>

                    </div>  })}
                
                   
               
                <User user={this.state.obj} changeselectedid ={this.state.select} 
                 handlechange={this.state.handlechange} />
            </div>
           
           )
        }
}