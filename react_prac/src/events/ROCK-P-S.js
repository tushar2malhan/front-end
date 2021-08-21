import React from 'react'

export default class Practice2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rock: 0,
            paper: 1,
            scizzor: 2,
            rounds :0,
            you: null,
            computer: 0
        }
        this.result ='mm'
    }


    handle = () => {
        this.setState({ computer: Math.floor(Math.random() * 3) })
    
        
    }
    render() {
        const box = { border: '2px solid black', height: '160px', width: '300px', display: 'inline-block', padding: '30px', margin: '30px' }
        
        const you = this.state.you  
        const comp = this.state.computer   
   
       
      if (you == comp){
          console.log('draw') 
        }
        else if (you == 0 && comp ==2 ){
        console.log('you wins ') 
        }
        else if (you == 1 && comp ==2 ){
        console.log('you lost ') 
        }
        else if (you == 2 && comp ==0 ){
        console.log('you lost ') 
        }
        else if (you == 1 && comp ==0 ){
        console.log('you wins ') 
        }
        else if (you == 2 && comp ==1 ){
        console.log('you wins ') 
        }
        else if (you == 0 && comp ==1 ){
        console.log('you lost ') 
        }



        return (
            <div>
                <div>
                    <button style={box} value={this.state.rock} onClick={() => { this.setState({ you: this.state.rock }) }} > rock </button>
                    <button style={box} value={this.state.paper} onClick={() => { this.setState({ you: this.state.paper }) }}  > paper </button>
                    <button style={box} value={this.state.scizzor} onClick={() => { this.setState({ you: this.state.scizzor }) }}> scizzors </button>
                </div>

                {/* { for(i=0;i=5;i++){ */}
                <input type="button" onClick={this.handle} value='computer' />
                    {/* } } */}

                <br /> you =
                {this.state.you}  <br /> comp =
                {this.state.computer} <br />

                <div>

                {/* {this.state.you && this.state.computer == result == 'draw'} */}

                    <h1>
                       result = {this.result}
                    </h1>
                    


                </div>



            </div>
        )
    }
}