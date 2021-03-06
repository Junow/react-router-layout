import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect,RouteComponentProps } from "react-router-dom";
// import Router from './Router';
import 'antd/dist/antd.css';
import Main from './pages/Main';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

import routes from './routes';

import PublicLayout from './Layout/PublicLayout';
import AuthLayout from './Layout/AuthLayout';

interface IPage {
  exact: boolean;
  path: string;
  component: React.FC<RouteComponentProps>,
  layout: React.FC<RouteComponentProps>,
}
const pages:IPage[] = [
  {
    exact: true,
    path: routes.main,
    component: Main,
    layout: PublicLayout,
  },
  {
    exact: true,
    path: routes.login,
    component: Login,
    layout: PublicLayout,
  },
  {
    exact: true,
    path: routes.myPage,
    component: MyPage,
    layout: PublicLayout,
  },
];

interface Props {};

const App = ({}: Props) => {

  return (
    <Router>
      <Switch>
        {
          pages.map(
            ({exact, path, component: Component, layout: Layout}, index) => (
              <Route
                key={index}
                exact={exact}
                path={path}
                render={props=>(
                  <Layout {...props}>
                    <Component {...props}/> 
                  </Layout>
                )}
              />
            )
          )
        }
        <Redirect to={routes.main}/>
      </Switch>
    </Router>
  )
};

export default App;