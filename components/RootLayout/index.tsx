import type { PropsWithChildren } from "react";

import styles from "./index.module.scss";

export default function Layout({ children }: PropsWithChildren) {
  return <main className={styles.main}>{children}</main>;
}
