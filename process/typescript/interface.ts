// // Define the interfaces for the data types we are working with.
// export interface Server {
//   loading: boolean,   //has the service loaded
//   connected: boolean, //has a socket connection established
//   joined: boolean,    //has the user joined the chat
//   online: string      //names of users currently in the chat
// }
export interface Room {
  name: string,
  secretCode: string,
  online: string
}

export interface User {
  name: string
}

export interface ErrorState {
  secretCodeError: boolean
}

export interface StudentConnections {
  number: number
}

export interface TotalNumberOfReadyStudents {
  number: number
}

export interface IsStudentReady {
  status: boolean
}
