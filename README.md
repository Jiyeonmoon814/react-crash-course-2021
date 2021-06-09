>The first thing to do to think in React, you need to break the UI into a component hierarchy

<br>

### App.js 

<br>

```jsx
const App = () => {
  return ()
}
```

<br>

### Tasks.js
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

###Task.js

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
