export default (state, action) => {
  switch(action.type) {
    case 'GET_INFO':
    return {
      ...state,
      loading: false,
      bullepoints: action.payload
    }
    case 'LOADING_ERROR':
    return {
      ...state,
      error: action.payload
    }
    case 'DELETE_POINT':
      return {
        ...state,
        bullepoints: state.bullepoints.filter(bulletpoint => bulletpoint._id !== action.payload)
      }
    case 'ADD_POINT':
      return {
        ...state,
        bullepoints: [...state.bullepoints, action.payload]
      }
    default:
      return state;
  }
}
