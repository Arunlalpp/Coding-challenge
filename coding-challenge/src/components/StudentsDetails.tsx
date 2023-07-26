import React, { useState } from "react";

import { Students } from "./StudentsTypes";

export interface StudentsDetailsProps {
  name: string;
  teacherName: string;
  students: Students[];
}

export default function StudentsDetails({
  name,
  teacherName,
  students,
}: StudentsDetailsProps) {
  const initialStudentsInfo = {
    id: 0,
    name: "",
    marks: [],
  };
  const [studentsInfo, setStudentsInfo] = useState<Students[]>([]);
  const [currentStudent, setCurrentStudent] =
    useState<Students>(initialStudentsInfo);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleAddStudent = () => {
    setStudentsInfo((prevStudents) => [...prevStudents, currentStudent]);
    console.log({ currentStudent });

    setCurrentStudent(initialStudentsInfo);
  };

  const handleEditStudent = (student: Students) => {
    setIsEditing(true);
    setCurrentStudent(student);
  };

  const handleUpdateStudent = () => {
    setStudentsInfo((prevStudents) =>
      prevStudents.map((student) =>
        student.id === currentStudent.id ? currentStudent : student
      )
    );
    setCurrentStudent(initialStudentsInfo);
    setIsEditing(false);
  };

  const handleDeleteStudent = (id: number) => {
    setStudentsInfo((prevStudents) =>
      prevStudents.filter((students) => students.id)
    );
  };

  return (
    <div className="bg-green-800 p-4 h-1/2 w-full rounded-2xl shadow-xl flex flex-col justify-center items-center">
      <h1 className="text-xl font-semibold text-yellow-600 p-2">
        Student Details
      </h1>
      <form>
        <div>
          <label className="px-2">Name:</label>
          <input
            className="p-2 rounded-2xl border-2 border-red-950"
            type="text"
            name="name"
            value={currentStudent.name}
            onChange={handleInputChange}
          />
          <span className="pl-2">{currentStudent.name}</span>
        </div>
        {isEditing ? (
          <div className="flex justify-center items-center gap-10 py-4">
            <button
              type="button"
              onClick={handleUpdateStudent}
              className="bg-green-900 rounded-xl p-2 border border-black w-1/2"
            >
              Update Student
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-green-900 rounded-xl p-2 border border-black  w-1/2"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center py-4">
            <button
              type="button"
              onClick={handleAddStudent}
              className="bg-green-900 rounded-xl p-2 border border-black  w-1/2"
            >
              Add Student
            </button>
          </div>
        )}
      </form>
      <ul>
        {studentsInfo.map((student) => (
          <li key={student.id}>
            <div className="w-full flex justify-center items-center gap-5">
              <button
                className="bg-blue-900 rounded-xl p-2 border border-black"
                type="button"
                onClick={() => handleEditStudent(student)}
              >
                Edit
              </button>
              <button
                className="bg-red-900 rounded-xl p-2 border border-black"
                type="button"
                onClick={() => handleDeleteStudent(student.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
