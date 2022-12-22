import React from "react";
import {FaBars} from "react-icons/fa";
import {BsSearch} from "react-icons/fa";
import style from "../style.css";
import logo from "../images/logo.png";
import profile from "../images/anurag.jpeg";


const NavBar = () =>{
    const showNavbar = () =>{
       console.log("Helo world");
        document.querySelector(".nav-container").style.width="100%";
       
       }
       const hideSideBar = () =>{
        document.querySelector(".nav-container").style.display = "none";
       }
return(
    
    <nav className="flex">
        <div className="nav-container" onClick={hideSideBar}>
<ul className="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Search History</a></li>
    <li><a href="#">Collections</a></li>
    <li><a href="#">offline searches</a></li>

</ul>
</div>
        <button className="nav-btn open" onClick={showNavbar}>
    <FaBars/>
    
</button>

<div className="logo">
<img src={logo} />
</div>

<div className="profile">
<img src={profile} />
</div>

    </nav>
)
}
export default NavBar;