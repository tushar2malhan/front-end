import react, { useState } from 'react'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
    return {
        username: (val) => { dispatch({ type: 'USER', payload: val }) }
    }
}
function Login(props) {
    const [name, setName] = useState('')
    const { username } = props
    // const [show , setShow ]= useState(false)

    const onSubmits = (e) => {
        e.preventDefault()
        username(name)
        // setShow(true)
        props.history.push('/add')
    }
    return (
        <div>
            <h2>Login here  </h2>
           
            <form onSubmit={onSubmits} >
                {/* {show && 
                    <Addtodo/>} */}
                <div>
                    <input type="text" placeholder='Name' onChange={(e) => { setName(e.target.value) }} style={{ border: '2px solid black', margin: '5px' }} /> <br /> <br />
                    <input type="password" placeholder='Password' style={{ border: '2px solid black', margin: '5px' }} /> <br /> <br />
                    <button type="submit"  style={{ border: '2px solid black', margin: '5px' }} >Submit</button> 
                </div>
                {/* {!show} */}
            </form>

        </div>
    )

}

export default connect(null, mapDispatchToProps)(Login)