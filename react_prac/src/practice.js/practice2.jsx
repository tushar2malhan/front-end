import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Practice2(props) {
    const firstval = 0  // this.state ={ firstval : 0 }
    const [count, setcount] = useState(0)  // this.setState(count:0 )
    const [name, setname] = useState({ fname: '', lname: '' }, 'ok')
    const[newname , setobjname] =useState('')

    // useEffect(() => {
    //     axios('https://jsonplaceholder.typicode.com/users').then((res) => {
    //         console.log(newname)
    //         console.log(count)
    //     })
    // })

    return (
        <div>
            practice2 <br />
            count = {count}
            <button onClick={() => setcount(firstval)}>reset </button>
            <button onClick={() => { setcount(count + 1) }}> increment</button>
            <button onClick={() => { setcount(count - 1) }}> decrement </button>
            <br />
            <h1>{'First name is ' + name.fname}</h1>
            <h1>{'Last name is ' + name.lname}</h1>

            <input type="text" value={name.fname} onChange={(e) => setname({ ...name ,  fname: e.target.value })} />
            <input type="text" value={name.lname} onChange={(e) => setname({ ...name , lname: e.target.value })} />
            <br />
            <button onClick={()=> {setobjname(name.fname )}}  > change first name </button>
            <button onClick={() => {}} > change last name </button>

            <h1>{'First name is ' + newname}</h1>
            <h1>{'Last name is ' + name.lname}</h1>

        </div>
    )
}

export default Practice2