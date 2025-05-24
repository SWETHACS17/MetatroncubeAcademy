import { useDispatch, useSelector } from "react-redux"
import { addLanguage } from "../../features/courseFilterSlice"
import { languageCheck } from "../../features/courseSlice"

const LanguageFilter = () => {
    const { language } = useSelector((state) => state.course) || {}
    const dispatch = useDispatch()

    // instructor handler
    const languageHandler = (e, id) => {
        dispatch(addLanguage(e.target.value))
        dispatch(languageCheck(id))
    }

    return (
        <ul className="list-wrap">
            
        </ul>
    )
}

export default LanguageFilter
