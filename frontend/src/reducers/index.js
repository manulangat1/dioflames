import {combineReducers} from 'redux'
import home from './home'
import about from './about'
import services from './services'
import subscribe from './subscribe'
import  Message  from './Message'
import mission from './mission'
export default combineReducers({
    home,
    about,
    services,
    subscribe,
    Message,
    mission
})