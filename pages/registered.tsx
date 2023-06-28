import Link from "next/link";
import { Confetti } from "../components/Confetti";

import { motion } from "framer-motion";
import { PageWrapper } from "../components/PageWrapper";
import { Button } from "../components/Button";

export default function RegisteredPage() {
  return (
    <>
      <Confetti />

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
              Регистрация прошла успешно!
            </motion.div>
            <div className="max-w-[700px] py-8 text-lg">
              <div className="mt-4 mb-4">
                Команда школы не предоставляет бесплатный ночлег, если вам нужна
                помощь в поиске жилья в аренду, свяжитесь с нами{" "}
                <span className="text-pink-400"> +375 (29) 206-11-32 Анна</span>
              </div>
              <div className="mt-4 mb-4">
                Присоединяетесь к нашему Telegram-каналу, чтобы знать больше
                подробностей о школе и не пропустить важной информации! (
                <span className="text-pink-400">
                  <a
                    href="https://t.me/+ckIe79U-NIZkMDli"
                    target="_blank"
                    rel="noreferrer"
                  >
                    telegram
                  </a>
                </span>
                )
              </div>
              <div>
                Приятный бонус для каждого участника - бесплатный обед! На месте
                будет работать платное кафе
              </div>
              <div className="mt-4 mb-4">
                В этом году мы запускаем марафон хвалы в последний день школы!
                Участие возможно только при условии, что вы были всю школу и
                всей командой. благодарим за регистрацию и до встречи!
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
    </>
  );
}
