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

function UulzaltForm() {

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
    <TagsOutlined /> Уулзалт авсан хүний нэр
   </label>
   <Input
    ref={Ref}
    name="title"
    placeholder="Уулзалт авсан хүний нэр"
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
    placeholder="Уулзах шалтгаан"
    autoSize
    name="description"
    value={aguulagchCtx.jijigState.description}
    id="tusulTailbar"
    className={classes.mb10px}
    onChange={(e) => aguulagchCtx.UtgaAwah(e)}
   />

   <label className={classes.LabelStyle} for="tusulNer">
    <TagsOutlined /> Уулзах байршил
   </label>
   <Input
    ref={Ref}
    name="uulzahBairshil"
    placeholder="Уулзалт авсан хүний нэр"
    id="tusulNer"
    value={aguulagchCtx.jijigState.uulzahBairshil}
    className={classes.mb10px}
    onChange={(e) => aguulagchCtx.UtgaAwah(e)}
   />

   <label
    className={classes.LabelStyle}
    for="ajilchid"
    style={{ marginBottom: "10px" }}
   >
    <ClockCircleOutlined /> &nbsp;Уулзах цаг
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

   <div>
    <label className={classes.LabelStyle} for="ajilchid">
     <TeamOutlined /> Уулзах ажилтан
    </label>
    <Select
     ref={Ref}
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
     {aguulagchCtx.tomState.Ajilchid.map((row, key) => {
      return (
       <Option key={key} value={row.id} label={row.Ner + " " + row.AlbanTushaal}>
        <Avatar src={row.Zurag} /> &nbsp;{row.Ner} &nbsp;
        (<span className={classes.AlbTush}>{row.AlbanTushaal}</span>)
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
  </div >
 )
}

export default UulzaltForm
