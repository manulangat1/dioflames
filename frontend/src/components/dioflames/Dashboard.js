import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Subcribe from './Subcribe'
class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <Home />
                <About />
                <Services />
                <Subcribe />
            </div>
        )
    }
}
export default Dashboard;