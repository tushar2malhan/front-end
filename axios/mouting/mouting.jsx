import React from 'react'

export default class Mounting extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>
                <h1>Mounting</h1> 
                The name is self-explanatory. Mounting is the phase in which our React component mounts on the DOM (i.e., is created and inserted into the DOM).
                This phase comes onto the scene after the initialization phase is completed. In this phase, our component renders the first time
                Includes  ComponentDidAmount 
                This method is called after the component gets mounted on the DOM. Like componentWillMount, it is called once in a lifecycle. Before the execution of this method, the render method is called (i.e., we can access the DOM). We can make API calls and update the state with the API response.
                <br />
                For more info   <a href='https://reacttraining.com/blog/mount-vs-render/' target='_blank'>link </a>
             </div>
        )
    }
}