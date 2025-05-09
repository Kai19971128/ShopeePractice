import React from "react";
import styled, { css } from "styled-components";
import Container from "../common/Container";
import logo from "../../Imgs/shopee-logo.png";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Flexbox from "../common/Flexbox";
import AuthContext from "../auth/AuthContext";
const { Search } = Input;
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );
  const onSearch = (value, _e, info) => console.log(info?.source, value);
const HeaderWrapper = styled.header`
    display: flex;
    background-color: #d1011c;
    width: 100%;
    min-height: 64px;
    justify-content: center;
    ${(props) => props.fixed && css`
        position: fixed;
       top: 0;
        left: 0;
        z-index: 20;
    `}
`;

const Navigator = styled.div`
    a{
        margin: 0 4px;
        color: #fff;
        text-decoration: none;
    }
`;
const ToolBar = styled(Flexbox)`
    a{
        margin: 0 6px;
        color: #fff;
        text-decoration: none;
    }
`;

const Header = ({ $fixed }) => {
    const {isAuthenticated,logout} = React.useContext(AuthContext);
    return (
        <HeaderWrapper fixed={$fixed}>
            <Container>
                <Flexbox 
                justify="space-between"
                align="center"
                >
                    <Navigator>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">下載</Link>
                        <Link to="/">追蹤我們</Link>
                        <Link to="/">部落格</Link>
                    </Navigator>
                    <ToolBar>
                        <Link to="/">通知</Link>
                        <Link to="/">幫助中心</Link>
                        {isAuthenticated ? (
                            <div>
                                <Link to="/">我的帳號</Link>
                                <span onClick={()=>logout()}>登出</span>
                            </div>
                            ):(
                            <Link to="/login">登入</Link>)}
                    </ToolBar>
                </Flexbox>

                <Flexbox maxwidth="100%"margin="5px 0"justify="space-between" align="center">
                    <Link to="/">
                        <img src={logo} alt="logo" height={64}/>
                    </Link>
                    <Flexbox justify="flex-end">
                            <Search
                            placeholder="在商城搜尋"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                            />
                        <Link to="/cart">
                            <ShoppingCartOutlined  style={{fontSize:32,color:'#fff'}}/>
                        </Link>
                    </Flexbox>
                </Flexbox>
            </Container>
        </HeaderWrapper>
    );
};
export default Header;