import Link from "next/link";

import { Path } from "../components/Header/constants";
import { PageWrapper } from "../components/PageWrapper";

export default function Page404() {
  return (
    <PageWrapper>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:mb-[200px] mb-[80px] z-30 mt-[100px]">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600  mono">
            404
          </h1>
          <p className="mb-4 sm:text-3xl text-xl tracking-tight font-bold text-gray-900 md:text-4xl  mono">
            Что-то пошло не так
          </p>
          <p className="mb-4 sm:text-lg text-md font-light text-gray-500  mono">
            Скорее всего вы пытаетесь попасть на страницу которой не существует
          </p>
          <Link
            href={Path.HOME}
            className="btn inline-flex  bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
