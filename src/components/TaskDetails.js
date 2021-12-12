import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from './Button'

export const TaskDetails = () => {
    const [loding, setLoading] = useState(true)
    const [task, setTask] = useState({})

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:4000/tasks/${params.id}`)
            const data = await res.json()

            if(res.status === 404){
                navigate('/')
            }

            setTask(data)
            setLoading(false)
        }

        fetchTask()
    },[])

    return loding ? (
        <h3>Loading...</h3>
    ) : (
        <div>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <Button text='Go Back' onClick={() => navigate(-1)} />
        </div>
    )
}
