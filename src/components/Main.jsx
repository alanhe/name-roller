require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Label from './label';
import * as utils from './utils';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);

        this.loadNames = this.loadNames.bind(this);
        this.mapNames = this.mapNames.bind(this);
        this.doRoll = this.doRoll.bind(this);

        this.state = {
            names: this.loadNames(),
        }
    }

    doRoll() {
        this.setState({
            names: this.loadNames(),
        });
    }

    loadNames() {
        const SIZE = 100;
        let ret = [];
        for (let i = 0; i < SIZE; i++) {
            ret.push(utils.randomName())
        }
        return ret;
    }

    mapNames() {
        return this.state.names.map(name => (
            <Label key={name} name={name}></Label>
        ));
    }

    render() {
        return (
            <div>
                <div className="btn btn-primary" onClick={this.doRoll}>Roll!</div>
                <div>
                    {this.mapNames()}
                </div>
            </div>
        );
    }
}

export default AppComponent;
