import styles from "../components/RootLayout/index.module.scss";

import Image from "next/image";

export default function ContactsPage() {
  return (
    <>
      <div className="mt-[100px]">
        <div className={styles.center} />
      </div>
      <h2 className="text-4xl z-50 font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        Информация
      </h2>

      <div className="container z-50 mt-20 mx-auto sm:text-2xl flex justify-center flex-col items-center">
        <h2 className="text-3xl font-bold mb-12 title">О школе</h2>
        <section className="sm:mb-32 mb-10 text-gray-800 sm:w-2/3 w-full">
          <p className="mb-8">
            Служение прославления было и остается одним из важнейших
            составляющих любой современной церкви. Это служение требует,
            высокого мастерства, как в духовных, так и в профессиональных
            навыках.
          </p>
          <p className="mb-10">
            Школа поклонения{" "}
            <span className="font-extrabold title">СКИНИЯ</span> - это грамотное
            и разумное вложение своего времени и ресурсов, потому что за эти дни
            каждый участник найдет для себя массу ответов и получит стратегию и
            план для реформации своего служения, переведя его на качественно
            новый уровень для славы нашего{" "}
            <span className="font-bold title">Господа Иисуса Христа.</span>
          </p>

          <p className="mb-2">Основные направления:</p>
          <ul className="ml-4 text-gray-500">
            <li>- учение о поклонении </li>
            <li>- практическое применение знаний</li>
            <li>- пророческое поклонение</li>
            <li>- знакомство, общение</li>
            <li>- обмен опытом</li>
          </ul>
        </section>
      </div>

      <h1 className="mt-10 mb-10 text-2xl font-bold">
        Смоленская 28 - Барановичи - Беларусь
      </h1>
      <div className="md:w-2/3 w-full relative h-[400px] mx-auto">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0 dark:invert"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.9171224462784!2d26.026471415711562!3d53.12963329862263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d8cfe1a9c1c715%3A0x2844f8b8b22c6888!2sUlitsa%20Smolenskaya%2028%2C%20Baranavi%C4%8Dy%2C%20Belarus!5e0!3m2!1sen!2sus!4v1653587038964!5m2!1sen!2sus"
        ></iframe>
      </div>

      <section className="text-gray-600 mb-10 mt-20 body-font flex justify-center flex-col w-full items-center">
        <div className="w-full text-center">
          <h2 className="text-2xl font-bold">Контактные лица</h2>
        </div>

        <div className="p-4 max-w-md  sm:p-8">
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
              <li className="py-3 sm:py-4">
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
                    <p className="text-sm font-medium text-gray-900 truncate ">
                      Анна (расселение)
                    </p>
                    <a
                      href="https://t.me/stenova"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="text-sm text-gray-500 truncate">
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
      </section>

      <div className="mb-[100px]"></div>
    </>
  );
}
