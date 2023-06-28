import { motion } from "framer-motion";

const speakers = [
  {
    name: "Леонид Вороненко",
    description: "Старший пастор церквей «Новое Поколение» в Беларуси",
    url: "/1-2.jpg",
  },
  {
    name: "Виталий Шушкевич",
    description:
      "Автор и исполнитель песен, лидер служения прославления церкви «Новое Поколение» г. Барановичи",
    url: "/2-2.jpg",
  },
  {
    name: "Сергей Кобрин",
    description:
      "Звукорежиссёр, педагог, автор и исполнитель песен, основатель группы «Деяния», руководитель музыкальных проектов церкви",
    url: "/3-2.jpg",
  },
  {
    name: "Нормунд Пиесис",
    description:
      "Магистр музыки, педагог джазовой импровизации, руководитель ансамблей в ВУЗ, участник и солист Латвийского биг-бэнда, участник международных проектов",
    url: "/5.jpg",
  },
  // {
  //   name: "Станислав Янчин",
  //   description:
  //     "Музыкальный руководитель ц. 'Иисуса Христа', бас- гитарист, звукорежиссёр, автор инструментальной музыки. Преподаватель музыкального отделения хрестианского колледжа 'ХДН' по предмету 'бас-гитара' и 'ансамбль'. Организатор и участник межцерковных музыкальных проектов.",
  //   url: "/9.jpg",
  // },
  // {
  //   name: "Любовь Янчина",
  //   description:
  //     "Артистка балета народного танца высшей категории (БГЗХА 'Хорошки'). Педагог-хореограф первой категории (стаж работы 20 лет). Основатель и руководитель хрестианской танцевальной группы 'Радость Сиона'. Участник межцерковных творческих проектов.",
  //   url: "",
  // },
  // {
  //   name: "Дарья Янчина",
  //   description:
  //     "Артистка балета народного танца высшей категории (Гос.ансамбль танца Беларуси). Педагог-хореограф. Лидер хрестианской танцевальной группы 'Радость Сиона', лидер Творческой лаборатории ц. 'Иисуса Христа' (г.Минск), участник группы прославления, участник межцерковных творческих проектов.",
  //   url: "",
  // },
];

export default function SpeakersPage() {
  return (
    <div className="flex flex-col items-center justify-between sm:py-[120px] pt-[120px] pb-0 bg-white p-4 z-10">
      <motion.h2
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-4xl font-extrabold leading-tight tracking-tight text-pink-400  mono mb-12"
      >
        Наши спикеры
      </motion.h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:mb-[100px] mb-[160px] lg:mt-0 mt-20 z-20">
        {speakers.map((item, i) => (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: i / 1000,
            }}
            key={i}
            className="max-w-sm bg-white/80 rounded-lg shadow "
          >
            <img
              className="rounded-t-lg object-cover object-top w-full h-[300px]"
              src={item.url}
              alt="photo"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {item.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
