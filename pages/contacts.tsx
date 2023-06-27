import { motion } from "framer-motion";
import Image from "next/image";
import { PageWrapper } from "../components/PageWrapper";
import { icons } from "../components/Menu";

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
              className="text-4xl font-extrabold leading-tight tracking-tight text-pink-400 dark:text-white mono z-10"
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
                className="sm:mb-32 mb-10 text-white sm:w-2/3 w-full dark:text-white"
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
          className="absolute inset-0 dark:invert"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.9171224462784!2d26.026471415711562!3d53.12963329862263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d8cfe1a9c1c715%3A0x2844f8b8b22c6888!2sUlitsa%20Smolenskaya%2028%2C%20Baranavi%C4%8Dy%2C%20Belarus!5e0!3m2!1sen!2sus!4v1653587038964!5m2!1sen!2sus"
        />
      </motion.div>

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
        <div className="w-full text-center dark:text-blue-200">
          <h2 className="text-2xl font-bold text-pink-400">Контактные лица</h2>
        </div>

        <div className="p-4 max-w-md sm:p-8">
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 min-w-[400px] sm:p-0 p-12"
            >
              <li className="py-3 sm:py-4 ">
                <div className="flex items-center space-x-4">
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
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-blue-200">
                      Эстэра (координатор)
                    </p>
                    <a
                      href="https://t.me/esthervoronenko"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="text-sm text-gray-500 truncate dark:text-gray-300">
                        tg: @esthervoronenko
                      </p>
                    </a>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-gray-100">
                    +375292265835
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4 ">
                <div className="flex items-center space-x-4">
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
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-blue-200">
                      Анна (расселение)
                    </p>
                    <a
                      href="https://t.me/stenova"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="text-sm text-gray-500 truncate dark:text-gray-300">
                        tg: @stenova
                      </p>
                    </a>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-gray-100">
                    +375292061132
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
      <div className="mb-2 flex justify-center items-center h-[30px] dark:fill-slate-300 fill-gray-500">
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
