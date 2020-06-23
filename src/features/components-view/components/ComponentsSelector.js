import React, { Fragment } from "react";
// import styled from "styled-components";
// import Form from "react-bootstrap/Form";
// import { Button } from "react-bootstrap";

class ComponentsSelector extends React.Component {
	render() {
		return (
			<Fragment>
				{/* <Button onClick={this.props.onButtonClick("CPU")}>Show CPUs</Button> */}
				{/* <Button onClick={this.props.onButtonClick("RAM")}>Show RAMs</Button> */}
				{/* <Picker
					optionGroups={this.props.optionGroups}
					valueGroups={this.props.valueGroups}
					onChange={this.props.onCategoryChange}
				/> */}
				<select name='category' onChange={this.props.onCategoryChange}>
					{this.props.optionGroups
						.get("currentCategory")
						.map((option, index) => {
							return (
								<option key={index} value={option}>
									{option}
								</option>
							);
						})}
				</select>
			</Fragment>
		);
	}
}

ComponentsSelector.protoTypes = {
	optionGroups: Object.isRequired,
	valueGroups: Object.isRequired,
	onCategoryChang: Function,
};

export default ComponentsSelector;
