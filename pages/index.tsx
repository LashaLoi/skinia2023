// import Image from "next/image";

import Image from "next/image";
import { Links } from "../components/Links";

import styles from "../components/RootLayout/index.module.scss";
// import useMediaQuery from "../lib/hooks/useMediaQuery";

export default function Home() {
  // const matches = useMediaQuery("(max-width: 1023px)");

  return (
    <>
      <div className={styles.center}>
        <div className="lg:h-[380px] lg:w-[500px] md:h-[300px] md:w-[380px] h-[200px] w-[250px]">
          <Image
            loading="lazy"
            alt="logo"
            src="/tb.png"
            className="main-logo"
            fill
          />
        </div>
      </div>
      <Links />
    </>
  );
}
