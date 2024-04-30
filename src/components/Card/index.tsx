import { Card as CardType } from "../../types";
import Contributor from "./Contributor";
import Desc from "./Desc";
import TaskList from "./TaskList";
import Title from "./Title";

const Card: React.FC<CardType> = ({
  title,
  desc,
  contributors,
  taskList,
  // tags,
}) => {
  return (
    <div className="flex flex-col gap-2 px-4 pt-4 pb-2 rounded-lg bg-white border-stone-400 border-solid border-[1px] shadow-lg">
      {contributors ? <Contributor contributors={contributors} /> : null}
      <Title title={title} />
      <Desc desc={desc} />
      {taskList ? <TaskList list={taskList} /> : null}
      {/* {tag ? <Tag /> : null} */}
    </div>
  );
};

export default Card;
