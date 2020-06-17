import React from "react";
import { Route } from "react-router-dom";
import PCComponents from "./components/index";

const componentsRoutes = (
	<Route path='components' component={PCComponents}>
		{/* <Route path='/:componentId' component={PCComponents} /> */}
	</Route>
);

export default componentsRoutes;
