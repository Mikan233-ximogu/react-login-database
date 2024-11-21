import { Col, Row, Card, Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LOGO from '../assets/LOGO2.jpg';

const SignUp = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await axios.post('http://localhost:4000/register', values);
            if (response && response.data) {
                // message.success('账号注册成功，现在可以登录啦！');
            message.success(response.data.message);
            //2秒后跳转
            setTimeout(() => navigate('/login'), 2000);
            } else {
                throw new Error('Unexpected response format')
            }
        } catch (error) {
            if (error.response && error.response.data) {
              message.error('注册失败: ' + error.response.data.message);
            } else {
              message.error('注册失败: ' + error.message);
            }
          }
    };

    return (
        <Row>
            <Col span={8} push={8}>
                <img src={LOGO} style={{
                    width: '300px', display: 'block', margin: '40px auto'
                }} />
                <Card title="创建账号">
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 14 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        onFinish={onFinish} 
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[
                                { required: true, message: '请设置用户名!' },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password" // 与后台一致
                            rules={[
                                { required: true, message: '请设置密码!' },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{ offset: 5, span: 16 }}
                        >
                            <Button type="primary" htmlType="submit" style={{
                                margin: '0 auto', display: 'block'
                            }}>
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default SignUp;
