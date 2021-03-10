import * as React from 'react';
import Breadcrumb, { IBreadcumbSectionProps } from '../../../components/breadcumb/breadcumb';

export interface IItemSearchCategories {
    categories: IBreadcumbSectionProps[];
}

const ItemSearchCategories: React.FunctionComponent<IItemSearchCategories> = (props: IItemSearchCategories) => {
    const { categories } = props;
    return (
        <div className="Items--Categories">
            <Breadcrumb sections={categories} />
        </div>
    );
};

export default ItemSearchCategories;