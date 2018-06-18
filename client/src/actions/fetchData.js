import axios from 'axios';
import { addGroup } from './group';

export const fetchData = () => {
    return async dispatch => {
        let groupsData = await axios.get('/api/get_groups');
        groupsData.data.groups.map( group => {
            dispatch(addGroup({ ...group }));
            return group;
        });
    }
};