import React from 'react'
import {getServices } from '../../actions/services'
import {connect } from 'react-redux'
import '../App.css'
class Services extends React.Component{
    componentDidMount(){
        this.props.getServices()
    }
    render(){
        return (
            <section id="services" className="services">
                <div>
                <div className="container">
                    <div className="kk">
                {
                    this.props.services.map(service =>(
                        <div key ={service.id}>
                            <img src={service.pic} className="pic-s"/>
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
    services: state.services.services
})

export default connect(mapStateToProps,{getServices})(Services);