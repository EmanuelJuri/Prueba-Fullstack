import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useUser from "../../hooks/useUser"
import { Button, Modal, Form, Input } from 'antd';
import { updateUser } from "../../services/user";

import editIcon from '../../assets/editIcon.svg'

import './UserDetail.css'

export default function UserDetail() {
    const navigate = useNavigate()
    const { id } = useParams()
    const userDetail = useUser(id)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fieldToUpdate, setFieldToUpdate] = useState(null);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleEdit = (item) => {
        setFieldToUpdate(item)
        showModal()
    }

    const onFinish = async (values) => {
        const userDataUpdate = [values, userDetail]
        const userUpdated = await updateUser(userDataUpdate)

        if (userUpdated.status === 200) {
            window.location.href = window.location.href
        }
        handleCancel()
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {
                !userDetail
                    ?
                    <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh' }}
                    >
                        <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!sw800" style={{ width: '30em' }} />
                    </div>
                    :
                    <>
                        <div className="user-detail-container">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png"
                                alt="avatar-img"
                                className="user-detail-avatar"
                            />
                            <section className="user-detail-section">
                                <ul>
                                    <li className="user-detail-item">
                                        <div>
                                            <b>Nombre: </b>
                                            {userDetail[0]?.name}
                                        </div>
                                        <img
                                            src={editIcon}
                                            alt="icon"
                                            className="user-detail-icon-edit"
                                            onClick={() => handleEdit('name')}
                                        />
                                    </li>
                                    <li className="user-detail-item">
                                        <div>
                                            <b>Email: </b>
                                            {userDetail[0]?.email}
                                        </div>
                                        <img
                                            src={editIcon}
                                            alt="icon"
                                            className="user-detail-icon-edit"
                                            onClick={() => handleEdit('email')}
                                        />
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className='back-button'>
                            <Button type="primary" onClick={() => navigate('/')} size='large'>
                                Volver
                            </Button>
                        </div>
                    </>
            }

            <Modal title="Ingrese lo que desee cambiar" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label={`${fieldToUpdate}`}
                        name={`${fieldToUpdate}`}
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su usuario/email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item className='form-container-button'>
                        <Button type="default" className='form-button' onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button type="primary" htmlType="submit" className='form-button'>
                            Actualizar
                        </Button>
                    </Form.Item>


                </Form>
            </Modal>
        </>
    )
}