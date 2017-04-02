import React from "react";

export default class Header extends React.Component {
	constructor() {
		super();
		this.name = "kermit";
	}
	render() {
		return (
			<header>
                <h1>It's {this.name}!</h1>
            </header>
		);
	}
}