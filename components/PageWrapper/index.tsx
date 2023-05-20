import styles from "../RootLayout/index.module.scss";

import { PropsWithChildren } from "react";

export const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <div className="mt-[100px]">
      <div className={styles.center} />
    </div>
    {children}
  </>
);
