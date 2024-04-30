import { TaskList as TaskType } from "../../../types.ts";
import CheckList from "./CheckList.tsx";

const TaskList: React.FC<{ list: TaskType[] }> = ({ list }) => {
  return (
    <div className="flex flex-col gap-1">
      {list.map(({ isDone, desc }, index) => (
        <div key={index} className="flex gap-2 py-1 items-center">
          <CheckList isDone={isDone} />
          {desc}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
