import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import ItemsRoutesView from './items.routes.view';

const ItemsRoutesContainer: React.FunctionComponent = () => {
	const match = useRouteMatch();
	return <ItemsRoutesView match={match} />
};

export default ItemsRoutesContainer;