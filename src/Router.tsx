import React, {FC} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Main from './Main';
import Login from './Login';

interface Props {}
const Router:FC<Props> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;