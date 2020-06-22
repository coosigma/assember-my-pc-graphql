const Immutable = require("immutable");

const State = {};

State.initial = () => {
	return Immutable.fromJS({
		all_components: {
			isFetching: false,
			didInvalidate: false,
			currentCategory: "",
			data: {},
		},
		my_components: {},
		filter: {},
	});
};

export default State;
