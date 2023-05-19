import type { PropsWithChildren } from "react";

import styles from "./index.module.scss";

import { motion, useScroll, useSpring } from "framer-motion";

export default function Layout({ children }: PropsWithChildren) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <main className={styles.main}>
        <motion.div className="progress-bar" style={{ scaleX }} />
        {children}
      </main>
    </>
  );
}
