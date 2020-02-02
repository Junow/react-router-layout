import React, {FC} from 'react';
import {RouteComponentProps} from 'react-router-dom'

const PublicLayout:FC<RouteComponentProps> = ({
  children,
}) => {
  return (
    <div style={{
      display: 'flex',
      margin: 'auto',
      background: 'lightblue',
    }}>
      {children}
    </div>
  )
};

export default PublicLayout;