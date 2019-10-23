import {GET_ADDRESS,ADD_MESSAGE} from '../actions/types'

const intialState = {
    address:[],
    messageZ:{}

}
export default function(state=intialState,action){
    switch(action.type){
        case GET_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case ADD_MESSAGE:
            return{
                ...state,
                messageZ: action.payload
            }
        default:
            return state
    }
}