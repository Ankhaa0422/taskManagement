import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { AguulagchCtx } from '../aguulagch/Aguulagch'
import {
  Row, Col, Modal, Button, Tooltip, Input, Select, Avatar,
  Typography, DatePicker, Popover
} from "antd"
import {
  PlusOutlined, TagsOutlined, TeamOutlined, DeleteOutlined,
  SolutionOutlined, PaperClipOutlined, TabletFilled, BookFilled
} from "@ant-design/icons"
import { Zagwar } from '../zagwar/Zagwar'
import "antd/dist/antd.css"
import { v4 } from "uuid"
import moment from "moment"
import { TwitterPicker } from "react-color"
import "../App.css"

function TusulHuudas() {

  const Ref = React.useRef()
  const aguulagchCtx = React.useContext(AguulagchCtx)
  const { height, width } = aguulagchCtx.Hemjee
  const { Paragraph, Text } = Typography
  const { TextArea } = Input
  const { Option } = Select
  const classes = Zagwar()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { RangePicker } = DatePicker
  const dateFormat = "YYYY/MM/DD"

  const showModal = (tasks) => {
    setIsModalVisible(true)
    aguulagchCtx.setJijigState({ ...aguulagchCtx.jijigState, id: v4(), turul: "төсөл" })
    aguulagchCtx.nemye(tasks)
    console.log(aguulagchCtx.tomState)
  }

  const handleOk = () => {
    debugger;
    const hoosloh = {
      id: null,
      title: null,
      description: null,
      ajilchid: [],
      start: '0000-00-00',
      end: '0000-00-00',
      color: "#8ed1fc",
      turul: "уулзалт",
    }
    aguulagchCtx.setTomState((tom) => {
      const tusul = tom.task[aguulagchCtx.tomState.nemekhTask].tusul
      const task = tom.calendarTask
      tom.calendarTask = [...task, aguulagchCtx.jijigState]
      tom.task[aguulagchCtx.tomState.nemekhTask].tusul = [...tusul, aguulagchCtx.jijigState]
      return tom
    })
    aguulagchCtx.setSongogdsonAjilchid([])
    aguulagchCtx.setJijigState(hoosloh)
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const content = (
    <TwitterPicker
      color={aguulagchCtx.jijigState.color}
      onChange={aguulagchCtx.unguSongoh}
      styles={{ position: "relative", zIndex: "3" }}
    />
  )

  return (
    <Row>
      <Col span={24}>
        <Row>
          <Col span={20}>
            <h2 style={{ marginLeft: "50px", fontWeight: "600" }}> Төслүүд</h2>
          </Col>
          <Col span={4}>
            <Select
              defaultValue="This Week"
              style={{ width: 120 }}
              bordered={false}
            >
              <Option key="1" value="Today">
                Today
              </Option>
              <Option key="2" value="This Week" selected>
                This Week
              </Option>
              <Option key="3" value="This Month">
                This Month
              </Option>
              <Option key="4" value="This Year">
                This Year
              </Option>
            </Select>
          </Col>
        </Row>
      </Col>
      <DragDropContext
        onDragEnd={(destination, source) =>
          aguulagchCtx.bairluulah(destination, source)
        }
      >
        {Object.keys(aguulagchCtx.tomState.task).map((tasks, key) => {
          return (
            <Col span={8} key={key} className={classes.Centering}>
              <div className={classes.Bagana} style={{ height: height - 150 }}>
                <div className={classes.Sticky}>
                  <Row className={classes.BaganaTolgoi}>
                    <Col span={18}>
                      <h3>{aguulagchCtx.tomState.task[tasks].BaganaNer}</h3>
                    </Col>
                    <Col span={6}>
                      <h4 className={classes.Toollogo}>
                        {aguulagchCtx.tomState.task[tasks].tusul.length}
                      </h4>
                    </Col>
                  </Row>
                  <Tooltip placement="bottom" title="Таск нэмэх">
                    <Button
                      type="primary"
                      icon={<PlusOutlined />}
                      onClick={(e) => showModal(tasks)}
                      className={classes.TaskNemekhBtn}
                    ></Button>
                  </Tooltip>
                </div>
                <Droppable droppableId={tasks}>
                  {(provided) => {
                    return (
                      <div
                        className={classes.droppableBagana}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {aguulagchCtx.tomState.task[tasks].tusul.map((x, i) => {
                          const type = x.tusulTurul
                          return (
                            <Draggable key={x.id} index={i} draggableId={x.id}>
                              {(provided) => {
                                return (
                                  <div
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <div
                                      className={`${classes.ajilCard} ${classes.mb10px}`}
                                      ref={provided.innerRef}
                                      style={{
                                        boxShadow: "2px 4px 4px -2px" + x.color,
                                      }}
                                    >
                                      <div className={classes.ajilCardContent}>
                                        <Row>
                                          <Col span={2}>
                                            <BookFilled style={{ color: x.color }} />
                                          </Col>
                                          <Col span={19}>
                                            <Text strong>&nbsp;{x.title}</Text>
                                          </Col>
                                          <Col span={3}>
                                            <Tooltip
                                              placement="bottom"
                                              title="Үйлдэл"
                                            >
                                              <Button
                                                shape="circle"
                                                onClick={(e) =>
                                                  alert("Button darlaa")
                                                }
                                                icon={
                                                  <PaperClipOutlined
                                                    style={{
                                                      fontSize: "20px",
                                                      color: "#808080",
                                                    }}
                                                  />
                                                }
                                                className={classes.AttachTovch}
                                              ></Button>
                                            </Tooltip>
                                          </Col>
                                          <Col span="24">
                                            <Paragraph className={classes.tusulParagraph}
                                              ellipsis={
                                                aguulagchCtx.ellipsis
                                                  ? { rows: 6 }
                                                  : false
                                              }
                                            >
                                              {x.description}
                                            </Paragraph>
                                          </Col>
                                          <Col span="21">
                                            <Row
                                              className={classes.AjilchinZone}
                                            >
                                              {x.ajilchid.map((ajilchin, i) => {
                                                return (
                                                  <div>
                                                    {aguulagchCtx.tomState.Ajilchid.map(
                                                      (ajilchid) => {
                                                        return (
                                                          <>
                                                            {Number(ajilchin) ===
                                                              ajilchid.id ? (
                                                              <Tooltip placement="bottom" title={ajilchid.Ner}>
                                                                <Avatar key={i} src={ajilchid.Zurag} className={classes.AjilchinAvatar} />
                                                              </Tooltip>
                                                            ) : null}
                                                          </>
                                                        )
                                                      }
                                                    )}
                                                  </div>
                                                )
                                              })}
                                            </Row>
                                          </Col>
                                          <Col span={3}>
                                            <Tooltip
                                              placement="bottom"
                                              title="Устгах"
                                            >
                                              <Button
                                                shape="circle"
                                                icon={<DeleteOutlined />}
                                                className={classes.UstgahTovch}
                                                onClick={(e) =>
                                                  aguulagchCtx.ustgaya(i, tasks)
                                                }
                                              ></Button>
                                            </Tooltip>
                                          </Col>
                                        </Row>
                                      </div>
                                      {provided.placeholder}
                                    </div>
                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                      </div>
                    )
                  }}
                </Droppable>
              </div>
            </Col>
          )
        })}
      </DragDropContext>

      <Modal
        title="Таск нэмэх"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label className={classes.LabelStyle} for="tusulNer">
          <TagsOutlined /> Төсөлийн нэр
        </label>
        <Input
          ref={Ref}
          name="title"
          placeholder="Төслийн нэр"
          id="tusulNer"
          value={aguulagchCtx.jijigState.title}
          className={classes.mb10px}
          onChange={(e) => aguulagchCtx.UtgaAwah(e)}
        />

        <label className={classes.LabelStyle} for="tusulTailbar">
          <SolutionOutlined /> Төслийн мэдээлэл
        </label>
        <TextArea
          ref={Ref}
          placeholder="Төслийн тухай мэдээлэл"
          autoSize
          name="description"
          value={aguulagchCtx.jijigState.description}
          id="tusulTailbar"
          className={classes.mb10px}
          onChange={(e) => aguulagchCtx.UtgaAwah(e)}
        />

        <label
          className={classes.LabelStyle}
          for="ajilchid"
          style={{ marginBottom: "10px" }}
        >
          Төслийн хугацаа
        </label>
        <br />
        <RangePicker
          style={{ width: "100%" }}
          onChange={aguulagchCtx.hugatsaaAwah}
          className={classes.mb10px}
        />
        <label
          className={classes.LabelStyle}
          for="ajilchid"
          style={{ marginBottom: "10px" }}
        >
          Өнгө солих
        </label>
        <br />
        <Popover
          placement="bottom"
          content={content}
          trigger="click"
          style={{ background: "transparent" }}
        >
          <Button
            type="primary"
            style={{ background: aguulagchCtx.jijigState.color }}
            className={classes.mb10px}
            block
          >
            &nbsp;
          </Button>
        </Popover>

        <br />
        <label className={classes.LabelStyle} for="ajilchid">
          <TeamOutlined /> Ажилчид
        </label>
        <Select
          ref={Ref}
          mode="multiple"
          name="ajilchid"
          allowClear
          height="50px"
          style={{ width: "100%" }}
          value={aguulagchCtx.songogdsonAjilchid}
          placeholder="Please select"
          id="ajilchid"
          className={classes.mb10px}
          onChange={aguulagchCtx.AjilchidSongokh}
        >
          {aguulagchCtx.tomState.Ajilchid.map((row) => {
            return (
              <Option key={row.id} label={row.Ner}>
                <Avatar src={row.Zurag} /> &nbsp;
                {row.Ner} (
                <span className={classes.AlbTush}>{row.AlbanTushaal}</span>)
              </Option>
            )
          })}
        </Select>
      </Modal>
    </Row>
  )
}

export default TusulHuudas
