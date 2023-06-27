import Link from "next/link";
import { Confetti } from "../components/Confetti";

import { motion } from "framer-motion";
import { PageWrapper } from "../components/PageWrapper";
import { Button } from "../components/Button";

export default function RegisteredPage() {
  return (
    <div className="flex flex-col items-center justify-between sm:py-[120px] pt-[120px] pb-0 bg-white p-4 z-10">
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
        className="text-4xl font-extrabold leading-tight tracking-tight text-purple-200"
      >
        Регистрация прошла успешно!
      </motion.div>

      <div className="max-w-[700px] py-8 text-lg">
        <div className="mt-4 mb-4">
          Команда школы не предоставляет бесплатный ночлег, если вам нужна
          помощь в поиске жилья в аренду, свяжитесь с нами{" "}
          <span className="text-pink-400"> +375 (29) 206-11-32 Анна</span>
        </div>
        <div>Приятный бонус для каждого участника - бесплатный обед!</div>
        <div className="mt-4 mb-4">На месте будет работать платное кафе</div>
        <div className="mt-4 mb-4">
          В этом году мы запускаем марафон хвалы в последний день школы! участие
          возможно только при условии, что вы были всю школу и всей командой.
          благодарим за регистрацию и до встречи!
        </div>
      </div>

      <div className="z-50 gap-8 flex items-center">
        <Link href="/">
          <Button>На главную</Button>
        </Link>

        <Link href="/register">Регистрация</Link>
      </div>
      <div className="h-[200px]"></div>

      <Confetti />
    </div>
  );
}
