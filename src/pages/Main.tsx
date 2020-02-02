import React, {FC} from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {};

const Main:FC<Props> = ({history}) => {
  return (
    <div>
      this is main page
    </div>
  )
};

export default Main;