import React, {FC} from 'react';
import {RouteComponentProps} from 'react-router-dom'

const AuthLayout:FC<RouteComponentProps> = ({
  children,
}) => {
  return (
    <div>
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
