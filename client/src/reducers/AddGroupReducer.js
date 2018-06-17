export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_GROUP':
            return [
                ...state,
                action.group
            ];
        case 'REMOVE_GROUP':
            return state.filter(({_id}) => _id !== action._id);
        default:
            return state;
    }
};   