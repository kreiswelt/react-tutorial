import React from "react";
import ReactDOM from "react-dom";


class Layout extends React.Component {
	render() {
		const name = "kermit";
		return (
			<h1>It's {name}!{1+2}</h1>
		);
	}
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);