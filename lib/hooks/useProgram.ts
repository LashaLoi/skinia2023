import { useState } from "react";

export const useProgram = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);

  const program = [
    {
      get: first,
      set: setFirst,
      title: "День - 1",
      event: [
        {
          time: "08:00 - 09:00",
          title: "Opening remarks",
        },
        {
          time: "09:00 - 10:00",
          title: "Bergside LLC: Controlling the video traffic flows",
        },
        {
          time: "10:00 - 11:00",
          title: "Flowbite - An Open Framework for Forensic Watermarking",
        },
        {
          time: "11:00 - 12:00",
          title: "Coffee Break",
        },
        {
          time: "12:00 - 13:00",
          title: "Scaling your brand from €0 to multimillion euros",
        },
        {
          time: "13:00 - 14:00",
          title: "Updates from the Open Source Multimedia community",
        },
        {
          time: "14:00 - 15:00",
          title:
            "Exploring the balance between customer acquisition and retention",
        },
        {
          time: "15:00 - 16:00",
          title: "Flowbite - An Open Framework for Forensic Watermarking",
        },
        {
          time: "16:00 - 14:00",
          title: "Scaling your brand from €0 to multimillion euros",
        },
        {
          time: "17:00 - 14:00",
          title: "Drinks & networking",
        },
      ],
    },
    {
      get: second,
      set: setSecond,
      title: "День - 2",
      event: [
        {
          time: "08:00 - 09:00",
          title: "Opening remarks!",
        },
        {
          time: "09:00 - 10:00",
          title: "Bergside LLC: Controlling the video traffic flows",
        },
        {
          time: "10:00 - 11:00",
          title: "Flowbite - An Open Framework for Forensic Watermarking",
        },
        {
          time: "11:00 - 12:00",
          title: "Coffee Break",
        },
        {
          time: "12:00 - 13:00",
          title: "Scaling your brand from €0 to multimillion euros",
        },
        {
          time: "13:00 - 14:00",
          title: "Updates from the Open Source Multimedia community",
        },
        {
          time: "14:00 - 15:00",
          title:
            "Exploring the balance between customer acquisition and retention",
        },
        {
          time: "15:00 - 16:00",
          title: "Flowbite - An Open Framework for Forensic Watermarking",
        },
        {
          time: "16:00 - 14:00",
          title: "Scaling your brand from €0 to multimillion euros",
        },
        {
          time: "17:00 - 14:00",
          title: "Drinks & networking",
        },
      ],
    },
  ];

  return program;
};
