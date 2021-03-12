import * as React from 'react';
import {
	Switch,
	Route,
  useHistory,
  withRouter,
  Link
} from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Content } = Layout;

import * as routes from './routes';
import SearchComponent from './components/search/search';

export interface IMainAppState {
  search: string;
}

const MainApp = () => {
  const history = useHistory();
  const { ItemsSection, IndexSection, NotFoundSection } = routes;
  
  const onSearch = (value: string) => {
    // Search input function
    history.push(`/items?q=${value}`)
  };

  return (
    <>
      <Layout className="Layout">
        <Header className="Layout--Header">
          <div className="Layout--Header--Container">
            <Link to="/">
              <div className="Layout--Header--Container--Logo"></div>
            </Link>
            <div className="Layout--Header--Container--Search">
              <SearchComponent placeholder="Buscar productos, marcas y más…" onSearch={onSearch} />
            </div>
          </div>
        </Header>
        <Content className="Layout--Content">
          <Switch>
            <Route path="/items" component={ItemsSection} />
            <Route path="/" exact component={IndexSection} />
            <Route component={NotFoundSection} />
          </Switch>
        </Content>
        {/*}
        <Footer className="Layout--Footer">
          <div className="Layout--Footer--Container">
            <span>Buscador MercadoLibre</span>
            <span>Creado por Lucas Shoobridge</span>
          </div>
        </Footer>*/}
      </Layout>
    </>
  );
};

export default withRouter(MainApp);