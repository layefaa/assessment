import {IClass, ISubject} from "@/types";

const baseUrl = 'http://localhost:3001';
const classUrl = `${baseUrl}/classes`;
const subjectUrl = `${baseUrl}/subjects`;


export const fetchSubjects = async (): Promise<ISubject[] | []> => {
  const res = await fetch(subjectUrl)
  return await res.json();
}

export const fetchSubject = async (id: number): Promise<ISubject | {}> => {
  const res = await fetch(`${subjectUrl}/${id}`)
  return await res.json()
}

const fetchClasses = async (): Promise<IClass> => {
  const res = await fetch(classUrl);
  return await res.json();
}

export const fetchClassesRelatedToSubject = async (id: number): Promise<IClass[] | []> => {
  const subjectId = id
  const classes = await fetchClasses()
  return classes.filter((s: any) =>
     s.subjectId === subjectId
  );
}


export const createClass = async (newClass: IClass) => {
  const res = await fetch(classUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({...newClass, subjectId: Number(newClass.subjectId)}),
  })

  return await res.json();
}












