export type PersonType = {
  id: number;
  name: string;
}
export type ClientType = PersonType & {
  client: boolean;
}
export type StaffType = PersonType & {
  role: string;
}

export const visitors: PersonType[] = [
  { id: 1, name: 'Peter' }, 
  { id: 2, name: 'Mark' }, 
  { id: 3, name: 'Julie' },
]

export const clients: ClientType[] = [
  { id: 4, name: 'John', client: true }, 
  { id: 5, name: 'Emily', client: true }, 
  { id: 6, name: 'Sophie', client: true },
]

export const staff: StaffType[] = [
  { id: 7, name: 'Frank', role: 'Trainee' }, 
  { id: 8, name: 'Justine', role: 'Manager' }, 
  { id: 9, name: 'Ann', role: 'Assistent' },
]