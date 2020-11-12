const submitReducer = (state = {}, { type, payload }) => {
  if(type === 'SUBMIT_FORM') {
    return payload
  }
  return state
}

export default submitReducer;