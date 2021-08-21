import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div >
            <h1 style ={{backgroundColor:'darkblue', color:'white' , border:'2px solid lightgrey' }}>
            To-do-list </h1>
            <div  >
                <button style={{margin:'20px' , backgroundColor:'lightgray' , border:'2px solid black'}}> <Link to='/'>Home  </Link></button>
                <button style={{margin:'20px' , backgroundColor:'lightgray',border:'2px solid black'}}> <Link to='/add'>ToDo  </Link></button>

            </div>
        </div>
    )
}
