import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';


interface Props extends RouteComponentProps {};

const Main = ({history}: Props) => {
  return (
    <div>
      <a onClick={history.goBack}>이전</a>
      <Link to='/login'>로그인</Link>
    </div>
  )
};

export default Main;