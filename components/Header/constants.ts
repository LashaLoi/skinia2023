export enum Path {
  HOME = "/",
  REGISTER = "/register",
  PROGRAM = "/program",
}

export const defaultInfo = {
  link: Path.REGISTER,
  text: "Перейти к регистрации",
};

export const routeInfo = {
  [Path.HOME]: defaultInfo,
  [Path.REGISTER]: {
    link: Path.HOME,
    text: "На главную",
  },
  [Path.PROGRAM]: {
    link: Path.HOME,
    text: "На главную",
  },
};
