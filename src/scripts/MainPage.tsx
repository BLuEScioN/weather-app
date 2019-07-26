import * as React from 'react';
// import { BrandLogo } from './BrandLogo';
// import { Header } from './Header';
import '../styles/MainPage';
import { KanbanBoard } from './KanbanBoard';

export class MainPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main'>
                <KanbanBoard/>
            </div>
        );
    }
}