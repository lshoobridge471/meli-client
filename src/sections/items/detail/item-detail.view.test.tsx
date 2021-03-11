import * as React from 'react';
import { shallow } from 'enzyme';
import ItemDetailView, { IItemDetailProps } from './item-detail.view';
import { formatMoney, getProductConditionName } from '../utils/utils';
import { Button, notification } from 'antd';

describe('sections/items/item-detail.view test suite', () => {
    const mockProps: IItemDetailProps = {
        data: {
            picture: "pictureurl",
            price: {
                amount: 333,
            },
            title: "title",
            condition: "new",
            sold_quantity: 3
        },
    };
    const conditionName = getProductConditionName(mockProps?.data?.condition);
    const formattedAmount = formatMoney(mockProps?.data?.price?.amount);
    
    it('should render view correctly', () => {
        const wrapper = shallow(<ItemDetailView {...mockProps} />);

        expect(wrapper.find('.Item')).toBeDefined();
        expect(wrapper.find('.Item--Detail')).toBeDefined();
        expect(wrapper.find('.Item--Detail--Card')).toBeDefined();
        expect(wrapper.find('.Item--Detail--Card--Image').find('img').props().src).toBe(mockProps?.data?.picture);
        expect(wrapper.find('.Item--Detail--Card--Content')).toBeDefined();
        expect(wrapper.find('.Item--Detail--Card--Content--Header').text()).toBe(`${conditionName} - ${mockProps?.data?.sold_quantity} vendidos`);
        expect(wrapper.find('.Item--Detail--Card--Content--Title').text()).toBe(mockProps?.data?.title);
        expect(wrapper.find('.Item--Detail--Card--Content--Price').text()).toBe(formattedAmount);
        expect(wrapper.find('.Item--Detail--Card--Content--Button')).toBeDefined();
        expect(wrapper.find('.Item--Detail--Card--Content--Button').find(Button)).toBeDefined();
        expect(wrapper.find('.Item--Detail--Description')).toHaveLength(0);
    });

    it('should render view with description correctly', () => {
        const description = "It's a description!";
        const propsWithData = mockProps;
        propsWithData.data.description = description;
        const wrapper = shallow(<ItemDetailView {...mockProps} />);
        expect(wrapper.find('.Item--Detail--Description')).toHaveLength(1);
        expect(wrapper.find('.Item--Detail--Description').find('span').text()).toBe(description);
    });

    it('should render view trigger buy button correctly', () => {
        const spyNotification = jest.fn();
        notification.open = spyNotification;
        const wrapper = shallow(<ItemDetailView {...mockProps} />);
        wrapper.find('.Item--Detail--Card--Content--Button').find(Button).simulate('click');
        expect(spyNotification).toBeCalled();
    });
});