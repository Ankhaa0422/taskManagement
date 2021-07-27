import './App.css'
import React from 'react'
import { Menu, Row, Col, PageHeader, Input, Button, Dropdown, Avatar, Tooltip } from "antd"
import {
  HomeOutlined, BarChartOutlined, FolderOpenOutlined, MessageOutlined, CalendarOutlined,
  SettingOutlined, LogoutOutlined, SearchOutlined, BellOutlined, DownOutlined,
  QuestionCircleOutlined, UserOutlined, ProjectOutlined
} from "@ant-design/icons"
import "antd/dist/antd.css"
import { Zagwar } from './zagwar/Zagwar'
import { AguulagchCtx } from './aguulagch/Aguulagch'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import { useLocation } from 'react-router'
import Login from './huudas/Login'
import TusulHuudas from './huudas/TusulHuudas'
import TaskCalendar from './huudas/Calendar'

function App(match) {
  const aguulagchCtx = React.useContext(AguulagchCtx)
  const { height, width } = aguulagchCtx.Hemjee
  const menu = (
    <Menu>
      <Menu.Item icon={<UserOutlined />} key="0">
        <a href="#">Профайл</a>
      </Menu.Item>
      <Menu.Item icon={<ProjectOutlined />} key="1">
        <a href="#">Миний төслүүд</a>
      </Menu.Item>
      <Menu.Item icon={<SettingOutlined />} key="1">
        <a href="#">Тохиргоо</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item icon={<LogoutOutlined />} key="1">
        <a href="#">Гарах</a>
      </Menu.Item>
    </Menu>
  )
  const classes = Zagwar()
  return (
    <Router>
      <Row>
        <Col span={5}>
          <Menu
            // onClick={HuudasSongolt}
            style={{ width: "100%", height: height, position: "relative" }}
            defaultSelectedKeys={'3'}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >

            <Menu.Item className={classes.Logo} key="8">
              <Link to='/'>
                .Studio
              </Link>
            </Menu.Item>

            <Menu.Item icon={<HomeOutlined />} key="1">
              <Link to='/'>
                Нүүр
              </Link>
            </Menu.Item>

            <Menu.Item icon={<BarChartOutlined />} key="2">
              <Link to='/status'>
                Статус
              </Link>
            </Menu.Item>

            <Menu.Item icon={<FolderOpenOutlined />} key="3">
              <Link to='/projects'>
                Төслүүд
              </Link>
            </Menu.Item>

            <Menu.Item icon={<MessageOutlined />} key="4">
              <Link to='/chat'>
                Чат
              </Link>
            </Menu.Item>

            <Menu.Item icon={<CalendarOutlined />} key="5">
              <Link to='/calendar'>
                Календар
              </Link>
            </Menu.Item>
            <Menu.Item icon={<CalendarOutlined />} key="100">
              <Link to='/login'>
                Login
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={19}>
          <div>
            <PageHeader
              className={(classes.pageTolgoi, "site-page-header")}
              tags={
                <Input
                  placeholder="Хайлт хийх"
                  className="ant-page-header-heading"
                  prefix={<SearchOutlined />}
                  style={{ border: "none" }}
                />
              }
              extra={[
                <Tooltip placement="bottom" title="Асуулт асуух">
                  <Button
                    shape="circle"
                    icon={<QuestionCircleOutlined />}
                    className={classes.AsuultTovch}
                  ></Button>
                </Tooltip>,
                <Tooltip placement="bottom" title="Мэдэгдэл">
                  <Button shape="circle" icon={<BellOutlined />} className={classes.medegdelTovch} ></Button>
                </Tooltip>,

                <Dropdown className={classes.textKhar} overlay={menu} trigger={["click"]} >
                  <a onClick={(e) => e.preventDefault()}>
                    Н. Анхбаяр &nbsp;
                    <DownOutlined />
                    &nbsp;
                    <Avatar src="https://i.pinimg.com/originals/b8/17/b5/b817b5ac2463a48e6732a0bc42148543.png" />
                  </a>
                </Dropdown>,
              ]}
            />
          </div>
          <div>
            <Switch>
              <Route exact path="/projects" component={TusulHuudas} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/calendar" component={TaskCalendar} />
            </Switch>
          </div>
        </Col>
      </Row>
    </Router>
  );
}

export default App;
