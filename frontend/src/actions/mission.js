import {GET_MISSION } from './types'
import axios from 'axios'


export const getMission = () => dispatch => {
    axios.get('/api/mission/')
         .then(res => {
             dispatch({
                 type: GET_MISSION,
                 payload: res.data
             })
         })
}