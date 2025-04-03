import React from "react";
import styled, { css } from "styled-components";
import Container from "../common/container";
import logo from "../../Imgs/shopee-logo.png";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

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
    width: 100vw;
    padding: 16px;
    ${(props) => props.$fixed && css`
        position: fixed;
        top: 0; /* 建議加上 top: 0 確保固定在頂部 */
        left: 0; /* 確保水平定位 */
        z-index: 1000; /* 確保在其他內容之上 */
    `}
`;
const StyleHeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Navigator = styled.div`
    a{
        margin: 0 4px;
        color: #fff;
        text-decoration: none;
    }
`;
const ToolBar = styled.div`
    a{
        margin: 0 6px;
        color: #fff;
        text-decoration: none;
    }
`;
const Flex = styled.div`
    display: flex;
    align-items: center;
`;
const Header = ({ $fixed }) => {
    return (
        <HeaderWrapper $fixed={$fixed}>
            <Container>
                <StyleHeaderSection>
                    <Navigator>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">下載</Link>
                        <Link to="/">追蹤我們</Link>
                        <Link to="/">部落格</Link>
                    </Navigator>
                    <ToolBar>
                        <Link to="/">通知</Link>
                        <Link to="/">幫助中心</Link>
                        <Link to="/">帳號</Link>   
                    </ToolBar>
                </StyleHeaderSection>

                <StyleHeaderSection>
                    <Link to="/">
                        <img src={logo} alt="logo" height={64}/>
                    </Link>
                    <Flex>
                            <Search
                            style={{marginRight:8}}
                            placeholder="在商城搜尋"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                            />
                        <Link to="/cart">
                            <ShoppingCartOutlined  style={{fontSize:32,color:'#fff'}}/>
                        </Link>
                    </Flex>
                </StyleHeaderSection >
            </Container>
        </HeaderWrapper>
    );
};
export default Header;