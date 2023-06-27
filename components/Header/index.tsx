import { useRouter } from "next/router";
import { Button } from "../Button";
import { Menu } from "../Menu";
import Link from "next/link";

const paths = {
  "/": true,
  "/registered": true,
} as Record<string, boolean>;

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <div className="w-full sm:px-24 sm:py-6 px-4 py-4 flex items-center justify-between fixed backdrop-blur-md bg-white/10 z-50">
      <Link
        href="/"
        className={paths[pathname] ? "text-white" : "text-gray-400"}
      >
        <span className="text-pink-400">NEW</span> GENERATION
      </Link>

      <div className="flex gap-8 items-center">
        <Menu />
        <Link
          href="/register"
          className="items-center hidden ml-auto space-x-8 lg:flex"
        >
          <Button>Регистрация</Button>
        </Link>
      </div>
    </div>
  );
};
