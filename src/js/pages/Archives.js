import React from "react"

import Article from "../components/Article";

export default class Archives extends React.Component {
    render() {

        const { query } = this.props.location;
        const { params } = this.props;
        const { article } = params;
        const { date, filter } = query;
        const Articles = [
            "Fake Article",
            "Partial Article",
            "American Article",
            "Mexican More",
        ].map((title, i) => <Article key={i} title={title} />);

        return (
            <div>
                <h1>Archives</h1>
                <h4>article:{article}, date: {date}, filter: {filter}</h4>
                <div class="row">{Articles}</div>
            </div>
        );
    }
}