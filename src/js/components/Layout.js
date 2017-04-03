import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {name: "Kermit", title: "Welcome"};
	}
	render() {
		// setTimeout(() => {
		// 	this.setState({name: "Bob"});
		// }, 3000);

		const salutation = "Mr."

		return (
			<div>
				{this.state.name}
                <Header name={"some thing"} title={salutation} />
                <Header title={"some thing"} />
                <Header title={this.state.title} />
                <Footer />
			</div>
		);
	}
}