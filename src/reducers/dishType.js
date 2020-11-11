export const dishType = (state = '', action) => {
    if(action.type === 'SET_DISH_TYPE') {
        return action.payload;
    }
    return state;
}
