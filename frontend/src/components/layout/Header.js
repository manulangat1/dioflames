import React from 'react'
import './layout.css'

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar">
                <div className="container">
                <h1 className="logo">Dioflames Solutions</h1>
                <div id="page-nav">
                        <label>&#9779;</label>
                        <input type="checkbox" id="hamburger" />
                    
                <ul className="nav">
                    <li> <a  href="#home">Home</a> </li>
                    <li> <a  href="#about">About</a> </li>
                    <li> <a href="#services">services</a> </li>
                    </ul>              
                    </div>
                    </div>
            </nav>
        )
    }
}
function highlightCurrent(){
    const curPage = document.URL
    const links = document.getElementsByTagName('a')
    for (let link of links){
        if (link.href === curPage){
            link.classList.add("current")
        }
    }
}
document.onreadystatechange = () => {
    if (document.readyState == 'complete'){
        highlightCurrent()
    }
}
export default Header;