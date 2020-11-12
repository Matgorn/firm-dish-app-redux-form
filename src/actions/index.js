export const setDishType = (dishType) => {
    return {
        type: 'SET_DISH_TYPE',
        payload: dishType
    }
}

export const submitForm = (formObject) => {
    return {
        type: 'SUBMIT_FORM',
        payload: formObject
    }
}