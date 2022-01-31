import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


import Navbar from "../components/NavBar"

const Layout = ({ children }) => {

    const data = useStaticQuery(graphql`
	query {
	    site {
		siteMetadata {
		    title
		}
	    }
	}
    `)
    
    return (
	<div>
	    <title>{data.site.siteMetadata.title}</title>
	    <Navbar />
	    <main>
		{children}
	    </main>
	</div>
    )
}

export default Layout
