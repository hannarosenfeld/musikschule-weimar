import * as React from "react"

import "../styles/styles.css"
import logo from "../images/Header_08.png"
import youtube_logo from "../images/Header_07.png"


const NavBar = () => {
    return(
	<nav class="header-navbar navbar navbar-expand-lg navbar-light bg-light">

	    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	    </button>

	    <div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav mr-auto">
		    <li style={{width: "30%"}}>
			<img src={logo} />
		    </li>
		    <li class="nav-item active" style={{background: "#F9BB2D"}}>
			<a class="nav-link" href="#">Ueber Uns</a>
		    </li>
		    <li class="nav-item" style={{background: "#FBD07B"}}>
			<a class="nav-link" href="#">Instrumente</a>
		    </li>
		    <li class="nav-item" style={{background: "#FDDEB2"}}>
			<a class="nav-link" href="#">Projekte</a>
		    </li>
		    <li class="nav-item" style={{background: "#F7E2D8"}}>
			<a class="nav-link" href="#">Unterstuetzung</a>
		    </li>
		    <li class="nav-item" style={{background: "#E2D3EB"}}>
			<a class="nav-link" href="#">Service</a>
		    </li>
		    <li class="nav-item" style={{background: "#C6BEF9"}}>
			<a class="nav-link" href="#">Anmeldung</a>
		    </li>
			<li style={{width: "30%"}}>			
			    <img src={youtube_logo} />
			</li>
			
		</ul>
	    </div>
	</nav>
    )
}

export default NavBar
