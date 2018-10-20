import React from 'react';
import ReactDOM from 'react-dom';
import './scss';

import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;
import Login from './components/login';
import Register from './components/register';
import Routes from './config/routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class HelloMessage extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <div className="logo">Grommerce</div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div
              style={{
                background: '#fff',
                padding: 24,
                minHeight: 280,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Switch>
                <Route path={Routes.login} component={Login} />
                <Route path={Routes.register} component={Register} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Grommerce ©2018</Footer>
        </Layout>
      </Router>
    );
  }
}

let App = document.getElementById('root');

ReactDOM.render(<HelloMessage />, App);
