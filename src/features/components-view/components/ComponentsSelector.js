import React, { Fragment } from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
// import styled from "styled-components";
import { Button } from "react-bootstrap";

class ComponentsSelector extends React.Component {
	render() {
		return (
			<Fragment>
				<Button onClick={this.props.onButtonClick("CPU")}>Show CPUs</Button>
				<Button onClick={this.props.onButtonClick("RAM")}>Show RAMs</Button>
			</Fragment>
		);
	}
}

ComponentsSelector.protoTypes = {
	all_components: ImmutablePropTypes.contains({
		isFetching: Boolean.isRequired,
		didInvalidate: Boolean.isRequired,
		data: ImmutablePropTypes.map.isRequired,
	}),
	onButtonClick: Function,
};

export default ComponentsSelector;
