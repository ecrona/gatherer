import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Shell } from 'components/shell';

import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = {
	path: '/',
	component: Shell,
	childRoutes: []
};

ReactDOM.render(
	<Router history={ appHistory } routes={ routes }>
	</Router>,
	document.getElementsByClassName('app')[0]
);