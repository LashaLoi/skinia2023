import Link from "next/link";
import { motion } from "framer-motion";
import { font } from "../../lib/fonts";

import { Tools } from "../Tools";

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
        <Tools />
      </motion.div>
    </div>
  );
}
