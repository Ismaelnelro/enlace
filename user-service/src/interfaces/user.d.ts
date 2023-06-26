import { StatusUser } from '../utils/enums'

export interface User {
    username: String
    firstname: String
    lastname: String
    email: string
    password: string
    avatar: string
    workfield?: string[]
    workingmodality?: string[]
}