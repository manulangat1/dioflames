import {GET_HOME, GET_ABOUT} from './types'
import axios from 'axios'

export const getAbout = () => dispatch => {
    axios.get('/api/about/')
         .then(res => {
             dispatch({
                type:GET_ABOUT,
                payload:res.data 
             })
         }).catch(err => console.log(err))
}