import { useDispatch, useSelector } from "react-redux"
import { addPrice } from "../../features/courseFilterSlice"
import { priceCheck } from "../../features/courseSlice"

const PriceFilter = () => {
    const { price } = useSelector((state) => state.course) || {}
    const dispatch = useDispatch()

    // instructor handler
    const priceHandler = (e, id) => {
        dispatch(addPrice(e.target.value))
        dispatch(priceCheck(id))
    }

    return (
        <ul className="list-wrap">
            
        </ul>
    )
}

export default PriceFilter
