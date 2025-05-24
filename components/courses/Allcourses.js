import { useDispatch, useSelector } from "react-redux"
import jobs from "../../data/courses.json"

import CourseCard from "./CourseCard"

const Allcourses = () => {
    const { courseList, courseSort } = useSelector((state) => state.courseFilter)
    const {
    } = courseList || {}

    const { sort, perPage } = courseSort
    const dispatch = useDispatch()

    

    // sort filter
    const sortFilter = (a, b) =>
        sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1

    let content = jobs
        ?.sort(sortFilter)
        .slice(perPage.start, perPage.end !== 0 ? perPage.end : 12)
        ?.map((item) => (
            <div className="col" key={item.id}>

                <CourseCard item={item} />
            </div>

            // End all jobs
        ))

    // sort handler
    const sortHandler = (e) => {
        dispatch(addSort(e.target.value))
    }

    // per page handler
    const perPageHandler = (e) => {
        const pageData = JSON.parse(e.target.value)
        dispatch(addPerPage(pageData))
    }

    // clear all filters
    const clearAll = () => {
        dispatch(addSort(""))
        dispatch(addPerPage({ start: 0, end: 0 }))
    }

    return (
        <>
            <div className="shop-top-wrap courses-top-wrap">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="shop-top-left">
                            <p>Showing all {content?.length} results</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                            <div>
                                {
                                  
                                        
                                        sort !== "" ||
                                        perPage.start !== 0 ||
                                        perPage.end !== 0
                                        ? (
                                            <button
                                                onClick={clearAll}
                                                className="btn btn-reset text-nowrap me-2"
                                            >
                                                Reset
                                            </button>
                                        ) : undefined
                                }
                            </div>
                            <div className="shop-top-right m-0 ms-md-auto">
                                <select
                                    value={sort}
                                    name="orderby" className="orderby"
                                    onChange={sortHandler}
                                >
                                    <option value="">Sort by (default)</option>
                                    <option value="asc">Newest</option>
                                    <option value="des">Oldest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row courses__grid-wrap row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                {content}
            </div>

        </>
    )
}

export default Allcourses
