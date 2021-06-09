>The first thing to do to think in React, you need to break the UI into a component hierarchy

<br>

```jsx
const App = () => {
  return ()
}
```

<br>

>Keys help React identify which items have changed, are added, or are removed.
>Keys should be given to the elements inside the array to give the elements a stable identity
> >JSX allows embedding any expression in curly braces so we could inline the map() result.

<br>

```jsx
const Tasks = ( {tasks} ) => {
  return (
    <>
      {tasks.map((task)=>(
        <Task key={task.id} task={task} />
      )}
    </>
  )
}
```

<br>

```jsx
const Task = ({task}) => {
  return (
    <div className='task'
      <h3>{task.task} <FaTimes /></h3>
      <p>{task.day} </p>
    </div>
  )
}
```

<br>

>We've built an app that renders correctly as a function props and state flowing down the hierarchy.
>Now it's time to support data flowing the other way.<br>
>What I want to do is whenever I click X icon, I want it to be deleted. 

<br>

```jsx
//in Button.js 
const Button = ({text, onClick}) => {
  return (
    <button className='btn' onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
    text : PropTypes.string,
    onClick : PropTypes.func
}
```

<br>

```jsx 
//in Task.js 
const Task = ({task, onDelete}) => {
  retrun(
    <div className='task'>
      <h3>{task.task} {' '}
        <FaTimes onClick={()=>onDelete(task.id)} />
      </h3>
    ...
    </div>
  )
}
```

<br>

```jsx
//in Tasks.js
const Tasks = ({tasks,onDelete}) => {
  return(
  <>
    {tasks.map((task)=>(
    <Task key={task.id} task={task} onDelete={onDelete} />  
    )
  </>
  )
}
```

<br>

>Declare a new state variable, which we'll call "tasks"
>This is a way to preserve some values between the function calls,
>useState is a  new way to use the exact same capabilities that this.state provides in a class.

<br>

```jsx
//in App.js
const [tasks,setTasks] = useState(
  [
    {id:1,task:"Meeting",...},...
  ]
)
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id !== id))
}
...
{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No task to show'}
...
```

<br>


