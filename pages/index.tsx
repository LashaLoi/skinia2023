import { motion } from "framer-motion";
import Image from "next/image";
import { Links } from "../components/Links";

import styles from "../components/RootLayout/index.module.scss";

export default function Home() {
  return (
    <>
      <div className={`lg:mt-0 mt-[100px] ${styles.center} z-50`}>
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
          className="lg:h-[380px] lg:w-[500px] md:h-[300px] md:w-[380px] h-[240px] w-[300px]"
        >
          <Image alt="logo" src="/tb.png" className="main-logo " fill />
        </motion.div>
      </div>

      <Links />
    </>
  );
}
