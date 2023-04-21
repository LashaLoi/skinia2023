import styles from "../components/RootLayout/index.module.scss";

export default function SpeakersPage() {
  return (
    <>
      <div className="mt-[100px]">
        <div className={styles.center} />
      </div>
      <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        Наши спикеры
      </h2>
      <div className="mt-4 lg:mb-20 mb-4">
        <a
          href="#"
          title=""
          className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Learn more about our agenda
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:mb-[100px] mb-[160px] lg:mt-0 mt-20 z-20">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="max-w-sm bg-white/80 border border-gray-200 rounded-lg shadow dark:bg-gray-800/75 dark:border-gray-700"
          >
            <img
              className="rounded-t-lg object-cover object-top w-full h-[300px]"
              src="https://newlife.by/wp-content/uploads/2015/09/2015-09-28roohpe2.jpg"
              alt="photo"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Леонид Вороненко
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
