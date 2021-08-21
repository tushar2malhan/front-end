// user reducer 

export default function userReducer (state=[] , action ) {
    switch(action.type){
        case 'ADD_USER':{
            return  action.payload
        }
        case 'ADD_NAME':{
            return [ ...state , { name:action.payload }]  // we add keys and values in objects && we add the object in objecr in array 
        }
        case 'insert':{
            const {ind , name } = action.payload
            return [...state.slice(0,ind) , {name},...state.slice(ind ) ]
        }
        case 'delete':{
            const ind = action.payload
            return [...state.slice(0,ind),...state.slice(ind +1 ) ]
        }
        default:{
            return state
        }
    }
}

// final value of the store > where userDetails = {action.payload}
// everything remains same in the state , except for userDetails as we includde aciton.payload iniside it


// here we target userDetails values , soo we remove the whole arrayv 
//  no need of this > return{ ...state , userDetails:[...state.userDetails.slice(0,ind) , {name},...state.userDetails.slice(ind )  ]}}