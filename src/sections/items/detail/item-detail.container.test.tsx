import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import ItemDetailContainer from './item-detail.container';

describe('sections/items/item-detail.container test suite', () => {
    it('should render component correctly', () => {
        mount(
            <MemoryRouter initialEntries={['/items/item33' ]}>
              <ItemDetailContainer />
            </MemoryRouter>
        );
    });
});