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
import { Helmet } from 'react-helmet';

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
      <Helmet htmlAttributes={{ lang : 'es' }}>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="keywords" content={CONFIG.META_KEYWORDS} />
          <meta name="description" content="Buscador de MercadoLibre Argentina." />
          <meta name="author" content="Lucas Shoobridge" />
          <meta name="copyright" content="Lucas Shoobridge" />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="content-type" content="text/html;UTF-8" />
          <meta http-equiv="cache-control" content="no-cache" />
          <meta http-equiv="content-language" content="es" />
          <meta http-equiv="revisit-after" content="1 days" />
          <title>MercadoLibre - Buscador</title>
      </Helmet>
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