import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import { login } from '../../services/auth';

import './Auth.css';

export default function Auth() {
    const navigate = useNavigate()

    const onFinish = async (values) => {
        const user = await login(values)
        if (user.token) {
            navigate('/')
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 6,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Usuario/Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su usuario/email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su contraseña!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item className='form-button'>
                    <Button type="primary" htmlType="submit" size='large'>
                        Login
                    </Button>
                </Form.Item>

                <div className='form-container-links'>
                    <a href="/change-password" className='form-link'>Cambiar Contraseña</a>
                    <a href="/auth-register" className='form-link'>Registrarse</a>
                </div>
            </Form>
        </div>
    )
};