import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'

const mapStateToProps = initialstate => {
    return {
        userlist: initialstate.userDetails,
        users: initialstate.userinfo
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addName: (val) => { dispatch({ type: 'ADD_NAME', payload: val }) },
        deleteName: (val) => { dispatch({ type: 'DELETE', payload: val }) }
    }
}
function Addtodo(props) {
    const { userlist } = props
    const { addName, deleteName , users } = props
    const [name, setname] = useState('')
    // const [cutname , setCutname]= useState('')
    const [tasklist, setTaskList] = useState([]);
    const [enablebtn, setenablebtn] = useState('')

const handlebutton = (e, id) => {
    if (e.target.checked) {
        setenablebtn(id)
        }
    }
    
    const handlechange=(e)=> {
        // setCutname([e])
        setTaskList([...tasklist, e]);
}

    return (
       <div >
           <h1 style={{color:'whitesmoke'}}> Welcome {users}</h1>
            <h3>Add an item </h3>
            <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} />
            <br />
            <button onClick={() => { addName(name); setname('') }} style={{ border: '2px solid black', margin: '5px' }} > Add ToDo</button>
            <div>
                <h3>List</h3>
                {userlist.map((e, i) => <div key={i} style={{ color: 'DarkBlue', margin: '3px' }}>
                    <input type="radio" name='btn' onClick={(e) => handlebutton(e, i)} />
                    <input type="text" value={e} />
                    {enablebtn == i && <button onClick={() => { deleteName({ i }) }} style={{ border: '2px solid black', margin: '5px' }} >Delete </button> }
                   {enablebtn == i &&<button onClick={() => { handlechange(e) }} style={{ border: '2px solid black', margin: '5px' }} >Complete </button>}
            
                </div>)}
                <h3>You completed them ! </h3>
                {<p><s>{tasklist}</s></p>}



            </div>

        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Addtodo)