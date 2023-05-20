import {
  instagramIcon,
  facebookIcon,
  youtubeIcon,
  vkIcon,
  telegramIcon,
} from "./icons";

import styles from "./index.module.scss";

const icons = [
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

export const MediaLinks = () => (
  <div className={styles.tools}>
    <div className="mb-2 flex justify-center items-center h-[20px] dark:fill-slate-300 fill-gray-500">
      {icons.map(({ icon, href }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer sm:mr-4 mr-0"
        >
          {icon}
        </a>
      ))}
    </div>
  </div>
);
