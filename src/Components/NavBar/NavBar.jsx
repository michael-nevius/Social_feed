import React, {useState} from "react";
import './NavBar.css';



const NavBar = (props) => {
    return(
        <div className='navbar'>
            <div>
                Social <span style={{"color":"orange"}}>Feed</span>
            </div>
        </div>
    );
    
}

export default NavBar;