const axios = require('axios');

const addItem = (item) => ({
    type: 'ADD_ITEM',
    item
});

export const startAddItem = (itemData ={}) => {
    return async dispatch => {
        const {
            itemGroup = '',
            itemName = '',
            itemPriceOne = 0,
            itemPriceOneCounter = 0,
            itemPriceTwo = 0,
            itemPriceTwoCounter = 0,
            itemPriceThree = 0,
            itemPriceThreeCounter = 0,
            itemDescription = '',
            itemImage = '' 
        } = itemData;
        const item = {
            itemGroup,
            itemName,
            itemPriceOne,
            itemPriceOneCounter,
            itemPriceTwo,
            itemPriceTwoCounter,
            itemPriceThree,
            itemPriceThreeCounter,
            itemDescription,
            itemImage    
        };
        const dataForm = new FormData();
        dataForm.append('itemGroup', item.itemGroup);
        dataForm.append('itemName', item.itemName);
        dataForm.append('itemPriceOne', item.itemPriceOne);
        dataForm.append('itemPriceOneCounter', item.itemPriceOneCounter);
        dataForm.append('itemPriceTwo', item.itemPriceTwo);
        dataForm.append('itemPriceTwoCounter', item.itemPriceTwoCounter);
        dataForm.append('itemPrceThree', item.itemPriceThree);
        dataForm.append('itemPriceThreeCounter', item.itemPriceThreeCounter);
        dataForm.append('itemDescription', item.itemDescription);
        dataForm.append('itemImage', item.itemImage);
        let res = await axios.post('/api/add_item', dataForm);
        dispatch(addItem({...res.data}));

    };
};