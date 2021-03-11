import * as React from 'react';
import { shallow } from 'enzyme';
import Loading, { ILoadingProps } from './loading';
import { Spin } from 'antd';

describe('loading component test suite', () => {
    it('should render component correctly', () => {
        const mockProps: ILoadingProps = {
            fontSize: 50,
        };
        const wrapper = shallow(<Loading {...mockProps} />);
        expect(wrapper.find('.Loading')).toHaveLength(1);
        expect(wrapper.find('.Loading').find(Spin)).toBeDefined();
    });
});