import { ADD_ITEM, ITEM_REQUEST, GET_ITEMS } from './actionTypes'
const axios = require('axios')

export const itemRequest = () => ({
  type: ITEM_REQUEST
})
export const addItem = item => ({
  type: ADD_ITEM,
  item
})

export const getItems = items => ({
  type: GET_ITEMS,
  items
})

export const startAddItem = (itemData = {}) => {
  return async dispatch => {
    const {
      itemGroup = '',
      itemName = '',
      itemPriceOne = 0,
      itemPriceOneCount = 0,
      itemPriceTwo = 0,
      itemPriceTwoCount = 0,
      itemPriceThree = 0,
      itemPriceThreeCount = 0,
      itemDescription = '',
      image = ''
    } = itemData
    const item = {
      itemGroup,
      itemName,
      itemPriceOne,
      itemPriceOneCount,
      itemPriceTwo,
      itemPriceTwoCount,
      itemPriceThree,
      itemPriceThreeCount,
      itemDescription,
      image
    }
    const dataForm = new FormData()
    dataForm.append('itemGroup', item.itemGroup)
    dataForm.append('itemName', item.itemName)
    dataForm.append('itemPriceOne', item.itemPriceOne)
    dataForm.append('itemPriceOneCount', item.itemPriceOneCount)
    dataForm.append('itemPriceTwo', item.itemPriceTwo)
    dataForm.append('itemPriceTwoCount', item.itemPriceTwoCount)
    dataForm.append('itemPriceThree', item.itemPriceThree)
    dataForm.append('itemPriceThreeCount', item.itemPriceThreeCount)
    dataForm.append('itemDescription', item.itemDescription)
    dataForm.append('image', item.image)
    let res = await axios.post('/api/add_item', dataForm)
    dispatch(addItem({ ...res.data }))
  }
}
