import * as React from 'react';
import { shallow } from 'enzyme';
import NotFoundView, { INotFoundViewProps } from './not-found.view';
import Alert from '../../components/alert/alert';

describe('sections/index view test suite', () => {
    const defaultProps: INotFoundViewProps = {
        message: 'alert message'
    }
    it('should render view correctly', () => {
        const wrapper = shallow(<NotFoundView {...defaultProps}  />);
        expect(wrapper.find(Alert)).toHaveLength(1);
        expect(wrapper.find(Alert).props().message).toEqual(defaultProps.message);
    });
});