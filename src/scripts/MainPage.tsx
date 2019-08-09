import * as React from 'react';
import '../styles/MainPage';
import { KanbanBoard } from './KanbanBoard';
import { IKanbanColumn } from './KanbanColumn';
// import { IKanbanCard } from './KanbanCard';



// const columns: IKanbanColumn[] = [
//     {
//         name: 'Winnie',
//         cards: [],
//         columnId: 1
//     },
//     {
//         name: 'Bob',
//         cards: [],
//         columnId: 2
//     },
//     {
//         name: 'Thomas',
//         cards: [],
//         columnId: 3
//     },
//     {
//         name: 'George',
//         cards: [],
//         columnId: 4
//     }
// ];

// const cards: IKanbanCard[] = [
//     {text: 'Hot', columnId: 1}, 
//     {text: 'Kinky', columnId: 1},

//     {text: 'Slow', columnId: 2}, 
//     {text: 'Nimble', columnId: 2},

//     {text: 'Comedian', columnId: 3}, 
//     {text: 'Big Feet', columnId: 3}

//     {text: 'Player', columnId: 4}, 
//     {text: 'Bad Boy', columnId: 4}
// ]

export class MainPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main'>
                <KanbanBoard />
            </div>
        );
    }
}