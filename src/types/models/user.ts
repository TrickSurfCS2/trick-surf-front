export interface User {
  id: string
  password: string
  login: string

  createdAt?: Date
  updatedAt?: Date

  role: Role
}

export enum Role {
  User = 'User',
  Admin = 'Admin',
}
