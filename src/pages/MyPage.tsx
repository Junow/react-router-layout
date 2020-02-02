import React, {FC} from 'react';
import {RouteComponentProps} from 'react-router-dom';

interface Props extends RouteComponentProps {};

const MyPage:FC<Props> = ({
  history,
}) => {
  return (
    <div>
      this is mypage
    </div>
  )
}

export default MyPage;
