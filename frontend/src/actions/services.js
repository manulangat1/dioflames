import {GET_SERVICE} from './types'
import axios from 'axios'

export const getServices = () => dispatch => {
    axios.get('/api/services/')
         .then(res => {
             dispatch({
                 type:GET_SERVICE,
                 payload:res.data
             })
         })
}