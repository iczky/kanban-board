import unchecked from "../../../assets/Unchecked.png";
import checked from "../../../assets/Checked.png";
import { useState } from "react";

interface ChecklistProps {
  isDone: boolean;
}

const CheckList: React.FC<ChecklistProps> = ({ isDone }) => {
  const [check, setCheck] = useState<boolean>(isDone);

  return (
    <div onClick={() => setCheck((prev) => !prev)} className="w-5 h-5">
      <img src={check ? checked : unchecked} alt="unchecked" />
    </div>
  );
};

export default CheckList;
