import * as React from "react"

import "../styles/styles.css"
import logo from "../images/Header_08.png"
import youtube_logo from "../images/Header_07.png"

import logo_footer from "../images/Logo_Footer.png"



const Footer = () => {
    return(
	<div style={{background: "#322C73"}}>
	    <div style={{padding: "2em 4em"}} className="d-flex">
		<div>
		    <p style={{color: "white"}}>Gefoerdert durch die Stadt Weimar, den Kreis Weimarer Land und die Thueringer Staatskanzlei</p>
		    <img width="20%" src={logo_footer}/>
		</div>

		<div style={{color: "white"}} className="footer-links">
		    <a>DATENSCHUTZ</a>
		    <a>IMPRESSUM</a>
		    <a>KONTAKT</a>		    
		</div>
	    </div>
	</div>
    )
}

export default Footer
