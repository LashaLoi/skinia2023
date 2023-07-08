import Link from "next/link";

import { motion } from "framer-motion";

import { Button } from "../components/Button";

export default function RegisteredPage() {
  return (
    <div className="lg:mt-0 z-20 flex flex-col items-center justify-between">
      <div className="hero min-h-screen bg-local md:bg-fixed bg-cover bg-[url(/111.jpg)]">
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-neutral-content flex flex-col py-[100px]">
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
            }}
            className="text-5xl font-extrabold leading-tight tracking-tight text-purple-200"
          >
            Спасибо что стали спонсором!
          </motion.div>
          <div className="max-w-[700px] py-8 text-lg text-center">
            <div className="mt-4 mb-4">
              Мы скоро с вами свяжемся!
              <span className="text-pink-400"> +375 (29) 206-11-32 Анна</span>
            </div>
          </div>
          <div className="z-50 gap-8 flex items-center">
            <Link href="/">
              <Button>На главную</Button>
            </Link>

            <Link href="/register">Регистрация</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
