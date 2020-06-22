import React from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import ComponentsSelector from "./ComponentsSelector";
import ComponentsList from "./ComponentsList";

class ComponentsView extends React.Component {
	render() {
		return (
			<React.Fragment>
				<ComponentsSelector
					moduleState={this.props.all_components}
					onButtonClick={this.props.onButtonClick}
				/>
				<ComponentsList
					moduleState={this.props.all_components}
					list={this.props.list}
				/>
			</React.Fragment>
		);
	}
}

ComponentsView.protoTypes = {
	all_components: ImmutablePropTypes.contains({
		isFetching: Boolean.isRequired,
		didInvalidate: Boolean.isRequired,
		data: ImmutablePropTypes.map.isRequired,
	}),
	onButtonClick: Function,
	list: Array,
};

export default ComponentsView;
