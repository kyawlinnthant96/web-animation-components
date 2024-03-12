import { Reorder } from "framer-motion";
import React, { useState } from "react";

const lists = ["React", "Next", "Nest", "Node"];
const DraggableLists = () => {
  const [listItems, setListItems] = useState(lists);
  console.log(listItems, "list");
  return (
    <div className="max-w-md p-4">
      <Reorder.Group
        axis="y"
        className="space-y-2"
        onReorder={setListItems}
        values={listItems}
      >
        {listItems.map((el) => (
          <Reorder.Item
            className="p-2 bg-blue-400 text-white"
            key={el}
            value={el}
          >
            <span>{el}</span>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default DraggableLists;
