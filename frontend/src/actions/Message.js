import { GET_ADDRESS,ADD_MESSAGE } from './types'
import axios from 'axios'

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export const addMessage = messages => dispatch =>{
    axios.post('/api/subscribe/',messages)
         .then(res => {
             dispatch({
                 type: ADD_MESSAGE,
                 payload: res.data
             })
         })
}