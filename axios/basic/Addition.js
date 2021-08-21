import React, { Component } from 'react';


export default class Addition extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            v: null,
            total: 100
        }

    }

    inpt =(e) => {this.setState({v:e.target.value})}
    d = () => {this.setState({total:  Number(this.state.v) + this.state.total  })}
    s = () => {console.log(this.setState({total:this.state.total -Number(this.state.v)   }))}





    render() {
        

        const style2 = { width: '410px', height: '20px' }
        const mystyle = { backgroundColor: '#00BFFF', color: 'white', width: '410px', height: '30px' ,borderRadius:'9px', textAlign:'center'}
        const mystyle3 = { backgroundColor: '#B22222', color: 'white', width: '410px', height: '30px',borderRadius:'9px', textAlign: 'center' }

        return ( 
            <div >
    

                <h1 style={{ fontSize: '40px' }}> Enter a value to add/subtract </h1> <br />
                <input type="text"  style={style2}  onChange={this.inpt}     />        <br /> <br />
                <input type='button'style={mystyle}  onClick={this.d}  value='add'                />    <br /> <br />
                <input type='button'style={mystyle3} onClick={this.s} value='Subtract'             />  <br /> <br />

            
   
                 <h3>Inittial value :{this.state.v} </h3>
                 <h3>Result :{this.state.total} </h3>
                 

                
                
            
            </div>

        )
    }
}