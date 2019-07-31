import * as React from 'react';
import '../styles/KanbanBoard.scss';
import { IKanbanColumn, KanbanColumn } from './KanbanColumn';

interface IKanbanBoardProps {
    columns: IKanbanColumn[];
}

interface IKanbanBoardState {
    columns: IKanbanColumn[];
}

export class KanbanBoard extends React.Component<IKanbanBoardProps, IKanbanBoardState> {
    constructor(props) {
        super(props);

        this.state = {
            columns: this.props.columns
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