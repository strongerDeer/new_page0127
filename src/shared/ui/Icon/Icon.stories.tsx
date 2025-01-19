// src/shared/ui/Icon/Icon.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      options: ['google', 'like'],
      control: 'select',
      description: '아이콘 이름',
    },
    size: {
      control: 'number',
      description: '아이콘 크기',
      defaultValue: 16,
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GoogleIcon: Story = {
  args: {
    name: 'google',
    size: 24,
  },
};

export const LikeIcon: Story = {
  args: {
    name: 'like',
    size: 24,
  },
};
