import React from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import ListView from "./ListView";

class ComponentsView extends React.Component {
	render() {
		return <ListView></ListView>;
	}
}

ComponentsView.protoTypes = {
	all_components: ImmutablePropTypes.contains({
		isFetching: Boolean.isRequired,
		didInvalidate: Boolean.isRequired,
		data: ImmutablePropTypes.map.isRequired,
	}),
};

export default ComponentsView;
