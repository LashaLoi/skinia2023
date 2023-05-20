import { motion } from "framer-motion";
import { PageWrapper } from "../components/PageWrapper";

export default function SpeakersPage() {
  return (
    <PageWrapper>
      <motion.h2
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          zIndex: 50,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mono"
      >
        Наши спикеры
      </motion.h2>
      <div className="mt-4 lg:mb-20 mb-4">
        <a
          href="#"
          title=""
          className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Learn more about our agenda
        </a>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:mb-[100px] mb-[160px] lg:mt-0 mt-20 z-20">
        {[1, 2, 3].map((item) => (
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
              delay: item / 1000,
            }}
            key={item}
            className="max-w-sm bg-white/80 rounded-lg shadow dark:bg-gray-800/75 dark:border-gray-700"
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
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
}
