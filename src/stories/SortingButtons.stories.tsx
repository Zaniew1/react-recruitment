import { StoryFn, Meta } from '@storybook/react';
import { SortingButtons } from '../assets/components/SortingButtons';
import './SortingButtons.css'
export default {
  title: 'Components/SortingButtons',
  component: SortingButtons,
} as Meta;

const Template: StoryFn = (args) => <SortingButtons {...args} />;

export const Default = Template.bind({});