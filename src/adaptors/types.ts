export interface IAPIUsersDisplayData {
  id: number;
  fullName: string;
  age: number;
  gender: string;
  email: string;
  dateOfBirth: string;
  height: number;
  weight: number;
  address: string;
  department: string;
  role: string;
  university: string;
  company: string;
}

export interface IAdaptor<T> {
  adaptToModel(response: unknown): T;
}
