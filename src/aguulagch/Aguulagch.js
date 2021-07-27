import React, { createContext, useState, useEffect } from 'react'
import App from '../App';
import { v4 } from 'uuid';

export const AguulagchCtx = createContext();

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}



function Aguulagch(props) {
  const [tomState, setTomState] = useState({
    task: {
      "Хийгдэх төсөл": {
        BaganaNer: "Хийгдэх төсөл",
        tusul: [
          {
            id: v4(),
            color: "#388e3c",
            title: "Хөгжүүлэлт",
            description: "Энэхүү хөгжүүлэлт нь хэрэгтэй",
            ajilchid: [3, 2],
            start: "2021-07-22",
            end: "2021-07-25",
          },
        ],
      },
      "Хийгдэж буй төсөл": {
        BaganaNer: "Хийгдэж буй төсөл",
        tusul: [],
      },
      "дууссан төсөл": {
        BaganaNer: "Хийгдэж дууссан төсөл",
        tusul: [],
      },
    },
    Ajilchid: [
      {
        id: 1,
        Ner: "Бат",
        AlbanTushaal: "программист",
        Zurag: "https://avatarfiles.alphacoders.com/153/thumb-1920-153463.jpg",
      },
      {
        id: 2,
        Ner: "Дорж",
        AlbanTushaal: "Дизайнер",
        Zurag: "https://avatarfiles.alphacoders.com/153/thumb-1920-153466.png",
      },
      {
        id: 3,
        Ner: "Халиун",
        AlbanTushaal: "программист",
        Zurag: "https://avatarfiles.alphacoders.com/153/thumb-1920-153472.png",
      },
      {
        id: 4,
        Ner: "Анхбаяр",
        AlbanTushaal: "программист",
        Zurag: "https://avatarfiles.alphacoders.com/153/thumb-1920-153472.png",
      },
    ],
    nemekhTask: undefined,
    weekendsVisible: false,
    calendarTask: [
      {
        id: v4(),
        title: "Event Garchig",
        color: "#388e3c",
        start: new Date(),
        uulzahBairshil: "Caffe Bene",
        end: new Date(),
        description: "asdfghfbcdxs",
        qwerty: "this is additional information",
        turul: "уулзалт",
        ajilchid: ['4'],
      },
      {
        id: v4(),
        color: "#388e3c",
        title: "Хөгжүүлэлт",
        description: "Энэхүү хөгжүүлэлт нь хэрэгтэй",
        ajilchid: ['3', '2'],
        start: "2021-07-26",
        end: "2021-07-28",
        turul: "төсөл",
      },
      {
        id: v4(),
        color: "#388e3c",
        title: "Гарчиг",
        description: "Хувийн Ажил",
        start: "2021-07-28 06:30",
        end: "2021-07-28 07:30",
        ajilchid: ['4'],
        turul: "хувийн ажил",
      },
      {
        id: v4(),
        color: "#388e3c",
        title: "Lorem Ipsum",
        description: "Хувийн Ажил",
        start: "2021-07-29 06:30",
        end: "2021-07-29 07:30",
        ajilchid: ['4'],
        turul: "хувийн ажил",
      },

    ],

    NewtersenEseh: false,

  })

  const [jijigState, setJijigState] = useState({
    id: v4(),
    ajilchid: [],
    start: new Date(),
    end: new Date(),
    color: "#FF6900",
    turul: "уулзалт",
  })

  const [songogdsonAjilchid, setSongogdsonAjilchid] = useState([])

  const [ellipsis, setEllipsis] = React.useState(true)

  function setleye() {
    setTomState({ ...tomState })
  }

  function UtgaAwah(e) {
    const khoch = e.target.name
    setJijigState({ ...jijigState, [khoch]: e.target.value })
  }

  function AjilchidSongokh(value) {
    setSongogdsonAjilchid([value])
    setJijigState({ ...jijigState, ajilchid: value })
  }

  function unguSongoh(color, event) {
    setJijigState({ ...jijigState, color: color.hex })
  }

  function hugatsaaAwah(date, dateString) {
    setJijigState({
      ...jijigState,
      start: dateString[0],
      end: dateString[1],
    })
  }

  const bairluulah = ({ destination, source }) => {
    console.log(tomState.nemekhTask)
    if (!destination) {
      return
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return
    }
    const ajilHuulah = tomState.task[source.droppableId].tusul[source.index]
    console.log("====>", ajilHuulah)
    setTomState((tom) => {
      tom = { ...tom }
      tom.task[source.droppableId].tusul.splice(source.index, 1)
      tom.task[destination.droppableId].tusul.splice(
        destination.index,
        0,
        ajilHuulah
      )
      return tom
    })
  }

  function nemye(tasks) {
    console.log(tasks)
    tomState.nemekhTask = tasks
    setleye()
  }

  function ustgaya(id, tasks) {
    console.log(id, tasks)
    setTomState((tom) => {
      tom = { ...tom }
      tom.task[tasks].tusul.splice(id, 1)
      tom.calendarTask.splice(id, 1)
      return tom
    })
  }

  const udurSongoh = (e) => {
    setJijigState({ ...jijigState, start: e.startStr, end: e.endStr })
  }

  function turulUtgaAwah(e) {
    setJijigState({ ...jijigState, turul: e })
  }

  function tsagiinUtgaAwah(e) {
    console.log(e)
  }

  function KhadgalakhBtn() {
    const hoosloh = {
      id: v4(),
      title: null,
      description: null,
      ajilchid: [],
      start: new Date(),
      end: new Date(),
      turul: "уулзалт",
    }
    setTomState((tom) => {
      const tusul = tom.task["Хийгдэх төсөл"].tusul
      const task = tom.calendarTask
      if (jijigState.turul === "төсөл") {
        tom.task["Хийгдэх төсөл"].tusul = [...tusul, jijigState]
      }

      tom.calendarTask = [...task, jijigState]
      return tom
    })
    setSongogdsonAjilchid([])
    setJijigState(hoosloh)
  }

  const Hemjee = useWindowDimensions()
  return (
    <AguulagchCtx.Provider
      value={{
        Hemjee, hugatsaaAwah, unguSongoh, UtgaAwah, AjilchidSongokh, songogdsonAjilchid,
        jijigState, tomState, setJijigState, setTomState, bairluulah, ustgaya, nemye, setleye,
        ellipsis, setSongogdsonAjilchid, udurSongoh, turulUtgaAwah, tsagiinUtgaAwah,
        KhadgalakhBtn
      }}>
      <App props={props} />
    </AguulagchCtx.Provider>
  )
}

export default Aguulagch;