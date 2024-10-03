// Libraries
import React from "react";
import { Layout } from 'antd';

// Styles
import './EditAccountPage.css';

// Components
import PagesFooter from "../../components/footer/PagesFooter";
import {Outlet} from "react-router-dom";


const { Header, Content,Footer } = Layout;


const MainSearchPage: React.FC = () => {
    return (
        <Layout className="edit-account-layout">
            <Header className="edit-account-header">
                
            </Header>
            <Content>
                <Outlet />
            </Content>
            <Footer className="footer">
                <PagesFooter/>
            </Footer>
        </Layout>
    );
};

export default MainSearchPage;
