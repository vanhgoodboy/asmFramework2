import React from 'react'

import { PhoneOutlined, LaptopOutlined, TabletFilled, AudioOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../../asset/images/logo1.png'
const { Header, Content, Sider } = Layout;

const item3: MenuProps['items'] = [
  // { key: "cellphone", icon: <PhoneOutlined />, label: <Link to="/admin">Điện thoại</Link> },
  { key: "laptop", icon: <LaptopOutlined />, label: <Link to="/admin">Sản phẩm</Link>  },
  // { key: "tablet", icon: <TabletFilled />, label: "Điện thoại" },
  // { key: "audio", icon: <AudioOutlined />, label: "Âm thanh" },
  {
    key: "categories", icon: <SettingOutlined />,
    label: <Link to="/admin/categories">Loại hàng</Link>
  },
]

const AdminLayout = () => {
  return (
    <div>
         <Layout>
    <HeaderCustom>
      <Logo src={LogoImage} />
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
    </HeaderCustom>
    <Layout>
      <Sider
        collapsible={true}
        width={200}
        className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={item3}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <ContentCustom>
          <Outlet />
        </ContentCustom>
      </Layout>
    </Layout>
  </Layout>
    </div>
  )
}

const HeaderCustom = styled(Header)`
    background-color: #00B0D7;
    height: 64px;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 64px;
    height: auto;
`

const ContentCustom = styled(Content)`
  min-height: 100vh;
`

export default AdminLayout