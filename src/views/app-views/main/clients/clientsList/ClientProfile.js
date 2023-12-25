import React from 'react'
import { Form, Button, Row, Col, Spin } from 'antd'
import { ROW_GUTTER } from 'constants/ThemeConstant'

export class ClientProfile extends React.Component {
  avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

  state = {
    id: this.props.match.params.clientId,
    client: {},
    loading: true
  }

  getCurrentClient = () => {
    this.setState({ loading: true })
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ client: data, loading: false })
      })
      .catch((err) => {
        console.error(err)
        this.setState({ loading: false })
      })
  }

  putClientInfo = (nextPath) => {
    const data = this.state.client
    this.setState({ loading: true })
    fetch('https://fakerapi.it/api/v1/persons?_locale=fr_FR', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          console.log(data)
          this.setState({ loading: false })
        }, 1000)
      })
      .catch((err) => {
        setTimeout(() => {
          console.error(err)
          this.setState({ loading: false })
        }, 1000)
      })
      .finally(() => {
        if (nextPath) {
          window.location.href = nextPath // как вариант можно еще через hoc реализовать
        }
      })
  }
  componentDidMount() {
    this.getCurrentClient()
  }
  render() {
    const { client, loading } = this.state
    return (
      <>
        {loading ? (
          <Spin
            size='large'
            className='mt-4 center'
            style={{ marginLeft: '50%', marginTop: '50%' }}
          />
        ) : (
          <div className='mt-4'>
            <Form
              name='basicInformation'
              initialValues={{
                name: client.name,
                email: client.email,
                username: client.username,
                phoneNumber: client.phone,
                website: client.website
              }}
            >
              <Row>
                <Col xs={24} sm={24} md={24} lg={16}>
                  <Row gutter={ROW_GUTTER}>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item label='Name:' name='name'>
                        {client.name}
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item label='Username' name='username'>
                        {client.username}
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item label='Email' name='email'>
                        {client.email}
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item label='Phone Number' name='phoneNumber'>
                        {client.phone}
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item label='Website' name='website'>
                        {client.website}
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24}>
                      <Form.Item label='Street' name='street'>
                        {client?.address?.street}
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item label='City' name='city'>
                        {client?.address?.city}
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item label='Zip code' name='zipcode'>
                        {client?.address?.zipcode}
                      </Form.Item>
                    </Col>
                  </Row>
                  <Button
                    type='primary'
                    htmlType='submit'
                    onClick={() => {
                      this.putClientInfo('/hammerFirst/#/app/main/clients/clientsList')
                    }}
                  >
                    Save Change
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        )}
      </>
    )
  }
}

export default ClientProfile
