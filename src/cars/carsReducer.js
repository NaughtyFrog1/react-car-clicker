const carsReducer = (state, action) => {
  switch (action.type) {
    case 'vote':
      const carIndex = state.findIndex(({ id }) => id === action.payload.id)
      const newState = [...state]
      newState[carIndex].clickCount += 1;

      return newState
    default:
      return state
  }
}

export default carsReducer
