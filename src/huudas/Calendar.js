import React, { useContext, useState, useEffect, useRef, } from "react"
import {
 Row, Col, Modal, Button, Input, Select,
 Avatar, DatePicker, TimePicker, Popover, Badge
} from "antd"
import {
 TagsOutlined, TeamOutlined, SaveOutlined, SolutionOutlined, ClockCircleOutlined, EditOutlined,
 BgColorsOutlined,
} from "@ant-design/icons"
import { Zagwar } from '../zagwar/Zagwar'
import "antd/dist/antd.css"
import "../App.css"
import moment from "moment"
import "@fullcalendar/daygrid/main.css"
import "@fullcalendar/timegrid/main.css"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin, { Draggable } from "@fullcalendar/interaction"
import { TwitterPicker } from "react-color"
import { AguulagchCtx } from "../aguulagch/Aguulagch"
import TusulForm from "../component/TusulForm"
import UulzaltForm from "../component/UulzaltForm"
import PersonalForm from "../component/PersonalForm"
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'
import EventHarah from "../component/EventHarah"

function TaskCalendar() {

 const calendarRef = useRef()
 const Ref = useRef()
 const aguulagchCtx = useContext(AguulagchCtx)
 const classes = Zagwar()
 const { Option } = Select
 const { TextArea } = Input
 const { RangePicker } = DatePicker
 const dateFormat = "YYYY/MM/DD"
 const [shvvh, setShvvh] = useState(0);
 const [shvvgdsenEvent, setShvvgdsenEvent] = useState([])
 useEffect(() => {
  setShvvgdsenEvent([])
  if (shvvh === 0) {
   setShvvgdsenEvent(aguulagchCtx.tomState.calendarTask)
  } else {
   aguulagchCtx.tomState.calendarTask.map((x, i) => {
    x.ajilchid.map((row, index) => {
     if (shvvh === Number(row)) {
      setShvvgdsenEvent(shvvgdsenEvent => ([...shvvgdsenEvent, x]))
     }
    })
   })
  }
 }, [shvvh])

 const eventHover = (eventInfo) => {
  tippy(eventInfo.el, {
   content: eventInfo.event.extendedProps.turul,
  })
 }

 function shvvhSelect(e) {
  setShvvh(e)
  setShvvgdsenEvent([])
 }

 return (
  <Row>
   <Col span={15} className={classes.Calendar}>
    <div style={{ float: "left", width: "100%" }}>
     <Select
      ref={Ref}
      name="ajilchid"
      allowClear
      showSearch
      height="50px"
      style={{ width: "100%" }}
      value={shvvh}
      placeholder="Please select"
      id="ajilchid"
      className={classes.mb10px}
      onChange={e => shvvhSelect(e)}
      filterOption={(input, option) =>
       option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
     >
      <Option value={0} label="Бүх ажилтан">
       &nbsp; Бүх ажилтан
      </Option>
      {aguulagchCtx.tomState.Ajilchid.map((row, key) => {
       return (
        <Option key={key} value={row.id} label={row.Ner + " " + row.AlbanTushaal}>
         <Avatar src={row.Zurag} /> &nbsp;{row.Ner} &nbsp;
         (<span className={classes.AlbTush}>{row.AlbanTushaal}</span>)
        </Option>
       )
      })}
     </Select>
     <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
       left: "prev,next today",
       center: "title",
       right: "dayGridMonth,timeGridWeek",
      }}
      initialView="timeGridWeek"
      themeSystem="bootstrap"
      nowIndicator="true"
      ref={calendarRef}
      editable={true}
      selectable={true}
      select={aguulagchCtx.udurSongoh}
      selectMirror={true}
      dayMaxEvents={true}
      eventMouseEnter={eventHover}
      eventContent={function (info) {
       return (
        <div>
         <Popover content={<EventHarah info={info} />} title={info.event.extendedProps.turul} trigger="click">
          <div style={{ position: "absolute", height: "100%", width: "100%" }}></div>
          <b style={{ color: info.event.backgroundColor }}>▓</b>
          <b>&ensp;{info.event.title}</b><br />
         </Popover>
        </div>
       )
      }}
      weekends={aguulagchCtx.tomState.weekendsVisible}
      events={shvvgdsenEvent}
     />
    </div>
   </Col>
   <Col span={7} className={classes.Calendar}>
    <div className={classes.Sticky}>
     <h2 style={{ textAlign: "center" }}>Таск нэмэх</h2>
     <label className={classes.LabelStyle} for="tusulNer">
      <TagsOutlined /> Төрөл
     </label>
     <Select
      value={aguulagchCtx.jijigState.turul}
      style={{ width: "100%" }}
      onChange={(e) => aguulagchCtx.turulUtgaAwah(e)}
      allowClear
      className={classes.mb10px}
     >
      <Option value="төсөл">Төсөл</Option>
      <Option value="хувийн ажил">Хувийн ажил</Option>
      <Option value="уулзалт">Уулзалт</Option>
     </Select>

     {
      aguulagchCtx.jijigState.turul === "төсөл" &&
      <TusulForm />
     }
     {
      aguulagchCtx.jijigState.turul === "уулзалт" &&
      <UulzaltForm />
     }
     {
      aguulagchCtx.jijigState.turul === "хувийн ажил" &&
      <PersonalForm />
     }
    </div>
   </Col>
  </Row>
 )
}

export default TaskCalendar;
