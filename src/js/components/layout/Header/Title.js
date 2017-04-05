import React from "react";

export default class Title extends React.Component {
	constructor() {
		super();
		this.name = "kermit";
	}

	render() {
		return (
			<header>
                <h1>It's {this.props.title} {this.name}!</h1>
            </header>
		);
	}
}