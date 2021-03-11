import * as React from 'react';
import { mount } from 'enzyme';
import Search, { ISearchComponentProps } from './search';
import { Input } from 'antd';
const { Search: AntdSearch } = Input;

describe('loading component test suite', () => {
    const mockSearchFN = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render component correctly', () => {
        const mockProps: ISearchComponentProps = {
            placeholder: "Buscar",
            onSearch: mockSearchFN,
        };
        const wrapper = mount(<Search {...mockProps} />);
        expect(wrapper.find(AntdSearch)).toBeDefined();
        expect(wrapper.find(AntdSearch).props().placeholder).toBe(mockProps.placeholder);
    });

    it('should renderh call search function correctly', () => {
        const mockProps: ISearchComponentProps = {
            placeholder: "Buscar",
            onSearch: mockSearchFN,
        };
        const wrapper = mount(<Search {...mockProps} />);
        const props = wrapper.find(AntdSearch).props();
        const { onSearch } = props;
        onSearch && onSearch('algo');
        expect(mockSearchFN).toHaveBeenCalled();
    });
});