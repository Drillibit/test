import React from 'react';
import { connect } from 'react-redux';
import FormGroup from './FormGroup';
import { startAddGroup } from '../../actions/group';

const AddGroup = (props) => {
    return(
        <div>
            <FormGroup 
                data={props.groups}
                onSubmit={group => {
                    props.dispatch(startAddGroup(group));
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