// Libraries
import React from "react";
import { Layout } from 'antd';
import { Outlet } from "react-router-dom";


// Components
import PagesFooter from "../../components/footer/PagesFooter";
const { Header, Content,Footer} = Layout;


const PostAdPage: React.FC = () => {
    return (
        <Layout className="base-layout">
            <Header className="base-header">
               
            </Header>
            <Content className="base-content">
                <Outlet/>
            </Content>
            <Footer className="footer">
                <PagesFooter/>
            </Footer>
        </Layout>
    );
};

export default PostAdPage;