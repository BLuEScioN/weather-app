import * as React from 'react';
import { IKanbanCard, KanbanCard } from './KanbanCard';
import '../styles/KanbanColumn';
import { AddCard } from './AddCard';

export interface IKanbanColumn {
    name: string;
    cards: IKanbanCard[];
    id: number;
    headerStyle?: any;
}

export interface IKanbanColumnProps {
    column: IKanbanColumn;
    onMoveCard: (card: IKanbanCard) => void;
    onAddCard: (columnId: number) => void;
}

export interface IKanbanColumnState {}


export class KanbanColumn extends React.Component<IKanbanColumnProps, IKanbanColumnState> {
    constructor(props) {
        super(props);
    }

    render() {
        const { column } = this.props;

        return (
            <div className='kanban-column'>
                <div className={`kanban-column-header`} style={column.headerStyle}>
                    {column.name}
                </div>
                <div className='card-container'>
                    {this.renderCards(column.cards)}
                </div>
                <AddCard onAddCard={() => this.props.onAddCard(column.id)}/>
            </div>
        );
    }

    renderCards(cards: IKanbanCard[]): JSX.Element[] {
        return cards.map((card) => <KanbanCard card={card} onMoveCard={this.props.onMoveCard}/>);
    }
}