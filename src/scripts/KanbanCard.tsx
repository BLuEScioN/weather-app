import * as React from "react";
import "../styles/KanbanCard";

export interface IKanbanCard {
  text: string;
  columnId: number;
}

export interface IKanbanCardProps {
  card: IKanbanCard;
  onMoveCard: (card: IKanbanCard) => void;
}

export interface IKanbanCardState {}

export class KanbanCard extends React.Component<
  IKanbanCardProps,
  IKanbanCardState
> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="kanban-card">
        {this.props.card.text}
        <div className="move-container">
          <div
            className="circle move-icon"
            onClick={() => this.props.onMoveCard(this.props.card)}
          >
            >
          </div>
        </div>
      </div>
    );
  }
}
