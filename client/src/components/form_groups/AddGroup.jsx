import React from 'react';
import { connect } from 'react-redux';
import FormGroup from './FormGroup';
import { addGroup } from '../../actions/group';
import '../../styles/from_style/form.css';

const AddGroup = (props) => {
    return(
        <div className="form_main">
            <FormGroup 
                data={props.groups}
                onSubmit={group => {
                    props.dispatch(addGroup(group));
                }}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        groups: state.groups
    }
}

export default connect(mapStateToProps)(AddGroup);