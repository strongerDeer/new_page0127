import { FaGoogle } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { LuCircleCheck, LuCircleAlert, LuImage, LuX } from 'react-icons/lu';
import React from 'react';

export const ICONS = {
  google: <FaGoogle />,
  like: <AiOutlineHeart />,
  error: <LuCircleAlert />,
  check: <LuCircleCheck />,
  image: <LuImage />,
  close: <LuX />,
} as const;

export type IconType = keyof typeof ICONS;

type IconProps = {
  name: IconType;
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 16, className }: IconProps) {
  const IconComponent = ICONS[name];

  return IconComponent
    ? React.cloneElement(IconComponent, {
        size,
        className,
      })
    : null;
}
export const getIconOptions = () => {
  return Object.keys(ICONS);
};
