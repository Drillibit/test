import axios from 'axios'

export const getGroup = async () => {
  const res = await axios.get('/api/get_groups')
  console.log(res)
  return res
}
export const getItem = async () => {
  const res = await axios.get('/api/get_items')
  return res
}
