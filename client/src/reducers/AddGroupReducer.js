import { GET_GROUPS } from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case 'GROUP_REQUEST':
      return [...state]
    case GET_GROUPS:
      return action.groups
    case 'ADD_GROUP':
      return [...state, action.group]
    case 'REMOVE_GROUP':
      return state.filter(({ _id }) => _id !== action._id)
    default:
      return state
  }
}
