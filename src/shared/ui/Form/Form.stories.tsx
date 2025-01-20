import type { StoryObj } from '@storybook/react';
import Form from './Form';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FormStory: Story = {
  args: {
    name: 'HYEJIN',
    onSubmit: () => {},
  },
};
