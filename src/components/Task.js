import { FaTimes } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EditTask from './EditTask';

const Task = ({task , onDelete, onToggle, onEdit}) => {
    const [showEditTask, setShowEditTask] = useState(false)

    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} {' '}
                <div>
                <FaEdit style={{color:'grey',cursor:'pointer'}}
                    onClick={(e) => setShowEditTask(!showEditTask)}  showAdd={showEditTask} />
                <FaTimes style={{color:'red',cursor:'pointer'}} 
                    onClick={ () => onDelete(task.id)}/>
                </div>
            </h3>
            <p>{task.day}</p>
            <p><Link to={`/task/${task.id}`}>View Detais</Link></p>
            <div> {showEditTask && <EditTask task={task} onEdit={onEdit} /> }</div>
        </div>
    )
}

export default Task
