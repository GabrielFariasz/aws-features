export interface Task {
  id?: string,
  name: string,
  description: string,
  expirationDate: string,
  creationDate: string,
  status: string,
  owner: string
}


export interface AddTask {
  name: string,
  description: string,
  expirationDate: string,
  status?: string,
  owner?: string
}


export interface GetTaskParams<T> {
  id: T
}