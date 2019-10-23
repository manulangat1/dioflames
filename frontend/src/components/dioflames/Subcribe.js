import React from 'react'
import {connect } from 'react-redux'
import { getAddress,addMessage} from '../../actions/subscribe'
import Form from './Form'
import '../App.css'

class Subscribe extends React.Component{
    componentDidMount(){
        this.props.getAddress()
    }
    render(){
        return (
            <section className="subscribe">
                <div className="container">
                <div>
                   <Form />
                </div>
                <div>
                    <div className="contacts">
                    {
                        this.props.address.map(addr =>(
                            <div key={addr.id}>
                                <h3>Our Address :{addr.address}</h3>
                                <h3>Email : {addr.email}</h3>
                                <h3>Phone Numbers: {addr.phone}</h3>
                            </div>
                        ))
                    }
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    address : state.subscribe.address
})
export default connect(mapStateToProps,{getAddress})(Subscribe);