export interface Marks {
  subject: string;
  mark: number;
}

export interface Students {
  name: string;
  id: number;
  marks: Marks[];
}

export interface StudentsData {
  name: string;
  teacherName: string;
  students: Students[];
}
