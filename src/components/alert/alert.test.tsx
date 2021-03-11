import * as React from 'react';
import { shallow } from 'enzyme';
import Alert from './alert';
import { Alert as AntdAlert, AlertProps } from 'antd';

describe('alert component test suite', () => {
    it('should render component correctly', () => {
        const mockProps: AlertProps = {
            message: "test",
        };
        const wrapper = shallow(<Alert {...mockProps} />);
        expect(wrapper.find('.Alert')).toHaveLength(1);
        expect(wrapper.find('.Alert').find(AntdAlert)).toHaveLength(1);
        expect(wrapper.find('.Alert').find(AntdAlert).props()).toEqual(mockProps);
    });
});