import React from "react";

import logo from '../Images/logo.svg';

export default function Logo(){
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p class="slogan"> The Encyclopedia of Breakdancing </p>
            </header>
        </div>
    )
}