import React, { useEffect, useState } from 'react';
import { darkenColor, TruncateText } from '../../../utils/string';
import { Button, Input, Pagination, Switch, Table } from 'antd';
import { useAuth } from '../../../contexts/AccountContext';
import { FormOutlined, PlusOutlined } from '@ant-design/icons';
import { ICONS } from '../../../constants/icons';
import accountAPI from '../../../api/accountAPI';
import './index.scss';

const AdminAccount = (props) => {
  const { pageRole } = props;

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(7);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { account } = useAuth();

  const callAPI = async () => {
    try {
      const res = await accountAPI.adminListAccount(page, limit, pageRole);
      // console.log(res);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  const onRowClick = (record) => {
    setSelectedAccount(record);
    setIsModalVisible(true);
  };

  const onChangeSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    console.log(value);
  };

  const onActiveAccount = (status, id) => {
    console.log('status : ', status, 'id : ', id);
  };

  const onChangeAccountInfo = (record) => {
    console.log(record);
  };

  const columns = [
    {
      title: 'Tài khoản',
      dataIndex: 'displayName',
      key: 'displayName',
      render: (displayName, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={record.avatar}
            alt={record.id}
            style={{ width: 30, height: 30, borderRadius: '50%', marginRight: 8 }}
          />
          <span>{displayName}</span>
        </div>
      ),
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      render: (gender) => <img alt="gender icon" style={{ width: 30, height: 30 }} src={ICONS[gender]} />,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (email) => <p>{TruncateText(email, 30)}</p>,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'tel',
      key: 'tel',
      render: (tel) => <p>{tel}</p>,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      render: (address) => <p>{TruncateText(address, 50)}</p>,
    },
    {
      title: 'Kích hoạt',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive, record) => (
        <Switch size="small" value={isActive} onClick={(status) => onActiveAccount(status, record.id)} />
      ),
    },
    {
      title: 'Chỉnh sửa',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (_, record) => <Button icon={<FormOutlined />} onClick={() => onChangeAccountInfo(record)} />,
    },
  ];

  return (
    <div className="admin-account-container">
      <div>
        <h3 className="admin-account-title" style={{ color: darkenColor('#8280ff') }}>
          {`Danh sách ${pageRole === 'customer' ? 'khách hàng' : 'nhân viên'}`}
        </h3>
        <div>
          <Input placeholder="Nhập vào tên, email" value={search} onChange={onChangeSearch} />
        </div>
        {account.role === 'admin' && pageRole === 'staff' && (
          <Button className="admin-account-button-create-account">
            <PlusOutlined />
            Tạo tài khoản
          </Button>
        )}
      </div>
      <Table
        dataSource={filterData}
        columns={columns}
        style={{ width: '100%' }}
        pagination={false}
        onRow={(record) => ({
          onClick: (event) => {
            const clickedElement = event.target;
            if (clickedElement.closest('.ant-select') || clickedElement.closest('.ant-select-dropdown')) {
              event.stopPropagation();
            } else {
              onRowClick(record);
            }
          },
        })}
      />
      <Pagination
        current={page}
        pageSize={limit}
        total={total}
        onChange={(page, pageSize) => {
          setPage(page);
          setLimit(pageSize);
        }}
        style={{ marginTop: 16, textAlign: 'right' }}
      />
    </div>
  );
};

export default AdminAccount;