import React, { useState } from "react";

export interface TPoint {
  x: number;
  y: number;
}

function InputOnChange() {
  const [points, setPoints] = useState<TPoint[]>([]);
  const handleOnChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY } = e;

    setPoints([
      ...points,
      {
        x: pageX,
        y: pageY,
      },
    ]);
    console.log(points);
  };

  return (
    <div
      className="bg-red-300 relative h-screen w-screen"
      onClick={handleOnChange}
      role="button"
    >
      {points.map((point) => (
        <div
          className="absolute inline-block rounded-full h-3.5 w-3.5 bg-blue-900"
          style={{ left: point.x + "px", top: point.y + "px" }}
        ></div>
      ))}
    </div>
  );
}

export default InputOnChange;
