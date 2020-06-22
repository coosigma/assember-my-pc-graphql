import { connect } from "react-redux";
import ComponentsView from "../components/ComponentsView";
import { ACTIONS } from "../actions/index";

function allComponentsToComponentsList(state) {
	const rawData = state.getIn(["all_components", "data"]);
	if (rawData.size === 0) {
		return [];
	}
	const headers = ["producer", "type", "price"];
	const category = state.getIn(["all_components", "currentCategory"]);
	const sourceList = rawData.get(category);
	if (!sourceList) {
		return [];
	}
	const items = [];
	for (const item of sourceList) {
		const source = item.get("_source");
		const listItem = new Map();
		for (const field of headers) {
			const value = source.get(field);
			if (value) {
				listItem.set(field, value);
			}
		}
		items.push(listItem);
	}
	return items;
}

const mapStateToProps = (state) => ({
	all_components: state.get("all_components"),
	list: allComponentsToComponentsList(state),
});

const mapDispatchToProps = (dispatch) => ({
	onButtonClick: (category) => (event) =>
		dispatch(ACTIONS.REQUEST_CATEGORY(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsView);
