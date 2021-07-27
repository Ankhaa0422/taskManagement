import React, { useRef, useContext } from 'react'
import moment from 'moment'
import { AguulagchCtx } from '../aguulagch/Aguulagch'
import {
 Row, Col, Modal, Button, Input, Select,
 Avatar, DatePicker, TimePicker, Popover
} from "antd"
import {
 TagsOutlined, TeamOutlined, SaveOutlined, SolutionOutlined, ClockCircleOutlined,
 BgColorsOutlined,
} from "@ant-design/icons"
import { Zagwar } from '../zagwar/Zagwar'
import "antd/dist/antd.css"
import { TwitterPicker } from "react-color"

function PersonalForm() {

 const Ref = useRef()
 const aguulagchCtx = useContext(AguulagchCtx)
 const classes = Zagwar()
 const { Option } = Select
 const { TextArea } = Input
 const { RangePicker } = DatePicker
 const dateFormat = "YYYY/MM/DD"

 const content = (
  <TwitterPicker
   color={aguulagchCtx.jijigState.color}
   onChange={aguulagchCtx.unguSongoh}
   styles={{ position: "relative", zIndex: "3" }}
  />
 )

 return (
  <div>

   <label className={classes.LabelStyle} for="tusulNer">
    <TagsOutlined /> Гарчиг
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
    <SolutionOutlined /> Нэмэлт мэдээлэл
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
    <ClockCircleOutlined /> &nbsp;хугацаа
   </label>
   <br />
   <RangePicker
    showTime={{ format: 'HH:mm' }}
    format="YYYY-MM-DD HH:mm"
    value={[moment(aguulagchCtx.jijigState.start), moment(aguulagchCtx.jijigState.end)]}
    onChange={aguulagchCtx.hugatsaaAwah}
   />

   <label
    className={classes.LabelStyle}
    for="ajilchid"
    style={{ marginBottom: "10px" }}
   >
    <BgColorsOutlined />
    &nbsp;Өнгө солих
   </label><br />
   <Popover
    placement="bottom"
    content={content}
    trigger="click"
    style={{ background: "transparent" }}
   >
    <Button
     type="primary"
     style={{ background: aguulagchCtx.jijigState.color, border: "none" }}
     className={classes.mb10px}
     block
    >
     &nbsp;
    </Button>
   </Popover>

   <br />
   {/* <Col span="24">
    <Button
     type="primary"
     onClick={aguulagchCtx.KhadgalakhBtn}
     icon={<SaveOutlined />}
     style={{ background: "#03AC13", border: "none", float: "right" }}
    >
     Хадгалах
    </Button>
   </Col> */}
  </div>
 )
}

export default PersonalForm
