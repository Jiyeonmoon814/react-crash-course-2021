// import React from 'react'
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

 function App() {
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

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id!==id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  //!task.reminder means set an opposite thing if it's true it would be false after doubleclicking
  setTasks(tasks.map((task)=>task.id===id ? {...task,reminder:!task.reminder} : task))
}
   return (
     <div className="container">
       <Header />
       <AddTask />
      {tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) 
        : ('No Tasks To show')}
     </div>
   )
 }
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
