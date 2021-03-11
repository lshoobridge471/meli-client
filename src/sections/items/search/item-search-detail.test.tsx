import * as React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import ItemSearchDetail from './item-search-detail';
import { IItemsData } from '../types/types';
import { formatMoney } from '../utils/utils';

describe('sections/items/item-detail/item-search-detail test suite', () => {
    const mockProps: IItemsData = {
        picture: "pictureurl",
        price: {
            amount: 333,
        },
        title: "title",
        condition: "new",
        sold_quantity: 3
    };

    const formattedAmount = formatMoney(mockProps?.price?.amount);

    it('should render view correctly', () => {
        const wrapper = shallow(<ItemSearchDetail {...mockProps} />);

        expect(wrapper.find('.Items--Results--Card')).toHaveLength(1);
        expect(wrapper.find('.Items--Results--Card--Image')).toHaveLength(1);
        expect(wrapper.find('.Items--Results--Card--Image').find('img').props().src).toBe(mockProps?.picture);
        expect(wrapper.find('.Items--Results--Card--Content')).toHaveLength(1);
        expect(wrapper.find('.Items--Results--Card--Content--Subtitle')).toHaveLength(1);
        expect(wrapper.find('.Items--Results--Card--Content--Subtitle').find(Link)).toHaveLength(1);
        expect(wrapper.find('.Items--Results--Card--Content--Subtitle').find(Link).props().to).toBe(`/items/${mockProps?.id}`);
        expect(wrapper.find('.Items--Results--Card--Content--Title')).toHaveLength(1);
        expect(wrapper.find('.Items--Results--Card--Content--Title').text()).toBe(formattedAmount);
    });
});