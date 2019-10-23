import {GET_MISSION } from '../actions/types'

const initialState = {
    mission:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_MISSION:
            return {
                ...state,
                mission: action.payload
            }
        default:
            return state
    }
}