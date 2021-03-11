import * as React from 'react';
import { shallow } from 'enzyme';
import ItemSearchResults from './item-search-results';
import { IItemSearchResults } from './item-search-results';
import ItemSearchDetail from './item-search-detail';

describe('sections/items/item-detail/item-search-detail test suite', () => {
    const mockProps: IItemSearchResults = {
        items: [{
            picture: "pictureurl",
            price: {
                amount: 111,
            },
            title: "title 1",
            condition: "new",
            sold_quantity: 25
        }, {
            picture: "pictureurl",
            price: {
                amount: 222,
            },
            title: "title 2",
            condition: "used",
            sold_quantity: 0
        }, {
            picture: "pictureurl",
            price: {
                amount: 333,
            },
            title: "title 3",
            condition: "used",
            sold_quantity: 0
        }],
    };

    it('should render view correctly', () => {
        const wrapper = shallow(<ItemSearchResults {...mockProps} />);

        expect(wrapper.find('.Items--Results')).toHaveLength(1);
        expect(wrapper.find('.Items--Results').find(ItemSearchDetail)).toHaveLength(mockProps?.items?.length);
    });

    it('should test limit global prop', () => {
        const newItems = mockProps.items.concat(mockProps.items);
        const wrapper = shallow(<ItemSearchResults {...{...mockProps, items: newItems}} />);
        expect(wrapper.find('.Items--Results')).toHaveLength(1);

        if(CONFIG.PRODUCTS_LIST_LIMIT) {
            expect(wrapper.find('.Items--Results').find(ItemSearchDetail)).toHaveLength(CONFIG.PRODUCTS_LIST_LIMIT);
        } else {
            expect(wrapper.find('.Items--Results').find(ItemSearchDetail)).toHaveLength(newItems?.length);
        }
    });
});