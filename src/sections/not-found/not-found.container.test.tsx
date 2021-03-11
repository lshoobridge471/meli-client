import * as React from 'react';
import { shallow } from 'enzyme';
import NotFoundContainer, { ERROR_URL_MESSAGE } from './not-found.container';
import NotFoundView from './not-found.view';

describe('sections/index container test suite', () => {
    it('should render view correctly', () => {
        const wrapper = shallow(<NotFoundContainer />);
        expect(wrapper.find(NotFoundView)).toHaveLength(1);
        expect(wrapper.find(NotFoundView).props().message).toEqual(ERROR_URL_MESSAGE);
    });
});