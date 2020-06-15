import Immutable from require('immutable');

const State = {};

State.initial = () => {
    return Immutable.fromJS({
        all_components = {
            isFetching: false,
            didInvalidate: false,
            data: {}
        },
        my_components ={},
        filter = {}
    })
};

export default State;