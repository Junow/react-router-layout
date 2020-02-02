import React, {FC} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {Input, Button} from 'antd'; 
interface Props extends RouteComponentProps {};

const Login:FC<Props> = ({
  history,
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '10rem',
    }}>
      <div style={{
        width: '40%',
      }}>
        <a onClick={history.goBack}>Back</a>
        <h1>Login</h1>
        <Input type='text' placeholder='id'/>
        <Input type='password' placeholder='password'/>
        <Button type='primary' style={{width: '100%'}}>Login</Button>
      </div>
    </div>
  )
};

export default Login;
