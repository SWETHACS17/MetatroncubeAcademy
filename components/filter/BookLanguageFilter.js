import { useDispatch, useSelector } from "react-redux"
import { addLanguage } from "../../features/bookFilterSlice"
import { languageCheck } from "../../features/bookSlice"

const BookLanguageFilter = () => {
    const { language } = useSelector((state) => state.book) || {}
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

export default BookLanguageFilter
