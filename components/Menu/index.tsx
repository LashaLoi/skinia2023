import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  instagramIcon,
  facebookIcon,
  youtubeIcon,
  vkIcon,
  telegramIcon,
} from "./icons";

export const icons = [
  {
    icon: instagramIcon,
    href: "https://www.instagram.com/ngbelarus/",
  },
  {
    icon: facebookIcon,
    href: "https://www.facebook.com/NGBelarus",
  },
  {
    icon: youtubeIcon,
    href: "https://www.youtube.com/user/NewGenerationBY",
  },
  {
    icon: vkIcon,
    href: "https://vk.com/skinia2023",
  },
  {
    icon: telegramIcon,
    href: "https://t.me/+ckIe79U-NIZkMDli",
  },
];

const items = [
  {
    text: "Главная",
    path: "/",
  },
  {
    text: "Регистрация",
    path: "/register",
  },
  {
    text: "Спикеры",
    path: "/speakers",
  },
  {
    text: "Информация",
    path: "/contacts",
  },
  {
    text: "Галерея",
    path: "/gallery",
  },
];

export const Menu = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <div
        className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-pink-400 bg-gray-100 shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-gray-200 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-pointer"
        aria-label="Customise options"
      >
        <HamburgerMenuIcon />
      </div>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content
        className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-50"
        sideOffset={5}
      >
        {items.map((item) => (
          <DropdownMenu.Item
            className="group text-[13px] leading-none text-pink-400 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-pink-400 data-[highlighted]:text-violet1"
            key={item.path}
            asChild
          >
            <Link href={item.path}>{item.text}</Link>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);
