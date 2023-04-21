export enum Path {
  HOME = "/",
  REGISTER = "/register",
  PROGRAM = "/program",
  SPEAKERS = "/speakers",
}

export const defaultInfo = {
  link: Path.REGISTER,
  text: "Перейти к регистрации",
};

export const home = {
  link: Path.HOME,
  text: "На главную",
};

export const routeInfo = {
  [Path.HOME]: defaultInfo,
  [Path.REGISTER]: home,
  [Path.PROGRAM]: home,
  [Path.SPEAKERS]: home,
};
