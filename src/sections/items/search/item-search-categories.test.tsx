import * as React from 'react';
import { shallow } from 'enzyme';
import ItemSearchCategories, { IItemSearchCategories } from './item-search-categories';
import Breadcumb from '../../../components/breadcumb/breadcumb';

describe('sections/items/item-detail/item-search-categories test suite', () => {
    const mockProps: IItemSearchCategories = {
        categories: [
            { name: "name1" },
            { name: "name2" },
            { name: "name3" },
        ]
    };

    it('should render view correctly', () => {
        const wrapper = shallow(<ItemSearchCategories {...mockProps} />);
        expect(wrapper.find('.Items--Categories')).toHaveLength(1);
        expect(wrapper.find('.Items--Categories').find(Breadcumb)).toHaveLength(1);
        expect(wrapper.find('.Items--Categories').find(Breadcumb).props().sections).toBe(mockProps.categories);
    });
});