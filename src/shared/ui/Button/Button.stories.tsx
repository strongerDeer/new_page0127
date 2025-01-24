import type { Meta, StoryObj } from '@storybook/react';
import { ICONS } from '@/shared/ui/Icon';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline'],
      description: '버튼 스타일',
      defaultValue: 'solid',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: '버튼 색상',
      defaultValue: 'primary',
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: 'select',
      description: '사이즈 xs/sm/md/lg',
      defaultValue: { summary: 'md' },
    },
    leftIcon: {
      options: Object.keys(ICONS),
      control: 'select',
      description: '왼쪽 아이콘',
      defaultValue: { summary: 'null' },
    },
    disabled: {
      control: 'boolean',
      description: 'disabled 여부',
      defaultValue: { summary: 'false' },
    },
    full: {
      control: 'boolean',
      description: 'full width 여부',
      defaultValue: { summary: 'false' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
    color: 'primary',
  },
};
