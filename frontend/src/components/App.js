import React from 'react'
import ReactDOM from 'react-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import DashBoard from './dioflames/Dashboard'
import './App.css'
//redux imports 
import store from '../store'
import { Provider }from 'react-redux'
class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div>
            <Header />
            <DashBoard />
            <Footer />
            </div>
            </Provider>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('app'))