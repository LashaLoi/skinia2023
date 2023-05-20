import { motion } from "framer-motion";
import { PageWrapper } from "../components/PageWrapper";
import { useProgram } from "../lib/hooks/useProgram";

export default function ProgramPage() {
  const program = useProgram();

  return (
    <PageWrapper>
      <div className="w-full relative lg:max-w-xl mb-[200px] antialiased z-50">
        <div className="max-w-screen-xl py-8 lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
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
              className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mono"
            >
              Расписание
            </motion.h2>
          </div>

          {program.map((day, i) => (
            <div key={i}>
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
                  delay: 0.2,
                }}
                className="max-w-3xl mx-auto text-center mt-10"
              >
                <motion.button
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => day.set((state) => !state)}
                  className="btn sm:w-1/2 w-full"
                >
                  {day.title}
                </motion.button>
              </motion.div>

              {day.get ? (
                <>
                  <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                    <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                      {day.event.map((event, i) => (
                        <div
                          key={event.title + i}
                          className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center"
                        >
                          <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                            {event.time}
                          </p>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            <a href="#" className="hover:underline">
                              {event.title}
                            </a>
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
