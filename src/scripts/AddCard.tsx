import * as React from 'react';
import '../styles/AddCard';

export interface IAddCardProps {
    onAddCard: (text) => void
}

export interface IAddCardState {}

export class AddCard extends React.Component<IAddCardProps, IAddCardState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='add-kanban-card' onClick={this.props.onAddCard}>
                Add Card
            </div>
        );
    }
}