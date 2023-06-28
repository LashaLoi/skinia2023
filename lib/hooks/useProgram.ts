import { useState } from "react";

export const useProgram = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const program = [
    {
      get: first,
      set: setFirst,
      title: "День - 1",
      event: [
        {
          time: "11:00",
          title: "регистрация",
        },
        {
          time: "12:00",
          title:
            "торжественное открытие / приветствие и информация, молитва и поклонение",
        },
        {
          time: "13:00",
          title: "обед",
        },
        {
          time: "14:00",
          title:
            "учение + обратная связь / Тема 1: Истоки происхождения служения поклонения",
        },
        {
          time: "15:30",
          title: "перерыв",
        },
        {
          time: "15:45",
          title: "учение + обратная связь / Тема 2: Истинные поклонники",
        },
        {
          time: "17:00",
          title: "ужин",
        },
        {
          time: "18:30",
          title:
            "музыкальный джем / время для практики и подготовкам к марафону хвалы!",
        },
      ],
    },
    {
      get: second,
      set: setSecond,
      title: "День - 2",
      event: [
        {
          time: "10:00",
          title: "молитва и поклонение",
        },
        {
          time: "11:00",
          title: "перерыв",
        },
        {
          time: "11:30",
          title:
            "учение + обратная связь / Тема 3: Вечность, Христоцентризм, теократический порядок",
        },
        {
          time: "13:00",
          title: "обед",
        },
        {
          time: "14:00",
          title:
            "учение + обратная связь / Тема 4: Административное устройство",
        },
        {
          time: "15:30",
          title: "перерыв",
        },
        {
          time: "15:45",
          title: "творческая лаборатория ",
        },
        {
          time: "17:30",
          title: "ужин",
        },
        {
          time: "18:30",
          title:
            "музыкальный джем / время для практики и подготовкам к марафону хвалы!",
        },
      ],
    },
    {
      get: third,
      set: setThird,
      title: "День - 3",
      event: [
        {
          time: "10:00",
          title: "МАРАФОН ХВАЛЫ",
        },
        {
          time: "14:00",
          title: "окончание школы, совместный обед",
        },
      ],
    },
  ];

  return program;
};
