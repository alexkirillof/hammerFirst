import React, { Component } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd'
import { EyeOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons'
import AvatarStatus from 'components/shared-components/AvatarStatus'
import ClientView from './ClientView'
import { Link } from 'react-router-dom'

export class ClientsList extends Component {
  state = {
    clients: [],
    clientProfileVisible: false,
    selectedClient: null,
    loading: true
  }

  searchMovies = () => {
    this.setState({ loading: true })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ clients: data, loading: false })
      })
      .catch((err) => {
        console.error(err)
        this.setState({ loading: false })
      })
  }
  deleteClient = (clientId) => {
    this.setState({
      clients: this.state.clients.filter((item) => item.id !== clientId)
    })
    message.success({ content: `Deleted client ${clientId}`, duration: 2 })
  }

  showClientProfile = (clientInfo) => {
    this.setState({
      clientProfileVisible: true,
      selectedClient: clientInfo
    })
  }

  closeClientProfile = () => {
    this.setState({
      clientProfileVisible: false,
      selectedClient: null
    })
  }

  componentDidMount() {
    this.searchMovies()
  }

  render() {
    const { clients, clientProfileVisible, selectedClient } = this.state

    const tableColumns = [
      {
        title: 'Клиенты',
        dataIndex: 'name',
        render: (_, record) => (
          <div className='d-flex'>
            <AvatarStatus name={record.name} subTitle={record.email} />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase()
            b = b.name.toLowerCase()
            return a > b ? -1 : b > a ? 1 : 0
          }
        }
      },
      {
        title: 'Адрес',
        dataIndex: 'address',
        sorter: {
          compare: (a, b) => a.address.length - b.address.length
        },
        render: (_, record) => (
          <div className='d-flex'>{record.address.city}</div>
        )
      },
      {
        title: 'Место работы',
        dataIndex: 'company',
        render: (_, record) => (
          <div className='d-flex'>{record.company.name}</div>
        ),
        sorter: {
          compare: (a, b) => a.company.length - b.company.length
        }
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div>
            <Tooltip title='Link to'>
              <Link to={`/app/main/clients/${elm.id}`}>
                <FormOutlined
                  className='mr-3'
                  style={{ fontSize: '24px', color: '#389e0d' }}
                />
              </Link>
            </Tooltip>
            <Tooltip title='View'>
              <Button
                type='primary'
                className='mr-2'
                icon={<EyeOutlined />}
                onClick={() => {
                  this.showClientProfile(elm)
                }}
                size='small'
              />
            </Tooltip>
            <Tooltip title='Delete'>
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  this.deleteClient(elm.id)
                }}
                size='small'
              />
            </Tooltip>
          </div>
        )
      }
    ]
    return (
      <Card bodyStyle={{ padding: '0px' }}>
        <Table columns={tableColumns} dataSource={clients} rowKey='id' />
        <ClientView
          data={selectedClient}
          visible={clientProfileVisible}
          close={() => {
            this.closeClientProfile()
          }}
        />
      </Card>
    )
  }
}

export default ClientsList
