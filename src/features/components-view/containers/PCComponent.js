import { connect } from "react-redux";
import PCComponent from "../components/PCComponent";

function getComponentById(components, id) {
	for (const row of components) {
		// the id from dom is string but the id from store is number, and the id from store may be string in the future
		// eslint-disable-next-line
		if (row.get("_id") == id) {
			return row;
		}
	}
	return;
}
function getComponentsOfCurrentCategory(state, ownProps) {
	const id = ownProps.match.params.componentId;
	const category = state.get("currentCategory");
	const components = state.getIn(["allComponents", "data"]);
	if (category) {
		return getComponentById(
			state.getIn(["allComponents", "data", category]),
			id
		);
	} else {
		components.forEach((cate) => {
			const cateComponents = state.getIn(["allComponents", "data", cate]);
			const component = getComponentById(cateComponents, id);
			if (component) {
				return component;
			}
		});
	}
	return;
}

const mapStateToProps = (state, ownProps) => ({
	PCComponent: getComponentsOfCurrentCategory(state, ownProps),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PCComponent);
