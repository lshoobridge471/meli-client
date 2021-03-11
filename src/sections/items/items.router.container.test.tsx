import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ItemsRoutesContainer from './items.routes.container';
import ItemsRoutesView from './items.routes.view';
import { MemoryRouter, Route } from 'react-router-dom';

describe('sections/items/item-search.container test suite', () => {
    let wrapper: ReactWrapper;
    it('should render component correctly', async () => {
        await act(async () => {
            wrapper = mount(
                <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <Route path="/" render={() => <ItemsRoutesContainer />} />
                </MemoryRouter>
            );
        });
        wrapper.update();
        expect(wrapper.find(ItemsRoutesView)).toHaveLength(1);
    });
});