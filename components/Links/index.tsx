import Link from "next/link";
import { font } from "../../lib/fonts";

import styles from "../RootLayout/index.module.scss";
import { Path } from "../Header/constants";

import { motion } from "framer-motion";

export function Links() {
  return (
    <div className={styles.grid}>
      <Link href={Path.PROGRAM} className={styles.card}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
          }}
        >
          <h2 className={font.className}>
            Расписание <span>-&gt;</span>
          </h2>
          <p className={font.className}>
            Удобное расписание конференции со всеми подробностями
          </p>
        </motion.div>
      </Link>

      <Link href={Path.SPEAKERS} className={styles.card}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <h2 className={font.className}>
            Спикеры <span>-&gt;</span>
          </h2>
          <p className={font.className}>
            Наши специльные гости, а так же хорошо известные спикеры
          </p>
        </motion.div>
      </Link>

      <Link href={Path.PROGRAM} className={styles.card}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          <h2 className={font.className}>
            Информация <span>-&gt;</span>
          </h2>
          <p className={font.className}>
            Подробная информация о всей конференции: местоположение, ответы на
            вопросы, контактная информация
          </p>
        </motion.div>
      </Link>
    </div>
  );
}
