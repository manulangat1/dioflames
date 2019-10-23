import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { getHome } from '../../actions/home'
import '../App.css'

class Home extends React.Component{
    static propTypes = {
        homes: PropTypes.array.isRequired
    }
    componentDidMount(){
        this.props.getHome()
    }
    render(){
        return (
            <section className="section-a">
                <div id="home">
                {/* <div className="container"> */}
                {
                    this.props.homes.map(home => (
                        <div key ={home.id} className="keys">
                            <div  className="bg-image" style={{ backgroundImage: `url('${home.picture}')` }}>
                                <div className="home-content">
                            <h1>{home.name}</h1>
                            <p>{home.text}</p>
                            <a className="btn" href="#about">Read More</a>
                            </div>
                            </div>
                        </div>
                    ))
                }
                {/* </div> */}
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    homes: state.home.home
})
export default connect(mapStateToProps,{getHome})(Home);