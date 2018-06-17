import React from 'react';
import AddGroup from './AddGroup';
import AddItem from './AddItem';
import '../../styles/from_style/form.css';

export const FormHub = (props) => {
    return(
        <div>
            <AddGroup />
            <AddItem />
        </div>
    )
}

export default FormHub;