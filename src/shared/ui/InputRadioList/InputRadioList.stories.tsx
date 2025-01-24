import type { Meta, StoryObj } from '@storybook/react';
import InputRadioList from '.';

const meta: Meta<typeof InputRadioList> = {
  title: 'Components/InputRadioList',
  component: InputRadioList,
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
    title: {
      control: 'text',
      description: '입력 필드의 레이블',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
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
    title: '성별',
    name: 'sex',
    radios: [
      { id: 'male', value: 'male', label: '남성' },
      { id: 'female', value: 'female', label: '여성' },
    ],
  },
};
