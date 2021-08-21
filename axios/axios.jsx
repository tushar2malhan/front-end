import React from 'react'
import secureaxios from './api'
import  './style2.css'

export default class Axios extends React.Component{
    constructor(props){
        super(props)
        this.state={
            names:[],
            newdata:[],
            name:'rnfn'

        }
    }
    componentDidMount(){
         secureaxios.get('/users').then(res => { 
        this.setState({names:res.data}) }).catch(
            err=>{console.log('error, u did it wrong')
        })
    }
    handle =() => {
        this.setState( {names:[ {name:this.state.name} ,...this.state.names] })
            const obj ={name:this.state.name}
        secureaxios.post('/posts',obj).then(res => {
             this.setState({newdata:res.data })
            //  console.log(this.state.newdata,'nwdata')

    }).catch(err => {console.log('error' )})
    }

    
    render(){
        const{names,name , newdata}=this.state
        return(
            <div>
                <h1 className="head">Digikull Students</h1>
                <h2>Hello User </h2>
                <input type="text" onChange={(e) =>this.setState({name:e.target.value})} />
                <button onClick={() => {this.handle()}}> ADD </button>
                {/* {this.state.name} */}

                <div >
                    {this.state.names.map( (e,i) =>{  
                        return <div key ={i}> 
                            <input type="text" value={e.name} className='arr'  />
                        </div>} )}
                </div>


            </div>
        )
    }
}

    