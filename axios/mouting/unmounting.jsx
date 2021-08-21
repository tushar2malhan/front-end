import React from 'react'

export default class Unmounting extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>
                <h1>Unmounting</h1> 
                ComponentWillUnmount is the only method that executes in unmount phase.
                Component enters into this phase when there is no matching in element tree for this component.
                Just before the component gets removed from actual DOM, this method gets called.
                Along with removal of this component from DOM tree, all children of this component also gets removed automatically.
                Once component is removed from the DOM, it gets available for the garbage collection in React.
                Cleanup activities can be done in this method. E.g. clear localstorage variables used in app, clear session, clean up charts, cleanup timers, cancel pending api requests etc.
                <br />
               For more info  <a href='https://www.tutorialspoint.com/react-js-component-lifecycle-unmounting'target='_blank'> link</a>
            </div>
        )
    }
}