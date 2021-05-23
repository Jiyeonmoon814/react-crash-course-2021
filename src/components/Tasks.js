import {useState} from 'react'

export const Tasks = () => {
    const [tasks, setTasks] = useState( [
        {
            id:1,
            text : 'Morning meeting',
            day : 'May 24th at 11:00',
            reminder:true,
        },
        {
            id:2,
            text : 'Lunch',
            day : 'May 24th at 13:00',
            reminder:true,
        },
        {
            id:3,
            text : 'Work out',
            day : 'May 24th at 20:30',
            reminder:true,
        }
    ])
    
    return (
        <>
            {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks
