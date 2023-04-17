import { routeInfo, defaultInfo, Path } from "./constants";

export const getRouteInfo = (route: string | null) => {
  if (!route) return defaultInfo;

  const info = routeInfo[route as Path];

  if (!info) return defaultInfo;

  return info;
};
