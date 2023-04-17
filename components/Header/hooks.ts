import { usePathname } from "next/navigation";

import { getRouteInfo } from "./utils";

export function useRouteInfo() {
  const pathname = usePathname();

  return getRouteInfo(pathname);
}
