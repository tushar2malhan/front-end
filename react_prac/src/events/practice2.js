import React from 'react'
import secureaxios from './axios'


export default class Practice3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: [],
            name: '',
            email: ''
        }
    }
    componentDidMount() {
        secureaxios('/users').then(res => {
            this.setState({ obj: res.data })
        }).catch(err => { console.log(err) })
    }

    render() {
        const sty = { border: '2px solid black ', height: '160px', width: '250px', padding: '10px', float: 'right', textAlign: 'center' }
        const { name, email } = this.state
        return (
            <div>
                <div>
                    <input type="text" placeholder='Name' onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    <input type="text" placeholder='Email' onChange={(e) => { this.setState({ name: e.target.value }) }} />
                </div>

                {/* {this.state.obj.filter( e => {
                   const  newname = this.state.name ? e.name.ToUpperCase().indexOf(this.state.name) 
                })
                } */}

            </div>
        )
    }
}

// {this.state.obj.filter(item => {
//     const newname = this.state.name ? item.name.indexOf(this.state.name) != -1 : true
//     const newemail = this.state.email ? item.name.indexOf(this.state.email) != -1 : true
//     return newname, newemail
// }).map(e => {<div style ={sty}>
//         <div>{e.name}</div>
//         <div>{e.email}</div> </div>} )}
// {this.state.obj.map(e => e.name)}