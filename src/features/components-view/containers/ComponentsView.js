import { connect } from "react-redux";
import ComponentsView from "../components/ComponentsView";
import { ACTIONS } from "../actions/mainAction";
import Filter from "../filter.json";

function allComponentsToComponentsList(state) {
	// console.log(Filter);
	const rawData = state.getIn(["allComponents", "data"]);
	if (rawData.size === 0) {
		return [];
	}
	const headers = ["producer", "type", "price"];
	const category = state.get("currentCategory");
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
		listItem.set("id", item.get("_id"));
		items.push(listItem);
	}
	return items;
}

const selectorOptions = new Map([
	[
		"currentCategory",
		[
			["", "(Select...)"],
			["CPU", "CPU"],
			["RAM", "RAM"],
		],
	],
]);

const selectorValues = (state) => ({
	currentCategory: state.get("currentCategory"),
});

const mapStateToProps = (state) => ({
	allComponents: state.get("allComponents"),
	selectorOptions,
	selectorValues: selectorValues(state),
	list: allComponentsToComponentsList(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onCategoryChange: (event) => {
		const category = event.target.value;
		if (category !== "") {
			dispatch(ACTIONS.REQUEST_CATEGORY(category));
		}
		dispatch(ACTIONS.SET_CURRENT_CATEGORY(category));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsView);
