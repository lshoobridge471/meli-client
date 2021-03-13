import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter, Route } from 'react-router';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import ItemSearchContainer from './item-search.container';
import ItemSearchView from './item-search.view';
import { parseBreadcumbStrings } from '../utils/utils';
import { IBreadcumbSectionProps } from 'components/breadcumb/breadcumb';

describe('sections/items/item-search.container test suite', () => {
    let wrapper: ReactWrapper;
    
    // clear all mocks
    afterEach(() => {
      jest.clearAllMocks();
    });
    
    it.skip('should render component correctly', async () => {
        const mockProps = {
            data: {
                items: [{
                    picture: "pictureurl",
                    price: {
                        amount: 333,
                    },
                    title: "title",
                    condition: "new",
                    sold_quantity: 3
                }],
                categories: [
                    "categ1",
                    "categ2",
                ]
            }
        };
        const parsedBreadcumbCategories: IBreadcumbSectionProps[] = parseBreadcumbStrings(mockProps?.data?.categories);

        jest.spyOn(axios, 'get').mockImplementationOnce(() => Promise.resolve(mockProps));
        // mock axios promise
        await act(async () => {
            wrapper = mount(
            <MemoryRouter initialEntries={['/?q=macbook']} initialIndex={0}>
              <Route path="/" render={() => <ItemSearchContainer />} />
            </MemoryRouter>
            );
        });

        // check the render output
        wrapper.update();

        expect(axios.get).toHaveBeenCalledTimes(1);
        await expect(wrapper.find(ItemSearchView).props().items).toBe(mockProps?.data.items);
        await expect(wrapper.find(ItemSearchView).props().categories).toMatchObject(parsedBreadcumbCategories);
    });
});