import { ComponentDto } from "./ComponentDto"
import { UserDto } from "./UserDto"

export class WorkflowDto {

    name : string 
    users : UserDto[]
    component : ComponentDto[]
}