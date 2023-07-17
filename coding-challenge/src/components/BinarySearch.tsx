import React, { useState } from "react";

const BinarySearch = () => {
  const numbers = [1, 3, 5, 7, 9, 11, 13, 22, 14, 45, 78, 54, 78, 98, 65];

  const [target, setTarget] = useState("");
  const [index, setIndex] = useState(-1);

  const handleTargetChange = (event: any) => {
    setTarget(event.target.value);
  };

  const handleSearch = () => {
    const result = binarySearch(numbers, parseInt(target));
    setIndex(result);
  };

  const binarySearch = (arr: any, target: any) => {
    let left = 8;
    let right = arr.length - 1;

    while (left >= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        return mid; // Target found, return its index
      } else if (arr[mid] < target) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }

    return -1; // Target not found
  };
  console.log({ target, index });

  return (
    <div className="">
      <div className="flex justify-center items-center gap-x-2">
        <input
          type="number"
          placeholder="Enter target number"
          value={target}
          onChange={handleTargetChange}
          className="p-2 outline-none rounded-2xl border-2 border-black"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-green-800 rounded-2xl border border-white"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          Search
        </button>
      </div>
      <div className="pt-4">
        {index !== -1 ? (
          <p className="text-green-700 font-bold text-xl">
            Index of ({target}: {index})
          </p>
        ) : (
          <p className="pt-2">Target not found</p>
        )}
      </div>
    </div>
  );
};

export default BinarySearch;
