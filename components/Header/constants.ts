export enum Path {
  HOME = "/",
  REGISTER = "/register",
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
};
