import React from 'react'

export default class Updating extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <h1>Updating</h1>
                Update state in React by using this.setState() and passing in an object
                Describe what happens when state is updated
                Explain the difference between changing state and changing props
                Updating State
                While a React component can have initial state, the real power is in updating its state — after all, 
                if we didn't need to update the state, the component shouldn't have any state. 
                State is only reserved for data that changes in our component and is visible in the UI.
                Instead of directly modifying the state using this.state, we use this.setState(). This is a function available to all React components that use state, 
                and allows us to let React know that the component state has changed. This way the component knows it should re-render, because its state has changed and 
                its UI will most likely also change. Using a setter function like this is very performant. 
                While other frameworks like Angular.js use "dirty checking" (continuously checking for changes in an object) to see if a property has changed, 
                React already knows because we use a built-in function to let it know what changes we'd like to make!
                <br />
                For more info <a href='https://learn.co/lessons/react-updating-state' target='_blank'>link </a>
            </div>
        )
    }
}