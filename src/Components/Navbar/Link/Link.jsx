import React, { Component } from 'react';

class Link extends Component {
    render() {
        const { route } = this.props;
        return (
            <li className="mr-6 p-2 hover:bg-yellow-200" key={route.id}>
                <a href={route.path}>{route.name}</a>
            </li>
        );
    }
}

export default Link;
