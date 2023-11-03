import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../services/user';
import { logout } from '../../services/auth';

import './ChangePassword.css';

export default function ChangePassword() {
    const navigate = useNavigate();

    const closeSession = async () => {
        logout()
        const loggedUserJSON = window.localStorage.getItem('sesionPrueba')
        if (!loggedUserJSON) {
            navigate('/auth')
        }
    }

    const onFinish = async (values) => {
        const userUpdated = await updateUser([values])

        if (userUpdated.status === 200) {
            closeSession()
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className='form-container'>
            <h1 className='form-title'>Cambio de contraseña</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 6,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
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

                <Form.Item
                    label="Nueva Contraseña"
                    name="newPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su nueva contraseña!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item className='form-container-button' >
                    <Button type="default" className='form-button' onClick={() => navigate('/auth')} size='large'>
                        Cancelar
                    </Button>
                    <Button type="primary" htmlType="submit" className='form-button' size='large'>
                        Actualizar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};