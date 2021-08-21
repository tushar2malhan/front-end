
export default function reducer(state=[], action ) {
    switch (action.type) {
        case 'ADD_NAME':{
            return {...state,  userDetails:[...state.userDetails ,action.payload ] }
        }
        case "DELETE":{
            const {i}= action.payload
            return{ ...state , userDetails:[...state.userDetails.slice(0,i) , ...state.userDetails.slice(i+1) ]}
        }
        case 'USER':{
            return {...state , userinfo:[action.payload] }
        }
        default:{
            return state
        }
    }
}
