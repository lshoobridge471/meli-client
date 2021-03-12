import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { querySelector } from 'utils/utils';
import MainApp from './main-app';
import './index.scss'

export const rootElement = querySelector('#root');

export const renderApp = (element: HTMLElement | null): void=> {
	render(
		<Router>
			<MainApp />
		</Router>,
		element
	);
};

renderApp(rootElement);