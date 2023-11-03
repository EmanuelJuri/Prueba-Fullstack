import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useUser from "../../hooks/useUser"
import { Button, Modal, Form, Input } from 'antd';

export default function ModalUpdate(fieldToUpdate, ModalOpen) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [fieldToUpdate, setFieldToUpdate] = useState(null);

    useEffect(()=>{
        setIsModalOpen(ModalOpen)
    },[])

    console.log('fieldToUpdate', fieldToUpdate)

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async (values) => {
        console.log('modal', values)
        const userDataUpdate = [values, userDetail]
        console.log('userDataUpdate', userDetail)
        const userUpdated = await updateUser(userDataUpdate)

        console.log('userUpdated:', userUpdated.json());
        if (userUpdated.status === 200) {
            window.location.href = window.location.href
        }
        handleCancel()
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Modal title="Ingrese los cambios" open={isModalOpen} onCancel={handleCancel} footer={null}>
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

    )
}