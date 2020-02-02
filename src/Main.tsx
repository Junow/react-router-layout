import React, {FC} from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {};

const Main:FC<Props> = ({history}) => {
  return (
    <div>
      <a onClick={history.goBack}>이전</a>
      <Link to='/login'>로그인</Link>
    </div>
  )
};

export default Main;