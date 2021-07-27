import React, { useContext, useState, useRef, } from "react"
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
import { AguulagchCtx } from "../aguulagch/Aguulagch"

export default function EventHarah(props) {
 const { info } = props
 const classes = Zagwar()
 const aguulagchCtx = useContext(AguulagchCtx)
 const [eventZasah, setEventZasah] = useState({
  title: false,
  description: false,
  bairshil: false,
  uulzahTsag: false,
 })
 const [zasahEventData, setZasahEventData] = useState()
 const { TextArea } = Input

 const enableInput = (e) => {
  setEventZasah({ ...eventZasah, [e.target.id]: true })
 }

 function eventEdit(e, info) {
  aguulagchCtx.tomState.calendarTask.map((x, i) => {
   if (x.id === info.event.id) {
    aguulagchCtx.setTomState((tom) => {
     tom = { ...tom }
     const task = tom.calendarTask[i]
     tom.calendarTask[i] = { ...task, [e.target.name]: e.target.value }
     return tom
    })
    setEventZasah(false)
   }
  })
 }

 function hugatsaaZasah(value, dateString) {
  aguulagchCtx.tomState.calendarTask.map((x, i) => {
   if (x.id === info.event.id) {
    aguulagchCtx.setTomState((tom) => {
     tom = { ...tom }
     const task = tom.calendarTask[i]
     if (info.event.extendedProps.turul === "төсөл" || info.event.extendedProps.turul === "хувийн ажил") {
      tom.calendarTask[i] = { ...task, start: dateString[0], end: dateString[1] }

      return tom
     }
     tom.calendarTask[i] = { ...task, start: dateString }
     return tom
    })
   }
  })
 }

 function Check123(value, dateString) {
  console.log(dateString)
 }
 return (
  < div className={classes.containerFluid} style={{ width: "350px", padding: "10px", }}>


   {
    info.event.extendedProps.turul === "уулзалт" &&
    <>
     <div className={classes.Row}>
      <div className={classes.ColAuto}>
       <p style={{ padding: "4px 11px" }}><b>Уулзах хүн: </b></p>
      </div>
      <div className={classes.Col7}>
       {
        eventZasah.title === true && <Input name="title"
         disabled={!eventZasah.title}
         autoFocus
         onBlur={() => setEventZasah({ ...eventZasah, title: false })}
         onKeyUp={(e) => {
          if (e.key === 'Enter') {
           eventEdit(e, info)
          }
         }}
        />
        || <p style={{ padding: "4px 11px" }} id="title" onClick={e => enableInput(e)}>{info.event.title}</p>
       }
      </div>
     </div>

     <div className={classes.Row}>
      <div className={classes.Col12}>
       <p style={{ padding: "4px 11px" }}><b>Нэмэлт мэлээлэл: </b></p>
      </div>
      <div className={classes.Col12} style={{ marginTop: "-15px" }}>
       {
        eventZasah.description === true &&
        <TextArea
         name="description"
         disabled={!eventZasah.description}
         autoFocus
         onBlur={(e) => setEventZasah({ ...eventZasah, description: false })}
         onKeyUp={(e) => {
          if (e.key === 'Enter') {
           eventEdit(e, info)
          }
         }}
        ></TextArea>
        || <p style={{ padding: "4px 11px" }} id="description" onClick={e => enableInput(e)}>{info.event.extendedProps.description}</p>
       }
      </div>
     </div>
     <div className={classes.Row}>
      <div className={classes.ColAuto}>
       <p style={{ padding: "4px 11px" }}><b>Уулзах байршил: </b></p>
      </div>
      <div className={classes.Col6}>
       {
        eventZasah.bairshil === true &&
        <Input
         name="uulzahBairshil"
         disabled={!eventZasah.bairshil}
         autoFocus
         onBlur={() => setEventZasah({ ...eventZasah, bairshil: false })}
         onKeyUp={(e) => {
          if (e.key === 'Enter') {
           eventEdit(e, info)
          }
         }}
        />
        || <p style={{ padding: "4px 11px" }} id="bairshil" onClick={e => enableInput(e)}>{info.event.extendedProps.uulzahBairshil}</p>
       }
      </div>
     </div>

     <div className={classes.Row}>
      <div className={classes.ColAuto}>
       <p style={{ padding: "4px 11px" }}><b>Уулзах цаг: </b></p>
      </div>
      <div className={classes.Col6}>
       {
        eventZasah.uulzahTsag === true &&
        <DatePicker
         showTime
         name="uulzahBairshil"
         disabled={!eventZasah.uulzahTsag}
         onChange={hugatsaaZasah}
         autoFocus
         onBlur={() => setEventZasah({ ...eventZasah, uulzahTsag: false })} />
        // <Input
        //  name="uulzahBairshil"
        //  disabled={!eventZasah.uulzahTsag}
        //  autoFocus
        //  onBlur={() => setEventZasah({ ...eventZasah, uulzahTsag: false })}
        //  onKeyUp={(e) => {
        //   if (e.key === 'Enter') {
        //    eventEdit(e, info)
        //   }
        //  }}
        // />
        || <p style={{ padding: "4px 11px" }} id="uulzahTsag" onClick={e => enableInput(e)}>{info.timeText} цаг</p>
       }
      </div>
     </div>
    </>
   }

   {
    info.event.extendedProps.turul === "төсөл" &&
    <>
     <div className={classes.Row}>
      <div className={classes.ColAuto}>
       <p style={{ padding: "4px 11px" }}><b>Төслийн нэр: </b></p>
      </div>
      <div className={classes.Col7}>
       {
        eventZasah.title === true && <Input name="title"
         disabled={!eventZasah.title}
         autoFocus
         onBlur={() => setEventZasah({ ...eventZasah, title: false })}
         onKeyUp={(e) => {
          if (e.key === 'Enter') {
           eventEdit(e, info)
          }
         }}
        />
        || <p style={{ padding: "4px 11px" }} id="title" onClick={e => enableInput(e)}>{info.event.title}</p>
       }
      </div>
     </div>

     <div className={classes.Row}>
      <div className={classes.Col12}>
       <p style={{ padding: "4px 11px" }}><b>Нэмэлт мэлээлэл: </b></p>
      </div>
      <div className={classes.Col12} style={{ marginTop: "-15px" }}>
       {
        eventZasah.description === true &&
        <TextArea
         name="description"
         disabled={!eventZasah.description}
         autoFocus
         onBlur={(e) => setEventZasah({ ...eventZasah, description: false })}
         onKeyUp={(e) => {
          if (e.key === 'Enter') {
           eventEdit(e, info)
          }
         }}
        ></TextArea>
        || <p style={{ padding: "4px 11px" }} id="description" onClick={e => enableInput(e)}>{info.event.extendedProps.description}</p>
       }
      </div>
     </div>

     <div className={classes.Row}>
      <div className={classes.ColAuto}>
       <p style={{ padding: "4px 11px" }}><b>Хугацаа: </b></p>
      </div>
      <div className={classes.Col8}>
       {
        eventZasah.uulzahTsag === true &&
        <DatePicker.RangePicker
         name="uulzahBairshil"
         disabled={!eventZasah.uulzahTsag}
         onfocusout={(e) => setEventZasah({ ...eventZasah, uulzahTsag: false })}
         onChange={hugatsaaZasah}
         renderExtraFooter={() => <Button style={{ float: "right", margin: "5px" }} onClick={hugatsaaZasah}>Ok</Button>}
        />
        || <p style={{ padding: "4px 11px" }} id="uulzahTsag" onClick={e => enableInput(e)}>{info.event.startStr} - {info.event.endStr}</p>
       }
      </div>
     </div>
    </>
   }

   {
    info.event.extendedProps.turul === "хувийн ажил" &&
    <>
     <div className={classes.Row}>
      <div className={classes.ColAuto}>
       <p style={{ padding: "4px 11px" }}><b>Гарчиг: </b></p>
      </div>
      <div className={classes.Col7}>
       {
        eventZasah.title === true && <Input name="title"
         disabled={!eventZasah.title}
         autoFocus
         onBlur={() => setEventZasah({ ...eventZasah, title: false })}
         onKeyUp={(e) => {
          if (e.key === 'Enter') {
           eventEdit(e, info)
          }
         }}
        />
        || <p style={{ padding: "4px 11px" }} id="title" onClick={e => enableInput(e)}>{info.event.title}</p>
       }
      </div>
     </div>

     <div className={classes.Row}>
      <div className={classes.Col12}>
       <p style={{ padding: "4px 11px" }}><b>Нэмэлт мэлээлэл: </b></p>
      </div>
      <div className={classes.Col12} style={{ marginTop: "-15px" }}>
       {
        eventZasah.description === true &&
        <TextArea
         name="description"
         disabled={!eventZasah.description}
         autoFocus
         onBlur={(e) => setEventZasah({ ...eventZasah, description: false })}
         onKeyUp={(e) => {
          if (e.key === 'Enter') {
           eventEdit(e, info)
          }
         }}
        ></TextArea>
        || <p style={{ padding: "4px 11px" }} id="description" onClick={e => enableInput(e)}>{info.event.extendedProps.description}</p>
       }
      </div>
     </div>

     <div className={classes.Row}>
      <div className={classes.ColAuto}>
       <p style={{ padding: "4px 11px" }}><b>Хугацаа: </b></p>
      </div>
      <div className={classes.Col9}>
       {
        eventZasah.uulzahTsag === true &&
        <DatePicker.RangePicker
         showTime={{ format: 'HH:mm' }}
         disabled={!eventZasah.uulzahTsag}
         format="YYYY-MM-DD HH:mm"
         onBlur={(e) => setEventZasah({ ...eventZasah, uulzahTsag: false })}
         onChange={hugatsaaZasah} />
        || <p style={{ padding: "4px 11px" }} id="uulzahTsag" onClick={e => enableInput(e)}>{info.timeText} цаг</p>
       }
      </div>
     </div>
    </>
   }
   <button onClick={e => console.log(aguulagchCtx.tomState)}>qwerty</button>
  </div >
 )
}
