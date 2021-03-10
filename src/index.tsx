import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { querySelector } from 'utils/utils';
import MainApp from './main-app';
import './index.scss'

const rootElement = querySelector('#root');

render(
	<HashRouter>
		<MainApp />
	</HashRouter>,
	rootElement
);