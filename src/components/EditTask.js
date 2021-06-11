import { useState } from 'react'


const EditTask = ({task, onEdit}) => {
    const [id] = useState(task.id)
    const [text, setText] = useState(task.text)
    const [day, setDay] = useState(task.day)
    const [reminder, setReminder] = useState(task.reminder)
    const [hidden, setHidden] = useState(!task.hidden)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(reminder)
        if(!text){
            alert('Please fill a task')
            return
        }
        
        onEdit({id,text,day,reminder,hidden})
        
        setText(text)
        setDay(day)
        setReminder(reminder)
        setHidden(hidden)
        
    }

    

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <label>Update Task</label>
                <input type='text' placeholder={task.text} value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Update Day & Time</label>
                <input type='text' placeholder={task.day} value={day} onChange={(e)=>setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Update Reminder</label>
                <input type='checkbox' checked={task.reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Update Task' class='btn btn-block' />
        </form>
    )
}

export default EditTask
