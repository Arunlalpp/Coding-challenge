// import defaultBirthdayData from "./birthdayData";
// import BirthdayRemainderCard from "./components/BirthdayRemainderCard";

function App() {
  // const currentYearBirthday = (userInfo: string[], age: string[]) => {
  //   const filteredDate = userInfo.filter((userInfo) => age.includes(userInfo));
  //   console.log({ filteredDate });
  //   return filteredDate;
  // };

  // const birthdayData = () => {
  //   defaultBirthdayData.userInfo.forEach((day) => {
  //     let ages = day.age;
  //     currentYearBirthday(day.age, ages);
  //   });
  // };

  // const UTCTimes = [
  //   "2023-07-29T06:04:32Z",
  //   "2023-07-29T06:04:32Z",
  //   "2023-07-29T06:04:32Z",
  // ];

  // const getFormattedDateWithWeekDay = (UTCTimes: string[]) => {
  //   UTCTimes.map(
  //     (time) => (
  //       // eslint-disable-next-line no-sequences
  //       new Date(time).getDay(),
  //       new Date(time).getMonth(),
  //       new Date(time).getMonth(),
  //       new Date(time).getFullYear()
  //     )
  //   );
  //   const a = new Date('2023-07-29T06:04:32Z').getDate()
  //   return `${a}`
  // };

  // const calculate_age = (dob: any) => {
  //   console.log({ currentYearBirthday });

  //   const diff_ms = Date.now() - dob.getTime();
  //   const age_dt = new Date(diff_ms);

  //   return Math.abs(age_dt.getUTCFullYear() - 0);
  // };
  // const b = new Date(30 - 9 - 1959);

  return (
    <div className="bg-slate-600">
      {/* <div onClick={birthdayData} role="button">
        {getFormattedDateWithWeekDay(UTCTimes)}

        {defaultBirthdayData.userInfo.map((userInfo, index) => {
          return (
            <BirthdayRemainderCard
              key={index}
              age={userInfo.age}
              name={userInfo.name}
              profileURL={userInfo.profileURL}
            />
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
