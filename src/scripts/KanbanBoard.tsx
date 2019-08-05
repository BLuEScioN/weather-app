import * as React from 'react';
import '../styles/KanbanBoard.scss';
import { IKanbanColumn, KanbanColumn } from './KanbanColumn';
import { IKanbanCard } from './KanbanCard';

interface IKanbanBoardProps {
    columns: IKanbanColumn[];
    // cards: IKanbanCard[];
}

interface IKanbanBoardState {
    columns: IKanbanColumn[];
    // cards: IKanbanCard[];
}

export class KanbanBoard extends React.Component<IKanbanBoardProps, IKanbanBoardState> {
    constructor(props) {
        super(props);

        // columns.forEach((column)this.assignCardsToColumns()

        this.state = {
            columns: this.props.columns
        }

        this.onMoveCard = this.onMoveCard.bind(this);
        this.onAddCard = this.onAddCard.bind(this);
    }

    render() {
        return (
            <div className='kanban-board'>
                {this.renderColumns(this.state.columns)}
            </div>
        );
    }

    renderColumns(columns: IKanbanColumn[]): JSX.Element[] {
        return columns.map((column: IKanbanColumn) => {
            return (
                <KanbanColumn 
                    name={column.name} 
                    cards={column.cards}
                    columnId={column.Id}
                    onMoveCard={this.onMoveCard}
                    onAddCard={this.onAddCard}
                />
            );
        });
    }

    // assignCardsToColumns(columnId: number): IKanbanCard[] {
    //     if (!columnId) throw new Error('@assignCardsToColumns columnId cannot be null');

    //     let assignedCards = [...this.state.cards];

    //     return assignedCards.filter((card) => card.columnId === columnId);
    // }

    /**
     * Currently only moves the card over one column
     */
    onMoveCard(movingCard: IKanbanCard) {
        let columns = [...this.state.columns];

        // find the index of the column that currently holds the card
        let currentCardColumnIndex = columns.findIndex((column) => column.Id === movingCard.columnId);
        // get the column that currently holds the card
        let currentCardColumn: IKanbanColumn = columns[currentCardColumnIndex];
        // remove the card from the colum
        currentCardColumn.cards = currentCardColumn.cards.filter((card) => card.text === movingCard.text);

        // find the index of the next column that should hold the card
        let nextCardColumnIndex = columns.findIndex((column) => column.Id === (movingCard.columnId + 1));
        // get the next column in line that should hold the card
        let nextCardColumn: IKanbanColumn = columns[nextCardColumnIndex];
        // add the card to the column
        nextCardColumn.cards.push(movingCard);

        // modify the current column 
        // columns[currentCardColumnIndex] = currentCardColumn;
        // modify the next column
        // columns[nextCardColumnIndex] = nextCardColumn;

        this.setState({ columns });
    }

    onAddCard(columnId: number) {
        const text: string = prompt('Enter card text');

        let columns: IKanbanColumn[] = [...this.state.columns];
        let column: IKanbanColumn = columns.filter((column: IKanbanColumn) => column.Id === columnId)[0];
        column.cards.push({ text: text, columnId: columnId });

        this.setState({ columns });
    }

    addColumn() {

    }
}