import * as React from 'react';
import '../styles/MainPage';
import { KanbanBoard } from './KanbanBoard';
import { IKanbanColumn } from './KanbanColumn';


const columns: IKanbanColumn[] = [
    {
        name: 'Winnie',
        cards: [{text: 'Hot', columnId: 1}, {text: 'Kinky', columnId: 1}],
        columnId: 1
    },
    {
        name: 'Bob',
        cards: [{text: 'Slow', columnId: 2}, {text: 'Nimble', columnId: 2}],
        columnId: 2
    },
    {
        name: 'Thomas',
        cards: [{text: 'Comedian', columnId: 3}, {text: 'Big Feet', columnId: 3}],
        columnId: 3
    },
    {
        name: 'George',
        cards: [{text: 'Player', columnId: 4}, {text: 'Bad Boy', columnId: 4}],
        columnId: 4
    }
];

export class MainPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main'>
                <KanbanBoard columns={columns}/>
            </div>
        );
    }
}