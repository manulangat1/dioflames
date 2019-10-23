import {GET_HOME, GET_ABOUT} from './types'
import axios from 'axios'

//methd to call the home
export const getHome = () => dispatch => {
    axios.get('/api/home')
        .then(res => {
            dispatch({
               type:GET_HOME,
               payload:res.data 
            })
        }).catch(err => console.log(err))
}