import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { getIconOptions } from '../Icon/Icon';

const meta = {
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
      options: getIconOptions(),
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  args: {
    label: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button label="solid" />
      <Button label="outline" variant="outline" />
    </div>
  ),
};

export const Colors: Story = {
  args: {
    label: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button label="primary" color="primary" />
      <Button label="secondary" color="secondary" />
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    label: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button label="xs: Button" size="xs" color="primary" />
      <Button label="sm: Button" size="sm" color="primary" />
      <Button label="md: Button" size="md" color="primary" />
      <Button label="lg: Button" size="lg" color="primary" />
    </div>
  ),
};

// 비활성화 상태 예시
export const Disabled: Story = {
  args: {
    color: 'primary',
    variant: 'solid',
    label: 'Disabled Button',
    disabled: true,
  },
};

// 전체 너비 예시
export const FullWidth: Story = {
  args: {
    color: 'primary',
    variant: 'solid',
    label: 'Full Width Button',
    full: true,
  },
};

export const IconButtons: Story = {
  args: {
    label: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button label="구글계정으로 시작하기" leftIcon="google" />
      <Button label="좋아요" leftIcon="like" variant="outline" />
    </div>
  ),
};
