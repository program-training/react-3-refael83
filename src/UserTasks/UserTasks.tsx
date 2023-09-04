import {useRef,useState} from 'react'

interface task{
    userId:number,
    id:number,
    title:string,
}
const [tasks, setItems] = useState<task[]>([]);
let tasksArray:task[]=[]
const getData =async()=>{
    let tasksJ= await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
     tasksArray= await tasksJ.json()
     if(!tasksJ.ok){
        throw new Error(tasksJ.statusText)
      }
      else{
      setItems(tasksArray)
      
      }
    }
export  function  UserTasks  ({id}:{id:number}):JSX.Element{
    getData()
    let num=useRef(0)
    return (<div>
        {tasks.map((task)=>{if(num.current<=5){
           return <p></p>;
           num.current=num.current+1;
           console.log(num.current)
        }
    })}
    </div>)
}