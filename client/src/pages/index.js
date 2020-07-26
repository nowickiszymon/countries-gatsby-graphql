import React from "react";
import { Link } from "gatsby";


import Header from "../components/organisms/Header/index.js";
import Info from '../components/organisms/Info/index.js';
import AllCountries from "../components/organisms/AllCountries";
import Contact from '../components/organisms/Contact/index.js';


const style = {
	width: '100%',
	height: 'auto',
};


const IndexPage = () => (

		<div className="index__container" style={style}>
			<Header />
			<Info />
			<AllCountries />
			<Contact />
		</div>
)

export default IndexPage
