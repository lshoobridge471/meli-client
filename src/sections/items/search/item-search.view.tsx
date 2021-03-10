import * as React from 'react';
import { IBreadcumbSectionProps } from '../../../components/breadcumb/breadcumb';
import { IItemsData } from '../types/types';
import ItemSearchCategories from './item-search-categories';
import ItemSearchResults from './item-search-results';

export interface IItemsViewProps {
    categories?: IBreadcumbSectionProps[];
    items?: IItemsData[];
}

const ItemSearchView: React.FunctionComponent<IItemsViewProps> = (props: IItemsViewProps) => {
    const { categories, items } = props;
    return (
        <>
            {categories && <ItemSearchCategories categories={categories} />}
            {items && <ItemSearchResults items={items} />}
        </>
    );
};

export default ItemSearchView;