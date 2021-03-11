import * as React from 'react';
import { shallow } from 'enzyme';
import Breadcumb, { IBreadcumbProps } from './breadcumb';
import { Breadcrumb as AntdBreadcumb } from 'antd';
import { Link } from 'react-router-dom';

describe('breadcumb component test suite', () => {
    it('should render component correctly', () => {
        const mockProps: IBreadcumbProps = {
            sections: [
                { name: "name1" },
                { name: "name2" },
                { name: "name3" },
            ],
        };
        const wrapper = shallow(<Breadcumb {...mockProps} />);
        expect(wrapper.find(AntdBreadcumb)).toHaveLength(1);
        expect(wrapper.find(AntdBreadcumb).find(AntdBreadcumb.Item)).toHaveLength(3);
    });

    it('should render component with links correctly', () => {
        const mockProps: IBreadcumbProps = {
            sections: [
                { name: "name1", link: "/name1" },
                { name: "name2" },
                { name: "name3", link: "/name3" },
            ],
        };
        const wrapper = shallow(<Breadcumb {...mockProps} />);
        expect(wrapper.find(AntdBreadcumb)).toHaveLength(1);
        expect(wrapper.find(AntdBreadcumb).find(AntdBreadcumb.Item).at(0).find(Link)).toHaveLength(1);
        expect(wrapper.find(AntdBreadcumb).find(AntdBreadcumb.Item).at(0).find(Link).props().to).toBe(mockProps?.sections[0]?.link);
        expect(wrapper.find(AntdBreadcumb).find(AntdBreadcumb.Item).at(1).find(Link)).toHaveLength(0);
        expect(wrapper.find(AntdBreadcumb).find(AntdBreadcumb.Item).at(1).children().text()).toBe(mockProps?.sections[1]?.name);
        expect(wrapper.find(AntdBreadcumb).find(AntdBreadcumb.Item).at(2).find(Link)).toHaveLength(1);
        expect(wrapper.find(AntdBreadcumb).find(AntdBreadcumb.Item).at(2).find(Link).props().to).toBe(mockProps?.sections[2]?.link);
    });
});