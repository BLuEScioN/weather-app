import * as React from 'react';
import '../styles/Header';

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header'>
                You Shall Not Pass :P
            </div>
        );
    }
}