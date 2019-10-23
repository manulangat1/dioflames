import {GET_ADDRESS,ADD_MESSAGE} from '../actions/types'

const intialState = {
    messageZ:{}

}
export default function(state=intialState,action){
    switch(action.type){
        case ADD_MESSAGE:
            return{
                ...state,
                messageZ: action.payload
            }
        default:
            return state
    }
}