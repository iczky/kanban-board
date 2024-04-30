import Lane from "../../components/Lane";
import { KanbanBoard } from "../../types";

interface BoardProps {
  board: KanbanBoard;
}

const Board: React.FC<BoardProps> = ({ board }) => {
  return (
    <section className="flex flex-col gap-6 p-10">
      <div className="flex flex-col gap-2">
        <h1>DESIGN WEEKLY</h1>
        <p>A board to keep track of design progress.</p>
      </div>
      <div className="flex flex-1 px-2 py-2 bg-white-smoke rounded-xl h-screen justify-between">
        {board.lanes.map((lane, index) => (
          <Lane key={index} data={lane} />
        ))}
      </div>
    </section>
  );
};

export default Board;
