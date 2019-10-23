import React from 'react'
import {connect} from 'react-redux'
import '../App.css'
import {getMission} from '../../actions/mission'

class Mission extends React.Component{
    componentDidMount(){
        this.props.getMission()
    }
    render(){
        return (
            <section>
                <div className="mission">
                    {
                        this.props.missions.map(mission => (
                            <div key ={mission.id}>
                               <h2>{mission.name.toUpperCase()}</h2> 
                            </div>
                        ))
                    }
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    missions: state.mission.mission
})

export default connect(mapStateToProps,{getMission})(Mission)