import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {name: "Kermit", title: "Welcome"};
	}


	changeTitle(title) {
		this.setState({title});
	}

	render() {
		// setTimeout(() => {
		// 	this.setState({name: "Bob"});
		// }, 3000);

		return (
			<div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <Footer />
			</div>
		);
	}
}