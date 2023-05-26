import Link from "next/link";
import {
  instagramIcon,
  facebookIcon,
  youtubeIcon,
  vkIcon,
  telegramIcon,
} from "./icons";

import { motion } from "framer-motion";

import styles from "./index.module.scss";

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
    href: "https://vk.com/skinia2022",
  },
  {
    icon: telegramIcon,
    href: "https://t.me/skiniaby",
  },
];

const menu = [
  {
    icon: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        height={20}
        width={20}
        fill="inherit"
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
        />
      </motion.svg>
    ),
    href: "/",
  },
  {
    icon: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        height={20}
        width={20}
        fill="inherit"
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
        />
      </motion.svg>
    ),
    href: "/register",
  },
  {
    icon: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height={20}
        width={20}
        fill="inherit"
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 0v64h64V96H64zm384 0H192v64H448V96zM64 224v64h64V224H64zm384 0H192v64H448V224zM64 352v64h64V352H64zm384 0H192v64H448V352z"
        />
      </motion.svg>
    ),
    href: "/program",
  },
  {
    icon: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height={20}
        width={20}
        fill="inherit"
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zm40-89.3l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"
        />
      </motion.svg>
    ),
    href: "/speakers",
  },
  {
    icon: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192 512"
        height={20}
        width={20}
        fill="inherit"
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"
        />
      </motion.svg>
    ),
    href: "/contacts",
  },
];

export const MediaLinks = () => (
  <div className={styles.tools}>
    <div className="mb-2 flex justify-center items-center h-[30px] dark:fill-slate-300 fill-gray-500">
      {menu.map(({ icon, href }, i) => (
        <Link key={i} href={href} className="cursor-pointer sm:mx-4 mx-2">
          {icon}
        </Link>
      ))}
    </div>
  </div>
);
