import { connect } from "react-redux";
import ComponentsView from "../components/ComponentsView";

// import { ACTIONS } from "../actions/index";

const mapStateToProps = (state) => ({
	all_components: state.get("all_components"),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsView);
