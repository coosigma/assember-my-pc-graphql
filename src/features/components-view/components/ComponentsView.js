import React from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import ComponentsList from "./ComponentsList";

class ComponentsView extends React.Component {
	render() {
		return <ComponentsList list={this.props.all_components} />;
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
