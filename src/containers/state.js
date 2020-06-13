import Immutable from require('immutable');

const State = {};

State.initial = () => {
    return Immutable.fromJS({
        all_components = {},
        my_components =[],
        filter = {}
    })
};

export default State;