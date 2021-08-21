import React from 'react'

export default class Prac2 extends React.Component {
    constructor(props) {
        super(props) 
        this.state={
            chatlist :['hello there ']
        }
        this.internalref = ''
        this.chathread = React.createRef()
    }

    componentDidMount(){
        this.internalref = setInterval( () => this.setState({chatlist:[ ...this.state.chatlist,'yo whats up '] }), 500)
    }

    componentWillUnmount() {
        clearInterval(this.internalref)
    }

    render(){
        return(
            <div>
                {this.state.chatlist.map(item => <div> {item}</div> )}
            </div>
        )
    
    }

}