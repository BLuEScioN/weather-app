import * as React from 'react';
import '../styles/KanbanBoard.css';
import { IKanbanColumn, KanbanColumn } from './KanbanColumn';

interface IKanbanBoardProps {}

interface IKanbanBoardState {
    columns: IKanbanColumn[];
}

const columns: IKanbanColumn[] = [
    {
        name: 'Winnie',
        cards: [{text: 'N', columnId: 1}, {text: 'N', columnId: 1}]
    },
    {
        name: 'Bob',
        cards: [{text: 'N', columnId: 1}, {text: 'N', columnId: 1}]
    },
    {
        name: 'Thomas',
        cards: [{text: 'N', columnId: 1}, {text: 'N', columnId: 1}]
    },
    {
        name: 'George',
        cards: [{text: 'N', columnId: 1}, {text: 'N', columnId: 1}]
    }
]

export class KanbanBoard extends React.Component<IKanbanBoardProps, IKanbanBoardState> {
    constructor(props) {
        super(props);

        this.state = {
            columns: columns
        }
    }

    render() {
        return (
            <div className='kanban-board'>
                {this.renderColumns(this.state.columns)}
            </div>
        )
    }

    renderColumns(columns: IKanbanColumn[]): JSX.Element[] {
        let renderColumns = [];

        for (let column of columns) {
            renderColumns.push(<KanbanColumn name={column.name} cards={column.cards}/>);
        }

        return renderColumns;
    }

    addColumn() {

    }
}