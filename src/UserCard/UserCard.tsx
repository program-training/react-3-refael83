
//import { UsersFromServer } from "../components/Example/UsersFromServer";
import { UserTasks } from "../UserTasks/UserTasks"
interface user{
    id:number
    username:string
    email:string
}
export function UserCard(user:user):JSX.Element{
     return(
        <div>
            <div ><p>username:{user.username}</p>
            <p>email:{user.email}</p>
            <UserTasks id={user.id} ></UserTasks>
            </div>
        </div>
     )
}