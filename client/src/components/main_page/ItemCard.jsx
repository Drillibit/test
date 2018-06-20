import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/item_card.css';


class ItemCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleClass: true
        }
     
    }

    handleClick = e => {
        e.preventDefault();
        // const target = e.target;
        this.setState({
            toggleClass: !this.state.toggleClass 
        })
    }


    render(){
        const {
            itemName,
            itemPriceOne,
            itemPriceOneCount,
            itemPriceTwo,
            itemPriceTwoCount,
            itemPriceThree,
            itemPriceThreeCount,
            _id,
            image
        } = this.props.data;
        const tdStyle = {
            textAlign: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            padding: '10px 0',
            borderTop: '1px solid lightgray',
            
        };


        return (
            <div className="item_card">                

                <table className="item_price">
                    <tbody>
                        <tr>
                            <th colSpan="4" style={tdStyle}>
                                {itemName} 
                            </th>
                        </tr>
                    <tr>
                        <th></th>
                        <th>до {itemPriceOneCount} штук</th>
                        <th>до {itemPriceTwoCount} штук</th>
                        <th>до {itemPriceThreeCount} штук</th>
                    </tr>
                    <tr>
                        <th><img src={`/api/items/${_id}`} alt={itemName} className="item_image"/></th>
                        <th className="price_tag">{itemPriceOne} тг</th>
                        <th className="price_tag">{itemPriceTwo} тг</th>
                        <th className="price_tag">{itemPriceThree} тг</th> 
                    </tr>
                    </tbody>
                </table>
                <Link onClick={this.handleClick} to={`/item_info/${_id}`} data={this.props.data} className="btn_submit">Описание</Link>         
            </div>
        )
    }
};

export default ItemCard;