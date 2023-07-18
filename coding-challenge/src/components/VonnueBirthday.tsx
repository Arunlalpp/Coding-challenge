import React from "react";

import birthdayData from "../birthdayData";

export interface VonnueBirthdayProps {
  UTCTimes: string;
}

export function VonnueBirthday({ UTCTimes }: VonnueBirthdayProps) {
  const utcTime = [
    "2022-07-29T06:04:32Z",
    "2022-07-29T06:04:32Z",
    "2022-07-29T06:04:32Z",
  ];

  const birthdayDate = [
    "2022-07-29T06:04:32Z",
    "2022-07-15T06:04:32Z",
    "2022-07-08T06:04:32Z",
  ];
  const birthDay = utcTime.length;
  const getFormattedDateWithWeekDay = (UTCTime: string) => {
    const localDate = new Date(UTCTime);

    const day = birthdayData.weekDays[localDate.getDay()];
    const date = birthdayData.month[localDate.getMonth()];
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth()).padStart(2, "0");

    console.log({ day, date, year, month, birthDay }, birthdayData.weekDays);
  };
  const filterBirthdays = (birthdayDate: string[], utcTime: string[]) => {
    const date = birthdayDate.filter((birthDay) => utcTime.includes(birthDay));
    console.log("hello", { date });
    return date;
  };

  const birthDateArr = () => {
    birthdayData.month.map((day) => {
      if (birthdayDate) {
      }
      console.log({ day });

      return day;
    });
  };

  return (
    <div>
      <button type="button" onClick={birthDateArr}>
        Birthdays
      </button>
      {/* <div>{getFormattedDateWithWeekDay(UTCTimes)}</div> */}
    </div>
  );
}
