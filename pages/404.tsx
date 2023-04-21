import styles from "../components/RootLayout/index.module.scss";
import Link from "next/link";
import { Path } from "../components/Header/constants";

export default function Page404() {
  return (
    <>
      <div className="mt-[100px]">
        <div className={styles.center} />
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:mb-[200px] mb-[80px] z-30">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Что-то пошло не так
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Скорее всего вы пытаетесь попасть на страницу которой не существует
          </p>
          <Link
            href={Path.HOME}
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </>
  );
}
