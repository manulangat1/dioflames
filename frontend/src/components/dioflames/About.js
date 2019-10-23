import React from 'react'
import {connect} from 'react-redux'
import {getAbout} from '../../actions/about'
import PropTypes from 'prop-types'
import  Mission from './Mission'
import '../App.css'

class About extends React.Component{
    componentDidMount(){
        this.props.getAbout()
    }
    render(){
        const secondColumn = Math.floor(this.props.abouts.length / 2)
        return(
            <section id="about">
                <div className="container">
                    <div>
                {
                    this.props.abouts.slice(0,secondColumn).map(about =>(
                        <div key = {about.id}>
                            <h5>{about.title}</h5>
                            <p>{about.text}</p>
                        </div>
                    ))
                }
                </div>
                <div>
                    <Mission />
                </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    abouts: state.about.about
})
export default connect(mapStateToProps,{getAbout})(About);