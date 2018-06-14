import React from 'react';
import '../../styles/side_menu.css';

export const Sidemenu = () => {
    return(
        <div className="side_menu">
            <h3 className="side_menu_head">Светильники</h3>
            <ul>
                <li className="side_menu_item">Комплекты GX53 (16)</li>
                <li className="side_menu_item">Комплекты GX70 (7)</li>
                <li className="side_menu_item">Светильники GX53 (10)</li>
                <li className="side_menu_item">Светильники GX70 (8)</li>
            </ul>
        </div>
    )
}

export default Sidemenu;