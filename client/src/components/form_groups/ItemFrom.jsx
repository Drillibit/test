import React, { Component } from 'react';

class ItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemGroup: props.item ? props.item.itemGroup : '',
            itemName: props.item ? props.item.itemName : '',
            itemPriceOne: props.item ? props.item.itemPriceOne : '',
            itemPriceOneCount: props.item ? props.item.itemPriceOneCount : '',
            itemPriceTwo: props.item ? props.item.itemPriceTwo : '',
            itemPriceTwoCount: props.item ? props.item.itemPriceTwoCount : '',
            itemPriceThree: props.item ? props.item.itemPriceThree : '',
            itemPriceThreeCount: props.item ? props.item.itemPriceThree : '',
            itemDescription: props.itme ? props.item.itemDescription : '',
            image: props.item ? props.item.image : '',
            error: ''
        }
    };

    handleInputChange = e => {
        const target = e.target,
              value = target.value,
              name = target.name
        this.setState({
            [name]: value
        });
    };
    
    onImageChange = e => {
        const image = e.target.files[0];
        this.setState(() => ({
            image
        }));
    };

    onSubmit = e => {
        e.preventDefault();
        if (!this.state.itemName ||
            !this.state.itemPriceOne ||
            !this.state.itemDescription 
        ) {
            this.setState(() => ({error: 'все поля должны быть заполнены'}))
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                itemName: this.state.itemName,
                itemPriceOne: this.state.itemPriceOne,
                itemPriceOneCount: this.state.itemPriceCount,
                itemPriceTwo: this.state.itemPriceTwo,
                itemPriceTwoCount: this.state.itemPriceTwoCount,
                itemPriceThree: this.state.itemPriceThree,
                itemPriceThreeCount: this.state.itemPriceThreeCount,
                itemDescription: this.state.itemDescription,
                image: this.state.image
            });
        }
    };

    render() {
        return (
            
            <div className="form_container">
                {this.state.error && <p className="error">{this.state.error}</p>}
                <form className="form" onSubmit={this.onSubmit}>

               
                    <div className="form_group">
                        <label htmlFor="groupName">Название товара</label>
                        <input 
                            type="text"
                            name="itemName"
                            placeholder="Название товара"
                            autoFocus
                            value={this.state.itemName}
                            onChange={this.handleInputChange}    
                        />
                    </div>

                    <div className="form_group">
                        <label htmlFor="groupName">Описание товара</label>
                        <input 
                            type="text"
                            name="itemDescription"
                            placeholder="Описание товара"
                            autoFocus
                            value={this.state.itemDescription}
                            onChange={this.handleInputChange}    
                        />
                    </div>

                    <div className="form_group">
                        <select 
                            name="itemGroup" 
                            value={this.state.itemGroup} 
                            onChange={this.handleInputChange}>
                            <option>Выбрать группу товаров</option>
                            {this.props.data.map((group, index) => {
                                return <option key={index} value={group.groupName}>{group.groupName}</option>;
                            })}
                        </select>
                    </div>
                    
                    <div className="form_group">
                        <label htmlFor="itemPriceOne">Цена 1</label>
                        <input 
                            type="number"
                            name="itemPriceOne"
                            placeholder="0"
                            value={this.state.itemPriceOne}
                            onChange={this.handleInputChange}    
                        />
                        <label htmlFor="itemPriceOneCount">до:</label>
                        <input 
                            type="number"
                            name="itemPriceOneCount"
                            placeholder="0"
                            value={this.state.itemPriceOneCount}
                            onChange={this.handleInputChange}    
                        />
                    </div>

                    <div className="form_group">
                        <label htmlFor="itemPriceTwo">Цена 2</label>
                        <input 
                            type="number"
                            name="itemPriceTwo"
                            placeholder="0"
                            value={this.state.itemPriceTwo}
                            onChange={this.handleInputChange}    
                        />
                        <label htmlFor="itemPriceTwoCount">до:</label>
                        <input 
                            type="number"
                            name="itemPriceTwoCount"
                            placeholder="0"
                            value={this.state.itemPriceTwoCount}
                            onChange={this.handleInputChange}    
                        />
                    </div>

                    <div className="form_group">
                        <label htmlFor="itemPriceThree">Цена 3</label>
                        <input 
                            type="number"
                            name="itemPriceThree"
                            placeholder="0"
                            value={this.state.itemPriceThree}
                            onChange={this.handleInputChange}    
                        />
                        <label htmlFor="itemPriceThreeCount">до:</label>
                        <input 
                            type="number"
                            name="itemPriceThreeCount"
                            placeholder="0"
                            value={this.state.itemPriceThreeCount}
                            onChange={this.handleInputChange}    
                        />
                    </div>

                    <div className="fileContainer">
                            
                        <button onClick={this.onImageChange} className="submit_btn">Загрузить картинку</button>
                        <input 
                            accept=".png, .jpg, .jpeg"
                            type="file"
                            name="image"
                            onChange={this.onImageChange}    
                        />
                    </div>
                    <button className="form_btn">
                        Добавить товар
                    </button>
                </form>
            </div>
        );
    }


};

export default ItemForm;

