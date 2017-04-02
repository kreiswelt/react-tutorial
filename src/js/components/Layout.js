import React from "react";
import Header from "./Header";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.name = "kermit";
	}
	render() {
		return (
			<div>
                <Header />
				<h1>It's {this.name}!</h1>
				<p>
					Hello
				</p>
			</div>
		);
	}
}