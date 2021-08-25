import {TABS} from './App';
import '../stylesheets/Pages.css';

import React, {useState} from 'react';
import {
    Switch,
    Route
} from "react-router-dom";


function MainScreen() {
    const [night, setNight] = useState(true);

    const toggleNight = () => {
        setNight(!night);
        
        let mainColor = window.getComputedStyle(document.querySelector('body')).getPropertyValue('--text-color');
        let backgroundColor = window.getComputedStyle(document.querySelector('body')).getPropertyValue('--page-background');
        
        document.documentElement.style.setProperty("--text-color", backgroundColor);
        document.documentElement.style.setProperty("--page-background", mainColor);

        console.log(document.styleSheets);
        console.log(document.documentElement.style);
    };

    const getModeName = () => {
        return night ? "☀️" : "🌙";
    };

    console.log(getModeName());
    return (
        <div className="main-screen">
            <p className="date box to-button" onClick={toggleNight} > {getModeName()}</p>
            <Switch>
                {TABS.map((tab) => {
                    return(
                        <Route exact path={"/" + tab.route} component={tab.component}/>
                    )
                })}
            </Switch>
        </div>
    );
}

export default MainScreen;
