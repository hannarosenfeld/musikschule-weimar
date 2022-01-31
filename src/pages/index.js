import React from "react"

import Layout from "../components/Layout"
import DropDownRows from "../components/DropDownRows"


const IndexPage = ({ data }) => {
    return (
	<div>
	    <Layout>
		<div className="willkommen" width="300">
		</div>
		<section className="paedagogen-und-verwaltung mt-5">
		    <div className="container d-flex flex-column">
			<h1>PÄDAGOGEN & VERWALTUNG</h1>
			<DropDownRows />
		    </div>
		</section>
	    </Layout>
	</div>
    )
}


export default IndexPage
