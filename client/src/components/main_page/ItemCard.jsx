import React, { Component } from 'react';
import '../../styles/item_card.css';


class ItemCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleClass: true
        }
    }
    handleToggle = e => {

    }

    render(){
        return (
            <div className="item_card">                

                    { /*          <h4>Назвине Товара</h4>
                        {this.state.toggleClass ? <button className="btn_submit">Болше</button> : <button className="btn_submit">Меньше</button>}
        <p>ТСветильник GX53, цвет корпуса - БЕЛЫЙ + лампа светодиодная 6 Вт (в комплекте) Тонкий встраиваемый светильник предназначен для освещения жилых и общественных помещений. Идеальное решение для дизайнерских подвесных и натяжных потолков.  Светодиодная лампа заменяет традиционные лампы на..</p>*/}
                <table className="item_price">
                    <tr>
                        <th>GX 53</th>
                        <th>до 5 штук</th>
                        <th>до 10 штук</th>
                        <th>до 20 штук</th>
                    </tr>
                    <tr>
                        <th><img src={require('../../img/items/item-1.jpg')} alt="" className="item_image"/></th>
                        <th className="price_tag">580тг</th>
                        <th className="price_tag">540тг</th>
                        <th className="price_tag">500тг</th> 
                    </tr>
         
                </table>
            </div>
        )
    }
};

export default ItemCard;