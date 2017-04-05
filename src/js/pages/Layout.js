import React from "react";


import {Link} from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

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
		// setTimeout(() => {
		// 	this.setState({name: "Bob"});
		// }, 3000);
		const { history } = this.props;
		console.log(history.isActive("archives"));
		return (
			<div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
				{this.props.children}
				<Link to="archives" activeClassName="test">
					<button class="btn btn-primary">archives</button>
				</Link>
				<Link to="settings">
					<button class="btn btn-success">settings</button>
				</Link>

				<button onClick={this.navigate.bind(this)}>featured</button>
                <Footer />
			</div>
		);
	}
}