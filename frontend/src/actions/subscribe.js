import { GET_ADDRESS,ADD_MESSAGE } from './types'
import axios from 'axios'

export const getAddress = () => dispatch => {
    axios.get('/api/contact/')
          .then(res => {
              dispatch({
                  type:GET_ADDRESS,
                  payload:res.data
              })
          }).catch(err => console.log(err))
}
export const addMessage = messages => dispatch =>{
    axios.post('/api/subscribe/',messages)
         .then(res => {
             dispatch({
                 type: ADD_MESSAGE,
                 payload: res.data
             })
         })
}