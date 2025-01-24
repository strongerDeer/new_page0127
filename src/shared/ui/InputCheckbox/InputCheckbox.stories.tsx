import type { Meta, StoryObj } from '@storybook/react';
import InputCheckbox from '.';

const meta: Meta<typeof InputCheckbox> = {
  title: 'Components/InputCheckbox',
  component: InputCheckbox,
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
    label: {
      control: 'text',
      description: '입력 필드의 레이블',
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
    label: '이용약관 동의',
    required: true,
    checked: false,
    link: '#',
  },
};
