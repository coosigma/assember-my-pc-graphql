import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../components/App";
import componentsRoutes from "../features/components-view/routes";

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path='/' exact component={App}>
					{componentsRoutes}
				</Route>
			</Switch>
		</Router>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired,
};

export default Root;
