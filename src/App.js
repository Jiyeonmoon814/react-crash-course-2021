// import React from 'react'
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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
  console.log('delete',id)
}
   return (
     <div className="container">
       <Header />
       <Tasks tasks={tasks} onDelete={deleteTask}/>
     </div>
   )
 }
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
