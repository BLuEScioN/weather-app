import * as React from 'react';
import { IKanbanCard, KanbanCard } from './KanbanCard';
import '../styles/KanbanColumn';
import { AddCard } from './AddCard';

export interface IKanbanColumn {
    name: string;
    cards: IKanbanCard[];
    Id: number;
}

export interface IKanbanColumnProps {
    name: string;
    cards: IKanbanCard[];
    Id: number;
    onMoveCard: (card: IKanbanCard) => void
    onAddCard: (columnId: number) => void
}

export interface IKanbanColumnState {}


export class KanbanColumn extends React.Component<IKanbanColumnProps, IKanbanColumnState> {
    constructor(props) {
        super(props);
    }

    render() {
        let columnHeaderClasses=`kanban-column-header ${this.columnColorSelector(this.props.name)}`;

        return (
            <div className='kanban-column'>
                <div className={`${columnHeaderClasses}`}>
                    {this.props.name}
                </div>
                <div className='card-container'>
                    {this.renderCards(this.props.cards)}
                </div>
                <AddCard onAddCard={() => this.props.onAddCard(this.props.Id)}/>
            </div>
        );
    }

    renderCards(cards: IKanbanCard[]): JSX.Element[] {
        return cards.map((card) => <KanbanCard card={card} onMoveCard={this.props.onMoveCard}/>);
    }

    columnColorSelector(name: string): string {
        if (name === 'Winnie') {
            return 'Winnie';
        }if (name === 'Bob') {
            return 'Bob';
        }if (name === 'Thomas') {
            return 'Thomas';
        }if (name === 'George') {
            return 'George';
        } else {
            return 'Blue';
        }
    }
}