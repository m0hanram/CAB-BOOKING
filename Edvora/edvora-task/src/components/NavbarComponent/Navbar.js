import React from "react"
import "./NavbarComponent.css"

const Navbar = (props) => {

    console.log(props)
    
    function changeChoice(event,val) {
        console.log(val)
        props.onSelect(val)
        
    }

    function changeHide(event,val) {
        console.log(val)
        props.onClick(val)
    }

    return(
        <>
            <div id="navbar">
                <ul className="navbar-items">
                    <li>
                        <a href="#" onClick={e => changeChoice(e,1)}>Nearest Rides</a>
                    </li>
                    <li>
                        <a href="#" onClick={e => changeChoice(e,2)}>Upcoming Rides ({props.countUpcoming})</a>
                    </li>
                    <li>
                        <a href="#" onClick={e => changeChoice(e,3)}>Past Rides ({props.countPast})</a>
                    </li>
                </ul>
                <ul className="navbar-items">
                    <li>
                        <button onClick={e => changeHide(e,-1)} style={{paddingRight:"30px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-filter-left" viewBox="0 0 16 16">
                                <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            Filters
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;