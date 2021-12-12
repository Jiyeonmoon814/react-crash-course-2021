import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const TaskDetails = () => {
    const [loding, setLoading] = useState(true)
    const [task, setTask] = useState({})
    const [error, setError] = useState(null)

    const params = useParams()

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:4000/tasks/${params.id}`)
            const data = await res.json()

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
        </div>
    )
}
