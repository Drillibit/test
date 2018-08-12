import { GET_GROUPS, ADD_GROUP, GROUP_REQUEST } from './actionTypes'
import axios from 'axios'

export const groupRequest = () => ({
  type: GROUP_REQUEST
})
export const getGroups = groups => ({
  type: GET_GROUPS,
  groups
})
export const addGroup = group => ({
  type: ADD_GROUP,
  group
})

export const startAddGroup = (groupData = {}) => {
  return async dispatch => {
    const { groupName = '', subGroup = '' } = groupData
    const group = {
      groupName,
      subGroup
    }
    let res = await axios.post('/api/add_groups', group)
    dispatch(addGroup({ ...res.data }))
  }
}
