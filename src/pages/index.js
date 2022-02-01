import React from "react"

import Layout from "../components/Layout"
import DropDownRows from "../components/DropDownRows"
import musikschule_gebaeude from "../images/Foto_01.jpg"
import background from "../images/HG_Element_01.png"


const IndexPage = ({ data }) => {
    return (
	<Layout>
	    
	    <div className="container">
		<img style={{margin: "0 auto"}} width="100%" className="willkommen" src={background} />
	    </div>
	    <div className="container">
		<img src={musikschule_gebaeude} style={{width: "100%"}}/>
	    </div>
	    <section className="paedagogen-und-verwaltung mt-5">
		<div className="container d-flex flex-column">
		    <h1>PÄDAGOGEN & VERWALTUNG</h1>
		    <DropDownRows />
		</div>
	    </section>
	</Layout>
    )
}


export default IndexPage
