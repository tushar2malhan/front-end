import React from 'react'

export default class Errorboundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {iserror: false}
    }

    static getDerivedStateFromError(err){
        return{ iserror : true}
    }

    render(){
        if(!this.state.iserror){
            return this.props.children
        }
        else{
            return(
                
                <div> Component Failed </div>)
            }
    }
}