import * as React from 'react';
import '../styles/KanbanCard';

export interface IKanbanCard {
    text: string;
    columnId: number;
}

export interface IKanbanCardProps {
    card: IKanbanCard;
    onMoveCard: (card: IKanbanCard) => void
}

export interface IKanbanCardState {
    text: string;
    columnId: number;
}

export class KanbanCard extends React.Component<IKanbanCardProps, IKanbanCardState> {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.card.text,
            columnId: this.props.card.columnId
        }
    }

    render() {
        return (
            <div className='kanban-card'>
                {/* <div className='text'> */}
                    {this.state.text}
                {/* </div> */}
                <div className='move-container'>
                    <div className='circle move-icon' onClick={() => this.props.onMoveCard(this.props.card)}>
                        >
                    </div>
                </div>
            </div>
        );
    }

    moveColumn(id: number) {}
}