import React from 'react'
import { Link } from 'react-router-dom'

const style = {
    display: "inline", 
    padding: '25px' ,
    marginLeft:'40px'
}

const btn ={
    width:'150px',
    padding:'10px 180px 5px 10px',
    marginLeft:"10px",
    fontFamily:"Times New Roman",
    fontSize:"15px"
    
}

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div style={{ backgroundColor: 'darkblue', color: 'white', textAlign: 'center', padding: '20px', fontFamily: 'sans-serif', height: '100px' }}>
                    
                    <h1>Component Life Cycle </h1>
                    <div>
                       <button style={btn}> <Link to="/mounting" style={style}>Mounting  </Link></button>
                        <button style={btn}><Link to="/Updating" style={style}>Updating  </Link></button>
                        <button style={btn}><Link to="/Unmounting" style={style}>Unmounting  </Link></button>

                    </div>
                </div>
            </div>
        )
    }
}