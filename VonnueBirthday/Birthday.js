const SUNDAY = 0;
const SATURDAY = 6;
const SECOND_SATURDAY_COUNT = 2;
const TODAY = new Date(2023, 7, 4);
const THIS_YEAR = TODAY.getFullYear();

const BirthdayArr = {
  one: [
    "2023-07-01",
    "2023-07-04",
    "2023-07-06",
    "2023-07-09",
    "2023-07-10",
    "2023-07-15",
  ],
  two: ["2023-07-09", "2023-07-10"],
  three: ["2023-01-01"],
  test: [
    "1965-05-10",
    "1965-05-10",
    "1976-08-12",
    "1988-07-10",
    "1988-07-27",
    "1992-01-21",
    "1992-03-15",
    "2001-12-01",
    "2023-07-01",
    "2023-08-05",
  ],
};

const holidaysArr = {
  one: ["2023-07-01", "2023-07-22", "2023-07-11"],
  two: ["2023-07-15", "2023-07-04", "2023-07-01"],
};
const dateFormater = (dateArr) => {
  const dateObj = {};
  dateArr.forEach((dateString) => {
    const date = new Date(dateString);
    date.setFullYear(THIS_YEAR);
    const month = date.getMonth();
    if (dateObj.hasOwnProperty(month)) {
      dateObj[month].push(date.getDate());
    } else {
      dateObj[month] = [date.getDate()];
    }
  });
  return dateObj;
};

const holidaysOnSaturday = (holidayArr, month) => {
  const holidaysOnSaturdayArr = [];
  holidayArr?.forEach((holiday) => {
    const date = new Date(THIS_YEAR, month, holiday);
    if (date.getDay() === SATURDAY) {
      holidaysOnSaturdayArr.push(date.getDate());
    }
  });
  return holidaysOnSaturdayArr;
};

const findWeekNumber = (date) => {
  const weekNumber = Math.ceil(
    ((date.setUTCDate(date.getUTCDate() + 6 - date.getUTCDay()) -
      date.setUTCMonth(0, 1)) /
      86400000 +
      date.getUTCDay() +
      1) /
      7
  );
  return weekNumber;
};

const findCakeCuttingCounts = (
  month,
  birthdayDatesArr,
  noCakeSaturdays,
  birthdayWeekNumber
) => {
  let day = 1,
    date = new Date(THIS_YEAR, month, day),
    saturdayHolidayWeeks = [],
    saturdayCount = 1;
  while (date.getMonth() == month) {
    if (date.getDay() === SATURDAY) {
      if (saturdayCount === SECOND_SATURDAY_COUNT) {
        noCakeSaturdays.push(day);
      }
      saturdayCount += 1;
    }
    while (birthdayDatesArr.includes(day)) {
      birthdayDatesArr.splice(birthdayDatesArr.indexOf(day), 1);
      let weekNo = findWeekNumber(new Date(THIS_YEAR, month, day));
      if (date.getDay() === SUNDAY) {
        weekNo += 1;
      }
      birthdayWeekNumber[weekNo] = (birthdayWeekNumber[weekNo] || 0) + 1;
    }
    if (noCakeSaturdays.includes(day)) {
      let weekNo = findWeekNumber(new Date(THIS_YEAR, month, day));
      saturdayHolidayWeeks.push(weekNo);
    }
    day += 1;
    date = new Date(THIS_YEAR, month, day);
  }
  saturdayHolidayWeeks.forEach((week) => {
    if (birthdayWeekNumber.hasOwnProperty(week)) {
      let transferBirthday = birthdayWeekNumber[week];
      birthdayWeekNumber[week] = 0;
      birthdayWeekNumber[week + 1] =
        (birthdayWeekNumber[week + 1] || 0) + transferBirthday;
    }
  });
};

const alertAkashy = () => {
  const birthdayWeekNumber = {};
  const birthDayObj = dateFormater(BirthdayArr.test);
  const holidayObj = dateFormater(holidaysArr.two);
  for (const month in birthDayObj) {
    const noCakeSaturdays = holidaysOnSaturday(holidayObj[month], month);

    console.log({ noCakeSaturdays });
    findCakeCuttingCounts(
      month,
      birthDayObj[month],
      noCakeSaturdays,
      birthdayWeekNumber
    );
  }
  const todayWeekNo = findWeekNumber(TODAY);
  if (birthdayWeekNumber.hasOwnProperty(todayWeekNo)) {
    console.log(
      `Alert Akashy this week has ${birthdayWeekNumber[todayWeekNo]} birthday celebration/s`
    );
  }
};

alertAkashy();
