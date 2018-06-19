import React from 'react';
import '../../styles/side_menu.css';

export const Sidemenu = (props) => {
    return(
        <div className="side_menu">
            <h3 className="side_menu_head">{props.name}</h3>
            <ul>
                {props.items.map( item => {
                    if (item.itemGroup === props.name) {
                        return <li key={item._id} className="side_menu_item">{item.itemName}</li>;
                    }
                })}
                
                
            </ul>
        </div>
    )
}

export default Sidemenu;