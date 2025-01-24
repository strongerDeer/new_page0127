import type { Meta, StoryObj } from '@storybook/react';
import Icon, { ICONS } from '.';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      options: Object.keys(ICONS),
      control: 'select',
      description: '아이콘 이름',
    },
    size: {
      control: 'number',
      description: '아이콘 크기',
      defaultValue: 16,
    },
    color: {
      control: {
        type: 'color',
        presetColors: ['red', 'royalblue'],
      },
      description: '아이콘 색상',
      defaultValue: 'royalblue',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'happy',
    size: 100,
    color: 'royalblue',
  },
};
