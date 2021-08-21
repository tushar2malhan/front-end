import React , { useState, useEffect } from 'react'

function Dummy(props) {
    const { users } = props
    const [ name , setname ] = useState('')
    const [ userDetails , setUserDetails ] = useState(users)

    useEffect( () => {
        console.log(userDetails)
    },[])

    return (
        <div>
            Dummy
            <ul>
                {userDetails.map(e => <li>{e}</li>)}

            </ul>
            <input type="text" value ={name } onChange={(e) => { setname(e.target.value) } } />
            <button onClick={() => { setUserDetails([...userDetails , name ]) ;setname('') ;} } > Add name </button>
       
        </div>
    )
}

export default Dummy



