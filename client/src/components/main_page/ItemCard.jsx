import React from 'react';
import '../../styles/item_card.css';


const ItemCard = (props) => {
    return (
        <div className="item_card">
            <img src={require('../../img/items/item-1.jpg')} alt="" className="item_image"/>
            <aside>
                <h4>Назвине Товара</h4>
                <p>ТСветильник GX53, цвет корпуса - БЕЛЫЙ + лампа светодиодная 6 Вт (в комплекте) Тонкий встраиваемый светильник предназначен для освещения жилых и общественных помещений. Идеальное решение для дизайнерских подвесных и натяжных потолков.  Светодиодная лампа заменяет традиционные лампы на..</p>
            </aside>
            <button className="btn_submit">Купить</button>
        </div>
    )
};

export default ItemCard;