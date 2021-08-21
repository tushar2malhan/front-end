import React from 'react'
import {connect} from 'react-redux'



function Comment(props) {
    const { comments  } = props
    console.log(comments)
    return(
        <div> 
            <h1>Comments</h1>
            { comments.map((e,i) => <div key={i}>{e.name}</div> )}

        </div>
    )
}

const mapStateToProp = state => {
        return{
            comments : state.userComments }
    }

export default connect(mapStateToProp)(Comment)
