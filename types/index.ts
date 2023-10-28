export interface ISubject {
  id: number;
  name: string;
  description: string;
}

export interface IClass {
  id?: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  subjectId: number;
}
