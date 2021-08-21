import React from 'react'
import secureaxios from './axios'

export default class Child1 extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            users:[]
        }
        
    }
    componentDidMount() {
        secureaxios('/comments').then(response =>{console.log('response success',response.data)}).catch(err => {console.log(err,'eror')})

        const obj ={
            name:'tushar',postId:45,arr:'haridwaaa'
        }
        secureaxios.post('/posts',obj).then( response => {console.log('posted data',response.data)  }).catch(err => {console.log(err)})

        secureaxios({
            method:'post',
            url:'/posts',
            data:obj,
        }).then( response => {console.log('2 posted data',response.data)  }).catch(err => {console.log(err)})

        secureaxios({
            method:'put',
            url:'/posts/1',
            data:{name:"malhan"},
        }).then( response => {console.log('2 posted data',response.data)  }).catch(err => {console.log(err)})

        secureaxios({
            method:'get',
            url:'/comments'
        }).then(res =>{
            this.setState({users:res.data})
        }).catch(err => {console.log(err)})
    }
    render() {
        return (
            <div>
            {/* //     {this.state.flag && <GrandChild1  count ={this.state.count }/> }              
            //     <button onClick= {() => {this.setState({count:this.state.count +1  }) } } > count increase</button>
            //     <button onClick ={() => {this.setState({ flag : !this.state.flag })}} > toggle  </button> <br/>  */}
            
            {this.state.users.map( e=> {
                return <div>{e}</div>
            })}
            </div>
        )
    }
}