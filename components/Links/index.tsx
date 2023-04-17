import { font } from "../../lib/fonts";

import styles from "../RootLayout/index.module.scss";

export function Links() {
  return (
    <div className={styles.grid}>
      <a className={styles.card} target="_blank" rel="noopener noreferrer">
        <h2 className={font.className}>
          Расписание <span>-&gt;</span>
        </h2>
        <p className={font.className}>
          Удобное расписание конференции со всеми подробностями
        </p>
      </a>

      <a className={styles.card} target="_blank" rel="noopener noreferrer">
        <h2 className={font.className}>
          Спикеры <span>-&gt;</span>
        </h2>
        <p className={font.className}>
          Наши специльные гости, а так же хорошо известные спикеры
        </p>
      </a>

      <a className={styles.card} target="_blank" rel="noopener noreferrer">
        <h2 className={font.className}>
          Информация <span>-&gt;</span>
        </h2>
        <p className={font.className}>
          Подробная информация о всей конференции: местоположение, ответы на
          вопросы, контактная информация
        </p>
      </a>
    </div>
  );
}
