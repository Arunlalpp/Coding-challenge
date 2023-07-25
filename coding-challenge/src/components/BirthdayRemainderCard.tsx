import React from "react";

export interface BirthdayRemainderProps {
  profileURL: string;
  name: string;
  age: string[];
}

export default function BirthdayRemainderCard({
  profileURL,
  name,
  age,
}: BirthdayRemainderProps) {
  return (
    <div className="py-2">
      <div className="bg- bg-green-900 rounded-xl p-4 w-80 h-28 shadow-xl flex flex-col justify-center gap-4">
        <div className="w-14 h-10">
          <img src={profileURL} alt="profile" />
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <span className="font-medium text-lg text-yellow-700">{name}:</span>
          <p className="text-base font-normal text-yellow-700">{age}</p>
        </div>
      </div>
    </div>
  );
}
