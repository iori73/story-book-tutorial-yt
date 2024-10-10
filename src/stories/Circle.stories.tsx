import { Meta, StoryObj } from '@storybook/react';
import Circle from './Circle';

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: 'Circle',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['orange', 'green', 'yellow'],
      },
      description: 'プロジェクトで使用する円のUIコンポーネントです。<br /> `orange`, `green`, `yellow`',
      table: {
        type: {
          summary: null, // union型の表示を消す
        },
      },
    },
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'プロジェクトで使用する円のUIコンポーネントです。',
      },
    },
  },
  
};

export default meta;

type Story = StoryObj<typeof meta>;

// BaseCircleの説明を追加
export const BaseCircle: Story = {
  args: {
    variant: 'orange',
  },
  parameters: {
    docs: {
      description: {
        story: 'オレンジ色の円です。',
      },
    },
  },
};

export const GreenCircle: Story = {
  args: {
    variant: "green",
  },
  parameters: {
    docs: {
      description: {
        story: '緑色の円です。',
      },
    },
  },
};

export const YellowCircle: Story = {
  args: {
    variant: 'yellow',
  },
  parameters: {
    docs: {
      description: {
        story: '黄色の円です。',
      },
    },
  },
}

export const GroupedCircle: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 10 }}>
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  ),
};
