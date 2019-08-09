import * as React from "react";
import "../styles/KanbanBoard.scss";
import { IKanbanColumn, KanbanColumn } from "./KanbanColumn";
import { IKanbanCard } from "./KanbanCard";

interface IKanbanBoardProps {}

interface IKanbanBoardState {
  columns: IKanbanColumn[];
}

// mock kanban board data
const mockColumnsData: IKanbanColumn[] = [
  {
    name: "Winnie",
    cards: [{ text: "Hot", columnId: 0 }, { text: "Kinky", columnId: 0 }],
    id: 0,
    headerStyle: { backgroundColor: "#8E6E95" }
  },
  {
    name: "Bob",
    cards: [{ text: "Slow", columnId: 1 }, { text: "Nimble", columnId: 1 }],
    id: 1,
    headerStyle: { backgroundColor: "#39A59C" }
  },
  {
    name: "Thomas",
    cards: [
      { text: "Comedian", columnId: 2 },
      { text: "Big Feet", columnId: 2 }
    ],
    id: 2,
    headerStyle: { backgroundColor: "#344759" }
  },
  {
    name: "George",
    cards: [{ text: "Player", columnId: 3 }, { text: "Bad Boy", columnId: 3 }],
    id: 3,
    headerStyle: { backgroundColor: "#E8741E" }
  }
];

export class KanbanBoard extends React.Component<
  IKanbanBoardProps,
  IKanbanBoardState
> {
  constructor(props) {
    super(props);

    this.state = {
      columns: mockColumnsData || []
    };

    this.onMoveCard = this.onMoveCard.bind(this);
    this.onAddCard = this.onAddCard.bind(this);
  }

  render() {
    return (
      <div className="kanban-board">
        {this.renderColumns(this.state.columns)}
      </div>
    );
  }

  renderColumns(columns: IKanbanColumn[]): JSX.Element[] {
    return columns.map((column: IKanbanColumn) => {
      return (
        <KanbanColumn
          column={column}
          onMoveCard={this.onMoveCard}
          onAddCard={this.onAddCard}
        />
      );
    });
  }

  /**
   * Currently only moves the card over one column
   */
  onMoveCard(movingCard: IKanbanCard) {
    let columns = [...this.state.columns];

    // find the index of the column that currently holds the card
    let currentColumnIndex = columns.findIndex(
      column => column.id === movingCard.columnId
    );
    // get the column that currently holds the card
    let currentColumn: IKanbanColumn = columns[currentColumnIndex];
    // remove the card from the colum
    currentColumn.cards = currentColumn.cards.filter(
      (card: IKanbanCard) => card.text !== movingCard.text
    );

    // find the index of the next column that should hold the card (flimsy atm. needs refactoring)
    let nextColumnId =
      movingCard.columnId !== this.state.columns.length - 1
        ? movingCard.columnId + 1
        : 0;
    let nextColumnIndex = columns.findIndex(
      column => column.id === nextColumnId
    );
    // get the next column in line that should hold the card
    let nextColumn: IKanbanColumn = columns[nextColumnIndex];
    // change the columnId for the moving card
    movingCard.columnId = nextColumnId;
    // add the card to the column
    nextColumn.cards.push(movingCard);

    this.setState({ columns });
  }

  onAddCard(columnId: number) {
    const text: string = prompt("Enter card text");

    if (text) {
      // escape input
      let columns: IKanbanColumn[] = [...this.state.columns];
      let column: IKanbanColumn = columns.filter(
        (column: IKanbanColumn) => column.id === columnId
      )[0];
      column.cards.push({ text: text, columnId: columnId });

      this.setState({ columns });
    }
  }

  addColumn() {}

  private sortKanbanColumns(): void {
    let columns = [...this.state.columns];
    columns.sort((c1, c2) => c1.id - c2.id);
    this.setState({ columns });
  }
}
