import { shallow } from 'enzyme';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemsRoutesView, { IItemsRoutesViewProps } from './items.routes.view';

describe('sections/items/item-search.container test suite', () => {
    const mockProps: IItemsRoutesViewProps = {
        match: {
            path: "stringpath",
            params: {},
            isExact: false,
            url: "test,"
        }
    };

    it('should render component correctly', async () => {
        const wrapper = shallow(<ItemsRoutesView {...mockProps} />)
        expect(wrapper.find(Switch)).toBeDefined();
        expect(wrapper.find(Switch).find(Route)).toHaveLength(2);
    });
});