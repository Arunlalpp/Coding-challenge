import React, { useState } from "react";

const arr = ["list", "list-2", "list-3"];

function FilterMethod() {
  const [arrCopy, setArrayCopy] = useState(arr);

  const handleDeleteItems = (itemsIndex: number | string) => {
    setArrayCopy((prevArrCopy) => prevArrCopy.filter((_, index) => {
      return index !== itemsIndex;
    }));
  };

  return (
    <div className="bg-slate-600 flex flex-col justify-center items-center h-screen w-screen">
      <ul>
        {arrCopy.map((item, index) => {
          return (
            <li
              className="flex gap-4 justify-center items-center py-4"
              key={item}
            >
              {item}
              <button
                className="p-2 border border-green-600 rounded-2xl bg-green-900"
                style={{ WebkitTapHighlightColor: "transparent" }}
                onClick={() => handleDeleteItems(index)}
              >
                Delete items
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilterMethod;
