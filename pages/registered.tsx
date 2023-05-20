import Link from "next/link";
import { Confetti } from "../components/Confetti";

import { motion } from "framer-motion";
import { PageWrapper } from "../components/PageWrapper";

export default function RegisteredPage() {
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
        className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white text-center"
      >
        Регистрация прошла успешно!
      </motion.h2>

      <div className="mt-4 mb-4">
        <a
          href="#"
          title=""
          className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Learn more about our agenda
        </a>
      </div>

      <div className="z-50 gap-4 flex">
        <Link href="/">
          <button className="btn">На главную</button>
        </Link>

        <Link href="/register">
          <button className="btn">Регистрация</button>
        </Link>
      </div>
      <div className="h-[200px]"></div>

      <Confetti />
    </PageWrapper>
  );
}
