import React, { use } from 'react';
import { Button, Checkbox, Form, Input,message } from 'antd';
import AuthContext from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const LoginForm = () => {
  const navigate = useNavigate();
  const { login ,isAuthenticated } = React.useContext(AuthContext);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleLogin =() =>{
         login(username,password).then(({token,error})=>{
          if(!token){
            message.error(error);
          }
         })
    }
    useEffect(() => {
        isAuthenticated && navigate("/")
      },[isAuthenticated]
    )
  return(
  <Form
    name="basic"
    labelCol={{ span: 0 }}
    wrapperCol={{ span: 24 }}
    
    style={{ 
      width: '100%',
      maxWidth: '360px'
      }}
    
    initialValues={{ remember: true }}
    
   
    autoComplete="off"
  >
    <Form.Item
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
      style={{ marginBottom: '30px' }}
    >
      <Input placeholder='請輸入帳號' size='large' value={username} onChange={e => setUsername(e.target.value)}/>
    </Form.Item>

    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
      style={{ marginBottom: '30px' }}
    >
      <Input.Password placeholder='請輸入密碼' size='large' value={password} onChange={e => setPassword(e.target.value)}/>
    </Form.Item>

    

    <Form.Item label={null} style={{margin:"0 0 10px 0",}}>
      <Button 
      type="primary" 
      htmlType="submit"
      style={{ width: '100%',height:"40px" , backgroundColor: '#ff3c00',borderRadius:"4px",}}
      onClick={handleLogin}>
        登入
      </Button>
    </Form.Item>
  </Form>
)}
export default LoginForm;