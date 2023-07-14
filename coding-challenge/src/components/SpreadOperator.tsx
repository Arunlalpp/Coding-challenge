import React from "react";

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: "2023",
  color: "black",
};

function SpreadOperator() {
  const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
  console.log({ myUpdatedVehicle });

  return (
    <div>
      <p>Need to console the data</p>
    </div>
  );
}

export default SpreadOperator;
