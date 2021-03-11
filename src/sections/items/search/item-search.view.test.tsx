import * as React from 'react';
import { shallow } from 'enzyme';
import ItemSearchView from './item-search.view';
import { IItemsViewProps } from './item-search.view';
import ItemSearchCategories from './item-search-categories';
import ItemSearchResults from './item-search-results';

describe('sections/items/item-detail/item-search.view test suite', () => {

    it('should render correctly witouth data', () => {
        const mockProps: IItemsViewProps = {
            categories: undefined,
            items: undefined,
        };
        const wrapper = shallow(<ItemSearchView {...mockProps} />)
        expect(wrapper.find(ItemSearchCategories)).toHaveLength(0);
        expect(wrapper.find(ItemSearchResults)).toHaveLength(0);
    });

    it('should render correctly with data', () => {
        const mockProps: IItemsViewProps = {
            categories: [
                { link: "/item1", name: "item1" },
                { link: "/item2", name: "item2" },
            ],
            items: [{
                picture: "pictureurl",
                price: {
                    amount: 111,
                },
                title: "title 1",
                condition: "new",
                sold_quantity: 25
            }],
        };
        const wrapper = shallow(<ItemSearchView {...mockProps} />)
        expect(wrapper.find(ItemSearchCategories)).toHaveLength(1);
        expect(wrapper.find(ItemSearchResults)).toHaveLength(1);
    });
});