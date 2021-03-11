import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import MainApp from './main-app';
import { act } from 'react-dom/test-utils';
import { Link, MemoryRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import SearchComponent from 'components/search/search';

const { Header, Content } = Layout;

describe('main-app test suite', () => {
    let wrapper: ReactWrapper;
    it('should render view correctly', async () => {
        await act(async () => {
            wrapper = mount(
                <MemoryRouter initialEntries={['/']} initialIndex={0}>
                    <Route path="/" render={() => <MainApp />} />
                </MemoryRouter>
            );
        });
        wrapper.update();

        expect(wrapper.find(Layout)).toHaveLength(1);
        expect(wrapper.find(Layout).find(Header)).toHaveLength(1);
        expect(wrapper.find(Layout).find(Header).find('.Layout--Header--Container')).toHaveLength(1);
        expect(wrapper.find(Layout).find(Header).find('.Layout--Header--Container').find(Link)).toHaveLength(1);
        expect(wrapper.find(Layout).find(Header).find('.Layout--Header--Container').find('.Layout--Header--Container--Search')).toHaveLength(1);
        expect(wrapper.find(Layout).find(Header).find('.Layout--Header--Container').find('.Layout--Header--Container--Search').find(SearchComponent)).toHaveLength(1);

        expect(wrapper.find(Layout).find(Content)).toHaveLength(1);
        expect(wrapper.find(Layout).find(Content).find(Switch)).toHaveLength(1);
        expect(wrapper.find(Layout).find(Content).find(Switch).find(Route)).toHaveLength(1);
    });
});