import Image from "next/image";
import { Links } from "../components/Links";

import styles from "../components/RootLayout/index.module.scss";

export default function Home() {
  return (
    <>
      <div className={`mt-[100px] ${styles.center}`}>
        <div className="lg:h-[380px] lg:w-[500px] md:h-[300px] md:w-[380px] h-[200px] w-[250px] ">
          <Image alt="logo" src="/tb.png" className="main-logo " fill />
        </div>
      </div>
      <Links />
    </>
  );
}
