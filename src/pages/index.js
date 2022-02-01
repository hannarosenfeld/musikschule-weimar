import React from "react"

import Layout from "../components/Layout"
import DropDownRows from "../components/DropDownRows"

import background from "../images/HG_Element_01.png"

const IndexPage = ({ data }) => {
    return (
	    <Layout>
		<img style={{margin: "auto 2em"}} className="willkommen container" src={background} />
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
