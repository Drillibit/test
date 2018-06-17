import React from 'react';
import { connect } from 'react-redux';
import FormGroup from './FormGroup';
import { addGroup } from '../../actions/group';
import '../../styles/from_style/form.css';

const AddGroup = (props) => {
    return(
        <div>
            <FormGroup 
                onSubmit={group => {
                    props.dispatch(addGroup(group));
                }}
            />
        </div>
    );
};

export default connect()(AddGroup);