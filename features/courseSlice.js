import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    latestJob: [],

    category: [
      
    ],
    instructors: [
       
    ],
    price: [
       
    ],
    language: [
      
    ],
    difficulty: [
       
    ],
    rating: [
      
    ],
}

export const jobSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        categoryCheck: (state, { payload }) => {
            state?.category?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },
        clearCategoryToggle: (state) => {
            state?.category?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },

        instructorsCheck: (state, { payload }) => {
            state?.instructors?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },
        clearInstructorToggle: (state) => {
            state?.instructors?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },

        priceCheck: (state, { payload }) => {
            state?.price?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },
        clearPriceToggle: (state) => {
            state?.price?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },

        languageCheck: (state, { payload }) => {
            state?.language?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },
        clearLanguageToggle: (state) => {
            state?.language?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },

        difficultyCheck: (state, { payload }) => {
            state?.difficulty?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },
        clearDifficultyToggle: (state) => {
            state?.difficulty?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },
    },
})

export const {
    instructorsCheck,
    categoryCheck,
    priceCheck,
    languageCheck,
    difficultyCheck,
    clearInstructorToggle,
    clearCategoryToggle,
    clearPriceToggle,
    clearLanguageToggle,
    clearDifficultyToggle,
} = jobSlice.actions

export default jobSlice.reducer
