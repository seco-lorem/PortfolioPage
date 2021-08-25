import '../stylesheets/Header.css';
import {TABS} from './App';
import {useLocation, useHistory} from "react-router-dom";


function NavBar() {
    let location = useLocation().pathname;
    let history = useHistory();
    
    const changeIndex = (event) => {
        history.push(event.target.id);
    };

    return (
        <div className="nav-bar">
            {TABS.map((tab) => {
                    return(
                        <span>
                            {( "/" + tab.route === location) ?
                                <span className="button disabled-button"> {tab.name} </span>
                            :
                                <span id={tab.route} className="button" onClick={changeIndex}> {tab.name} </span>
                            }
                        </span>
                    )
                })}
        </div>
    );
}

export default NavBar;