import React, {FC} from 'react';
import Header from '../Header';
import {RouteComponentProps} from 'react-router-dom'

const AuthLayout:FC<RouteComponentProps> = ({
  children,
}) => {
  return (
    <div>
      <Header/>
      <div style={{
        display: 'flex',
        margin: 'auto',
      }}>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout;
