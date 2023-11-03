import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/auth';

import './Register.css';

export default function Register() {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const newUser = await register(values)
        if (newUser.status === 201) {
            navigate('/')
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='form-container'>
            <h1 className='form-title'>Registro de Usuarios</h1>
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
                    label="Nombre"
                    name="username"
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
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

                <Form.Item className='form-container-button'>
                    <Button type="default" className='form-button' onClick={() => navigate('/auth')} size='large'>
                        Cancelar
                    </Button>
                    <Button type="primary" htmlType="submit" className='form-button' size='large'>
                        Registrarse
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};