import React from 'react'
import Practice2 from './ROCK-P-S'

export default class Practice1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: [],
            selectedid:''

        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
            this.setState({ obj: data })
        })
    }


change =(id) =>{this.setState({ selectedid:id })}
    
handlechnage =(e, id) => {
    if(e.target.checked==true){
        this.change(id)
    }
}



    render() {
        const s = { color: 'black', padding: '20px' }
        const x = { backgroundColor: 'lightgrey', border: '2px solid black', float:'left' , margin:'40px' ,height:'90px'}

        const selectradio = this.state.selectedid == true

        return (
            <div>
                <div styel={s}> {this.state.obj.map( (item,index) =>  {
                    return <div style={x}>

                        <input type="radio" checked={this.state.selectedid==item.id} name='true'  onChange={(e,id) => {this.handlechnage(e, item.id) }} />
                        
                        
                        name : {item.name}  <br/>
                        username: {item.username}
                        </div>
                })  }
                    
                </div>
                
                {this.state.selectedid}

                < Practice2  />
                {selectradio && <div><button > edit</button> </div>}
                                        
            </div>
        )
    }
}