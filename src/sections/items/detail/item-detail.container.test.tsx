import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter, Route } from 'react-router';
import ItemDetailContainer from './item-detail.container';
import axios from 'axios';
import { IItemsData } from '../types/types';
import { act } from 'react-dom/test-utils';
import ItemDetailView from './item-detail.view';

describe('sections/items/item-detail.container test suite', () => {
    let wrapper: ReactWrapper;

    // clear all mocks
    afterEach(() => {
      jest.clearAllMocks();
    });
    
    it.skip('should render component correctly', async () => {
        const mockProps: IItemsData = {
            data: {
                picture: "pictureurl",
                price: {
                    amount: 333,
                },
                title: "title",
                condition: "new",
                sold_quantity: 3
            }
        };
        jest.spyOn(axios, 'get').mockImplementationOnce(() => Promise.resolve(mockProps));
        // mock axios promise
        await act(async () => {
            wrapper = mount(
            <MemoryRouter initialEntries={['/33']} initialIndex={0}>
              <Route path="/:id" render={() => <ItemDetailContainer />} />
            </MemoryRouter>
            );
        });
        // check the render output
        wrapper.update();

        expect(axios.get).toHaveBeenCalledTimes(1);
        await expect(wrapper.find(ItemDetailView).props().data).toBe(mockProps?.data);
    });
});