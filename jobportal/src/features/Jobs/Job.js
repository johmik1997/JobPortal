import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'
import { useGetJobsQuery } from './jobsApiSlice'
import { memo } from 'react'

const Job = ({ jobId }) => {

    const { job } = useGetJobsQuery("jobsList", {
        selectFromResult: ({ data }) => ({
            job: data?.entities[jobId]
        }),
    })

    const navigate = useNavigate()

    if (job) {
        const created = new Date(job.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(job.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/jobs/${jobId}`)

        return (
            <tr className="table__row">
                <td className="table__cell job__status">
                    {job.completed
                        ? <span className="job__status--completed">Completed</span>
                        : <span className="job__status--open">Open</span>
                    }
                </td>
                <td className="table__cell job__created">{created}</td>
                <td className="table__cell job__updated">{updated}</td>
                <td className="table__cell job__title">{job.title}</td>
                <td className="table__cell job__username">{job.username}</td>

                <td className="table__cell">
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}

const memoizedJob = memo(Job)

export default memoizedJob