import React, {FC} from 'react';
import {RouteComponentProps} from 'react-router-dom'
import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';

const { Content, Header } = Layout;

interface Props extends RouteComponentProps {};

const PublicLayout:FC<Props> = ({
  history,
  children,
}) => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          <a onClick={history.goBack}>Back</a>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to='/login'>Login</Link>
          </Menu.Item>
        <Menu.Item key="4">
          <Link to='/mypage'>My Page</Link>
        </Menu.Item>
      </Menu>
    </Header>
      <Content>
        {children}
      </Content>
    </Layout>
  )
};

export default PublicLayout;