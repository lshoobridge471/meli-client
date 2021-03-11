import * as React from 'react';
import { shallow } from 'enzyme';
import IndexContainer from './index.container';

describe('sections/index test suite', () => {
    it('should render view correctly', () => {
        const wrapper = shallow(<IndexContainer />);
        expect(wrapper.text()).toEqual('');
    });
});