import { useDispatch, useSelector } from "react-redux"
import { addInstructor } from "../../features/courseFilterSlice"
import { instructorsCheck } from "../../features/courseSlice"

const instructorLevel = () => {
    const { instructors } = useSelector((state) => state.course) || {}
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
export default instructorLevel
