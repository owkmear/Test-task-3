import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { Row, Col } from 'antd'
import Table from './components/Table'
import Search from './components/Search'
import Title from './components/Typography/Title'
import './App.css'
import 'antd/dist/antd.css'

function App() {
  return (
      <Provider store={store}>
        <Row justify="center">
          <Col xs={22} sm={20} md={18} lg={16} xl={14}>
            <Title text="Todos" />
            <Search />
            <Table />
          </Col>
        </Row>
      </Provider>
  )
}

export default App
