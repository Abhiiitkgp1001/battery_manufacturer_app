import React, { useState,useEffect } from 'react';
import { Drawer, Layout, Menu, theme } from 'antd';
import MobileApp from './MobileApp';
import Banner from '../components/Banner';
import { borderColor, mobileWidth, sidebarCollapseWidth } from '../config';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import SideMenu from '../components/SideMenu';
const { Header, Content, Footer, Sider } = Layout;
const CustomHeader = styled(Header)`
padding: 0;
height: auto;
border: 0.5px solid ${borderColor};
background-color: white;
`;

const Home = ({width}) => {
  const Container = styled.div`
  background-color: white; 
  padding: ${ width<mobileWidth? '36px 16px':'36px' }; 
  border: 0.5px solid ${borderColor};
  `;
  const [collapse, setCollapse] = useState(false);
  const [open, setOpen] = useState(false);
  
  


  return (
    <Layout hasSider>
      
      {width<sidebarCollapseWidth ? 
      <Drawer closable={false} width={260}
      bodyStyle={{ padding:'0px'}}
      placement="left" onClose={()=>setOpen(false)} open={open}>
        <SideMenu open={open} setOpen={()=>setOpen(!open)} width={width} collapse={collapse} setCollapse={()=>setCollapse(!collapse)}/>
      </Drawer>
      :<Sider
        collapsible
        collapsed={collapse}
        breakpoint="lg"
        collapsedWidth={0}
        width={230}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor:'white'
        }}
      >
        <SideMenu collapse={collapse} setCollapse={()=>setCollapse(!collapse)}/>
      </Sider>}
      <Layout
        className="site-layout"
        style={{
          marginLeft: collapse?0: width<sidebarCollapseWidth? 0: 230,
        }}
      >
        <CustomHeader>
            <Navbar open={open} setOpen={()=>setOpen(!open)} width={width} collapse={collapse} setCollapse={()=>setCollapse(!collapse)}/>
        </CustomHeader>
        <Container>
            <Banner width={width}/>
          <MobileApp width={width}/>
        </Container>
      
      </Layout>
    </Layout>
  );
};
export default Home;