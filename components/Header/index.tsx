import Link from "next/link";
import { font } from "../../lib/fonts";

import { Tools } from "../Tools";

import { useRouteInfo } from "./hooks";

import styles from "./index.module.scss";

export function Header() {
  const { link, text } = useRouteInfo();

  return (
    <div className={styles.description}>
      <Link href={link}>
        <p className={font.className}>{text} -&gt;</p>
      </Link>

      <Tools />
    </div>
  );
}
