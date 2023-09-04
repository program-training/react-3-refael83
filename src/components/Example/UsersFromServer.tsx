import { useState,useEffect} from "react";
import { UserCard } from "../../UserCard/UserCard";

interface user{
  id:number,
  name:string,
  username:string,
  email:string
}

export function UsersFromServer():JSX.Element{
  const [items, setItems] = useState<user[]>([]);
  let result:user[]=[]
useEffect(() => {
const fetchItems = async () => {
  let response=await fetch("https://jsonplaceholder.typicode.com/users")
  result = await response.json()
 
  if(!response.ok){
    throw new Error(response.statusText)
  }
  else{
  setItems(result)
  
  }
  }
  fetchItems()
  },[])
  console.log(items)
return(
  <div>
     {items.map((user)=>{
      return <div ><UserCard username={user.username} email={user.email} id={user.id} key={user.name}></UserCard></div>
     })}
  </div>
)
}
