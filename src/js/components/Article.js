import React from "react";

export default class extends React.Component {
    render() {
        const {title} = this.props;
        return (
            <div class="col-md-4">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectur bla velit animi misi.</p>
                <a class="btn btn-default" href="#">More Info</a>
            </div>
        );
    }
}