import { motion } from "framer-motion";
import Image from "next/image";

import { icons } from "../components/Menu";

import { useCallback, useReducer, useState } from "react";
import { Button } from "../components/Button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type State = {
  name: string;
  email: string;
  message: string;
};

type Action =
  | {
      name: string;
    }
  | { email: string }
  | { message: string };

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

export function ContactUsSection() {
  const [state, setState] = useReducer(
    (prevState: State, nextState: Action) => ({ ...prevState, ...nextState }),
    defaultValues
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { name, email, message } = state;
  const supabase = createClientComponentClient();

  const handleChange = useCallback(
    ({
      target: { name, value },
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setState({ [name]: value } as Action);
    },
    []
  );

  const handleSubmit = useCallback(async () => {
    setState(defaultValues);
    setLoading(true);

    const data = await supabase.from("s-feedback").insert([
      {
        full_name: state["name"] ?? "-",
        comment: state["message"] ?? "-",
        email: state["email"] ?? "-",
      },
    ]);

    if (data.error) {
      setError(true);
    } else {
      setSuccess(true);
    }

    setLoading(false);
  }, [state, supabase]);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-4">
          <h1 className="text-3xl font-bold mb-4  text-pink-400">
            Обратная связь
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Если у вас есть какие-нибудь вопросы по школе?
          </p>
        </div>
        {error && (
          <div className="alert alert-error mb-4">
            <span>
              Что-то пошло не так, перезагрузите страницу и попробуйте снова
            </span>
          </div>
        )}
        {success && (
          <div className="alert alert-success mb-4">
            <span>Ваш вопрос был отправлен!</span>
          </div>
        )}
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Имя
                </label>
                <input
                  value={name}
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Электронная почта
                </label>
                <input
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Сообщение
                </label>
                <textarea
                  value={message}
                  id="message"
                  name="message"
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full flex justify-center">
              <Button onClick={handleSubmit}>
                {loading ? "Отправка..." : "Отправить"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactsPage() {
  return (
    <div className="flex flex-col items-center justify-between bg-white text-white  z-10">
      <div className="lg:mt-0 z-20 flex flex-col items-center justify-between w-full">
        <div className="hero min-h-screen bg-local md:bg-fixed bg-cover bg-[url(/112.jpg)] bg-center">
          <div className="hero-overlay bg-opacity-10" />
          <div className="hero-content text-center flex flex-col mt-[140px]">
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
              className="text-4xl font-extrabold leading-tight tracking-tight text-pink-400 mono z-10"
            >
              Информация
            </motion.h2>

            <div className="container z-50 mt-10 mx-auto sm:text-2xl flex justify-center flex-col items-center ">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                }}
                className="text-3xl font-bold mb-12  text-pink-400"
              >
                О школе
              </motion.h2>
              <motion.section
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                }}
                className="sm:mb-32 mb-10 text-white sm:w-2/3 w-full"
              >
                <p className="mb-8">
                  Служение прославления было и остается одним из важнейших
                  составляющих любой современной церкви. Это служение требует,
                  высокого мастерства, как в духовных, так и в профессиональных
                  навыках.
                </p>
                <p className="mb-10">
                  Школа поклонения{" "}
                  <span className="font-extrabold  text-pink-400">СКИНИЯ</span>{" "}
                  - это грамотное и разумное вложение своего времени и ресурсов,
                  потому что за эти дни каждый участник найдет для себя массу
                  ответов и получит стратегию и план для реформации своего
                  служения, переведя его на качественно новый уровень для славы
                  нашего{" "}
                  <span className="font-bold  text-pink-400">
                    Господа Иисуса Христа.
                  </span>
                </p>

                <p className="mb-2">Основные направления:</p>
                <ul className="ml-4 text-gray-200 ">
                  <li>- учение о поклонении </li>
                  <li>- практическое применение знаний</li>
                  <li>- пророческое поклонение</li>
                  <li>- знакомство, общение</li>
                  <li>- обмен опытом</li>
                </ul>
              </motion.section>
            </div>
          </div>
        </div>
      </div>

      <motion.h2
        initial={{
          opacity: 0,
          scale: 1.1,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mt-10 mb-10 text-2xl font-bold text-pink-400 p-4"
      >
        Смоленская 28 - Барановичи - Беларусь
      </motion.h2>
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.1,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="md:w-2/3 w-full relative h-[400px] mx-auto"
      >
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0 "
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.9171224462784!2d26.026471415711562!3d53.12963329862263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d8cfe1a9c1c715%3A0x2844f8b8b22c6888!2sUlitsa%20Smolenskaya%2028%2C%20Baranavi%C4%8Dy%2C%20Belarus!5e0!3m2!1sen!2sus!4v1653587038964!5m2!1sen!2sus"
        />
      </motion.div>
      <ContactUsSection />
      <motion.section
        initial={{
          opacity: 0,
          paddingTop: 100,
        }}
        animate={{
          opacity: 1,
          paddingTop: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-gray-600 mb-10 mt-20 body-font flex justify-center flex-col w-full items-center "
      >
        <div className="w-full text-center ">
          <h2 className="text-2xl font-bold text-pink-400">Контактные лица</h2>
        </div>

        <div className="p-4 max-w-md sm:p-8">
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 min-w-[400px] sm:p-0 p-12"
            >
              <li className="py-3 sm:py-4 ">
                <div className="flex sm:flex-row flex-col gap-2 items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full"
                      src="/6.jpg"
                      alt="Эстэра"
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate ">
                      Эстэра (координатор)
                    </p>
                    <a
                      href="https://t.me/esthervoronenko"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="text-sm text-gray-500 truncate ">
                        tg: @esthervoronenko
                      </p>
                    </a>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    +375292265835
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4 ">
                <div className="flex sm:flex-row flex-col gap-2 items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full"
                      src="/7.jpg"
                      alt="Анна"
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate ">
                      Анна (расселение)
                    </p>
                    <a
                      href="https://t.me/stenova"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="text-sm text-gray-500 truncate ">
                        tg: @stenova
                      </p>
                    </a>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    +375292061132
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
      <div className="mb-2 flex justify-center items-center h-[30px]  fill-gray-500">
        {icons.map(({ icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer mx-2"
          >
            {icon}
          </a>
        ))}
      </div>

      <div className="mb-[100px]"></div>
    </div>
  );
}
