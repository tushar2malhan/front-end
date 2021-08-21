import axios from 'axios'
import React, { useState, useEffect } from 'react'


// const handle =(item,id) =>{
//     if(id.checked ===true){
//         console.log('id',id)
//     }
// }
function Practice3(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/comments').then((res) => {
            console.log('success')
            setData(res.data)
        })
    }, [])


    return (
        <div>


            <div style={{ textAlign: 'center' }}>
                <h1>User and post managment </h1> <hr />

                
            <button > Sort By </button>
            <select >
                <option value="Name">Name</option>
                <option value="Email">Email</option>
                <option value="Body">Body</option>
            </select>


                {data.filter(e => e.id <= 5)
                
                .map(e => {
                    return <div style={{ border: '2px solid black', padding: '20px', margin: '20px', display: 'inline', width: '30%', float: 'left' }}>
                        <input type="radio" name='id' /> <br /> name - {e.name} <br /> email - {e.email}  <br /> body - {e.body}  </div>
                })}
                <button  >Edit Details</button>
            </div>
        </div>
    )
}
export default Practice3
