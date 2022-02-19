import React from "react";
import ReactDOM from 'react-dom';
import "./TitleBarStyle.css";
import ProfileImg from "../../staticResources/profile-image.png"

const TitleBar = (props) => {
    console.log(props.user)
    return (
        <>
            <div id="titlebar-container">
                <a href="#" id="logo">Edvora</a>
                <div id="titlebar-content">
                    <p>{props.user.name}</p>
                    <img src={ProfileImg} alt="image"/>
                </div>
            </div>
        </>
    )
}

export default TitleBar;