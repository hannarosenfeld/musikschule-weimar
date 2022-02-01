import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Navbar from "../components/NavBar"
import Footer from "../components/Footer"



const Layout = ({ children }) => {
    return (
	<div>
	    <Navbar />
	    <main>
		{children}
	    </main>
	    <Footer />
	</div>
    )
}

export default Layout
