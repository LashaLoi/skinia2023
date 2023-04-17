import Image from "next/image";

import { Links } from "../components/Links";

import styles from "../components/RootLayout/index.module.scss";
import useMediaQuery from "../lib/hooks/useMediaQuery";

export default function Home() {
  const matches = useMediaQuery("(max-width: 1023px)");

  return (
    <>
      <div className={styles.center}>
        <Image
          alt="hero"
          src="/tb.png"
          className="main-logo"
          height={matches ? 240 : 400}
          width={matches ? 300 : 520}
        />
      </div>

      <Links />
    </>
  );
}
