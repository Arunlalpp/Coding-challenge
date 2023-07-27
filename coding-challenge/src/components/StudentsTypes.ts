export interface Marks {
  subject: string;
  mark: number;
}

export interface Students {
  name: string;
  id: string;
  marks: Marks[];
}

export interface StudentsData {
  name: string;
  teacherName: string;
  students: Students[];
}
