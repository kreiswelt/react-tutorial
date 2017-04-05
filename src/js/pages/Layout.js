import React from "react";


import {Link} from "react-router";

import Nav from "../components/layout/Nav";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {name: "Kermit", title: "Welcome"};
	}

	changeTitle(title) {
		this.setState({title});
	}

	navigate(){
		//this.props.history.pushState(null, "/");
		this.props.history.replaceState(null, "/");
	}

	render() {
		const { location } = this.props;
		const containerStyle = {
			marginTop: "60px"
		};

		return (
			<div>
				<Nav location={location}  />
				<div class="container" style={containerStyle}>
					<div class="row">
						<div class="col-lg-12">
			                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
							{this.props.children}
						</div>
					</div>
	                <Footer />
				</div>
			</div>
		);
	}
}