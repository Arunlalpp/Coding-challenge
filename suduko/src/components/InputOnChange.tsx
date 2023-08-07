import React, { useState } from "react";

export interface TPoint {
  x: number;
  y: number;
}

function InputOnChange() {
  const [points, setPoints] = useState<TPoint[]>([]);
  const [popped, setPopped] = useState<TPoint[]>([]);

  const handleOnChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    setPoints([
      ...points,
      {
        x: clientX,
        y: clientY,
      },
    ]);
    console.log(points);
  };

  const handleUndo = () => {
    const newPoints = [...points];
    const poppedPoints = newPoints.pop();
    if (!poppedPoints) {
      return;
    }
    setPopped([...popped, poppedPoints]);
    setPoints(newPoints);
  };

  const handleRedo = () => {
    const newPopped = [...popped];
    const poppedPoints = popped.pop();
    if (!poppedPoints) return;

    setPoints([...points, poppedPoints]);
    setPopped(newPopped);
  };

  const handleClear = () => {
    setPoints([]);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        <button
          disabled={points.length === 0}
          onClick={handleUndo}
          type="button"
          className="py-2 px-4 bg-violet-800 text-white rounded-lg"
        >
          Undo
        </button>
        <button
          disabled={popped.length === 0}
          onClick={handleRedo}
          type="button"
          className="py-2 px-4 bg-violet-800 text-white rounded-lg"
        >
          Redo
        </button>
        <button
          onClick={handleClear}
          type="button"
          className="py-2 px-4 bg-violet-800 text-white rounded-lg"
        >
          Clear
        </button>
      </div>
      <div
        className="bg-red-300 relative h-screen w-screen flex justify-center items-center"
        onClick={handleOnChange}
        role="button"
      >
        {points.map((point, idx) => (
          <div
            key={idx}
            className="absolute inline-block rounded-full h-3.5 w-3.5 bg-blue-900"
            style={{ left: point.x - 5 + "px", top: point.y - 5 + "px" }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default InputOnChange;
