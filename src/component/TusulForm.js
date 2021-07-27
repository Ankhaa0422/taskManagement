import React, { useRef, useContext } from 'react'
import { AguulagchCtx } from '../aguulagch/Aguulagch'
import {
 Row, Col, Modal, Button, Input, Select,
 Avatar, DatePicker, TimePicker, Popover
} from "antd"
import moment from 'moment'
import {
 TagsOutlined, TeamOutlined, SaveOutlined, SolutionOutlined, ClockCircleOutlined,
 BgColorsOutlined,
} from "@ant-design/icons"
import { Zagwar } from '../zagwar/Zagwar'
import "antd/dist/antd.css"
import { TwitterPicker } from "react-color"

function TusulForm() {

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
    <TagsOutlined /> Төслийн нэр
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
    style={{ width: "100%" }}
    onChange={aguulagchCtx.hugatsaaAwah}
    className={classes.mb10px}
    value={[moment(aguulagchCtx.jijigState.start, dateFormat), moment(aguulagchCtx.jijigState.end, dateFormat)]}
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

   <div>
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
     value={aguulagchCtx.songogdsonAjiltan}
     placeholder="Please select"
     id="ajilchid"
     className={classes.mb10px}
     onChange={aguulagchCtx.AjilchidSongokh}
     filterOption={(input, option) =>
      option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
     }
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
   </div>
   <Col span="24">
    <Button
     type="primary"
     onClick={aguulagchCtx.KhadgalakhBtn}
     icon={<SaveOutlined />}
     style={{ background: "#03AC13", border: "none", float: "right" }}
    >
     Хадгалах
    </Button>
   </Col>
  </div>
 )
}

export default TusulForm
