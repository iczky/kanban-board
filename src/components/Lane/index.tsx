import React from "react";
import { Lane as LaneType } from "../../types";
import Label from "../Label";
import Card from "../Card";

interface LaneProps {
  data: LaneType;
}

const Lane: React.FC<LaneProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-3 p-3">
      <Label label={data.title} />
      <div className="flex flex-col gap-3">
        {/* <Contributor {...element} /> */}
        {data.cards.map((card, indexCard) => (
          <Card {...card} key={indexCard} />
        ))}
      </div>
    </div>
  );
};

export default Lane;
