import { motion } from "framer-motion";
import { font } from "../../lib/fonts";

import { MediaLinks } from "../MediaLinks";

import { useRouteInfo } from "./hooks";

import styles from "./index.module.scss";
import { useRouter } from "next/router";

export function Header() {
  const { link, text } = useRouteInfo();
  const router = useRouter();

  const handleClick = () => router.push(link);

  return (
    <div className={styles.description}>
      <motion.button
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          border: "rgba(1, 65, 255, 0.3)",
        }}
        className={font.className}
        onClick={handleClick}
      >
        {text} -&gt;
      </motion.button>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <MediaLinks />
      </motion.div>
    </div>
  );
}
