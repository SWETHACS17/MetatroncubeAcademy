import { useDispatch, useSelector } from "react-redux"
import { addInstructor } from "../../features/bookFilterSlice"
import { instructorsCheck } from "../../features/bookSlice"

const BookInstructor = () => {
    const { instructors } = useSelector((state) => state.book) || {}
    const dispatch = useDispatch()

    // instructor handler
    const instructorHandler = (e, id) => {
        dispatch(addInstructor(e.target.value))
        dispatch(instructorsCheck(id))
    }

    return (
        <ul className="list-wrap">
           
        </ul>
    )
}

export default BookInstructor
