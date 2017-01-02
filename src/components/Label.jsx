import React from 'react';


export default class Label extends React.Component {
    render() {
        return (
            <div className="name-label">{this.props.name}</div>
        )
    }
}