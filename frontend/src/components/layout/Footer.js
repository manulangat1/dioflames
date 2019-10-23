import React from 'react'
import '../App.css'
// import '../../../../node_modules/font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTumblr, faTwitter ,faFacebook} from '@fortawesome/free-brands-svg-icons'
class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
                <p>dioflames solutions</p>
                <p>&copy; 2019</p>
                <p> <FontAwesomeIcon icon={faTumblr} /> <FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faFacebook} /> </p>
                {/* <FontAwesomeIcon icon={faTumblr} /> */}
            </footer>
        )
    }
}
export default Footer;