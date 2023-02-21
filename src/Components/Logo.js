import React from "react";

import logo from '../Images/logo.svg';
import wind from '../Images/wind.svg';

export default function Logo(){
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            <div className="App-loadblock">
                <img src={wind} className="App-load" alt="wind" />
            </div>
            </header>
        </div>
    )
}