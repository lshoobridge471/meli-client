import * as React from 'react';
import { Switch, Route, match } from 'react-router-dom';
import ItemDetailContainer from './detail/item-detail.container';
import ItemSearchContainer from './search/item-search.container';

export interface IItemsRoutesViewProps {
    match: match;
}

const ItemsRoutesView: React.FunctionComponent<IItemsRoutesViewProps> = (props: IItemsRoutesViewProps) => {
	const { match } = props;
	return (
		<Switch>
			<Route path={`${match.path}/:id`} component={ItemDetailContainer} />
			<Route path={match.path} component={ItemSearchContainer} />
		</Switch>
	);
};

export default ItemsRoutesView;