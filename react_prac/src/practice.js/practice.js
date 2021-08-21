
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Practice2 from './practice2'


function Practice(props) {
    const [count, setcount] = useState(0, [])
    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            <button onMouseEnter={() => setIsShown(true)}
                   onClick={() => setIsShown(false)}>
                Hover over me!
             </button>
            {isShown &&
                <div> Practice 2 file  appears when u hover over me
                    <Practice2 />
             </div>}

        </div>
    )
}


export default Practice
