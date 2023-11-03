import { Table } from 'antd';
import useBill from '../../hooks/useBill';

const columns = [
    {
        title: 'id_Factura',
        dataIndex: 'idFactura',
        key: 'idFactura',
        render: (text) => <a href={`/bill/${text}`}>{text}</a>,
        sorter: (a, b) => a.idFactura - b.idFactura,

    },
    {
        title: 'Cliente',
        dataIndex: 'cliente',
        key: 'cliente',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
        render: (text) => <>$ {text}</>,
        sorter: (a, b) => a.total - b.total,
    },
    {
        title: 'Fecha',
        dataIndex: 'fecha',
        key: 'fecha',
    }
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

export default function Bill() {
    const dataBill = useBill()
    return (
        <>
            {
                !dataBill
                    ?
                    <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh' }}
                    >
                        <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!sw800" style={{ width: '30em' }} />
                    </div>
                    :
                    <div>
                        <h1>Facturación</h1>
                        <Table columns={columns} dataSource={dataBill} onChange={onChange} />
                    </div>
            }
        </>
    )
};