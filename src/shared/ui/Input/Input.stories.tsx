import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    componentSubtitle: '사용자 입력을 받기 위한 기본 입력 필드 컴포넌트',
    docs: {
      description: {
        component: '다양한 상태와 스타일을 지원하는 입력 필드 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: '입력 필드의 상태를 지정합니다',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: 'text',
      description: '입력 필드의 레이블',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태를 지정합니다',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    full: {
      control: 'boolean',
      description: '전체 너비 사용 여부',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    errorMsg: {
      control: 'text',
      description: '에러 메시지',
      table: {
        type: { summary: 'string' },
      },
    },
    helperMsg: {
      control: 'text',
      description: '도움말 메시지',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    name: 'email',
  },
};
