import React from 'react'

export default class GrandChild1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count : this.props.count
        }
    }

    static getDerivedStateFromProps(props,state){
        if(props.count != props.state){
            return {count:props.count}
        }
        return null
    }

    static shouldComponentUpdate(nextProps,nextState){
        if(nextProps > 8){
            return False
        }
        return true 
    }


    render() {
        // const { count} =this.props
        console.log(this.props)
        return (
            <div>

                <h1 style={{color:'red'}}> 1 grandson here</h1>
                {this.state.count} <br/>
                <input type="text" name="ff" value='1 grandson here' />
            </div>
        )
    }
}