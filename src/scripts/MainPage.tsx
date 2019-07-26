import * as React from 'react';
import { BrandLogo } from './BrandLogo';
import { Header } from './Header';
import '../styles/MainPage';

export class MainPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <p>This is my new react app</p>
                <p>This is my new react app</p>
                <BrandLogo />
            </>
        );
    }
}