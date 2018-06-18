import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemFrom';
import { startAddItem } from '../../actions/item';

export const AddItem = (props) => {
    return(
        <div>
            <ItemForm 
                data={props.groups}
                onSubmit={item => {
                    props.dispatch(startAddItem(item));
                }}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        groups: state.groups
    }
}

export default connect(mapStateToProps)(AddItem);