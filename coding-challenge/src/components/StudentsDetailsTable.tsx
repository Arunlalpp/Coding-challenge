import React, { useState } from "react";

import defaultStudentsData from "../studentsData";

export default function StudentsDetailsTable() {
  // This is the hardcoded values
  const teacherName = "TeacherName";
  const className = "Class";
  const studentsInfo = defaultStudentsData.students;

  const tableHeaderData = ["name", "id"];
  const StudentSubjects = [
    "English",
    "Maths",
    "Physics",
    "Chemistry",
    "Computer",
    "Action",
  ];

  const currentStudent = {
    name: "Arun",
    id: "111",
    marks: [
      { subject: "English", mark: 25 },
      { subject: "Maths", mark: 48 },
      { subject: "Physics", mark: 40 },
      { subject: "Chemistry", mark: 30 },
      { subject: "Computer", mark: 20 },
    ],
  };

  
  const [students, setStudents] = useState(studentsInfo);

  const addStudent = () => {
    setStudents([...students, currentStudent]);
  };

  return (
    <div>
      <div className="flex justify-around items-center">
        <div className="flex flex-col justify-center items-center py-4">
          <span className="text-lg">
            {className}:
            <span className="text-xl font-semibold pl-2">
              {defaultStudentsData.name}
            </span>
          </span>
          <span>
            {teacherName}:
            <span className="text-xl font-semibold pl-2">
              {defaultStudentsData.teacherName}
            </span>
          </span>
        </div>
        <div className="">
          <button
            className="p-2 border border-black bg-green-900 w-full"
            type="button"
            onClick={addStudent}
          >
            Add
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableHeaderData.map((header, index) => (
                <th scope="col" className="px-6 py-3" key={index}>
                  {header}
                </th>
              ))}
              {StudentSubjects.map((subjects, index) => {
                const key = `${subjects}-${index}`;
                return <td key={key}>{subjects}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {students.map((info) => (
              <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={info.id}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {info.name}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {info.id}
                </td>
                {info.marks.map((mark) => (
                  <td
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    key={mark.mark}
                  >
                    {mark.mark}
                  </td>
                ))}
                <div className="flex items-center gap-4 py-2">
                  <button
                    className="p-2 border border-red-900 w-1/2"
                    type="button"
                    onClick={() => {}}
                  >
                    Delete
                  </button>
                  <button
                    className="p-2 border border-blue-900 w-1/2"
                    type="button"
                    onClick={() => {}}
                  >
                    Edit
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
