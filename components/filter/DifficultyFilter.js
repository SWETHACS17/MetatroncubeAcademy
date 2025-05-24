import { useDispatch, useSelector } from "react-redux"
import { addDifficulty } from "../../features/courseFilterSlice"
import { difficultyCheck } from "../../features/courseSlice"

const DifficultyFilter = () => {
    const { difficulty } = useSelector((state) => state.course) || {}
    const dispatch = useDispatch()

    // instructor handler
    const difficultyHandler = (e, id) => {
        dispatch(addDifficulty(e.target.value))
        dispatch(difficultyCheck(id))
    }

    return (
        <ul className="list-wrap">
            
        </ul>
    )
}

export default DifficultyFilter