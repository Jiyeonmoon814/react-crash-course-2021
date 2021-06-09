>The first thing to do to think in React, you need to break the UI into a component hierarchy

<br>

### App.js 

<br>

```react 
const App = () => {
  return ()
}
```

<br>

### Tasks.js

<br>

```react
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
