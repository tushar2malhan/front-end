export default function commentReducer (state=[] , action ) {
    switch(action.type){
        case 'ADD_comments':{
            return action.payload
        }
        default:{
            return state
        }
    }
}

// comment details reducer 