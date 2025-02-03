import {
  TbBrandGoogleFilled,
  TbSquareRoundedCheck,
  TbSquareRoundedCheckFilled,
  TbHeart,
  TbHeartFilled,
  TbMoodWrrr,
  TbMoodHappy,
  TbPhoto,
  TbBookmark,
  TbX,
  TbAlertSquareRounded,
  TbHome,
  TbChevronLeft,
  TbBook2,
  TbRefresh,
} from 'react-icons/tb';
import React from 'react';

export const ICONS = {
  google: <TbBrandGoogleFilled />,
  check: <TbSquareRoundedCheck />,
  checkFill: <TbSquareRoundedCheckFilled />,

  heart: <TbHeart />,
  heartFill: <TbHeartFilled />,

  alert: <TbAlertSquareRounded />,
  error: <TbMoodWrrr />,
  happy: <TbMoodHappy />,
  bookmark: <TbBookmark />,

  image: <TbPhoto />,
  close: <TbX />,
  home: <TbHome />,
  left: <TbChevronLeft />,
  book: <TbBook2 />,
  reset: <TbRefresh />,
} as const;

export type IconType = keyof typeof ICONS;

type IconProps = {
  name: IconType;
  size?: number;
  color?: string;
};

export default function Icon({ name, size = 16, color }: IconProps) {
  const IconComponent = ICONS[name];

  return IconComponent
    ? React.cloneElement(IconComponent, {
        size,
        color,
      })
    : null;
}
export const getIconOptions = () => {
  return Object.keys(ICONS);
};
