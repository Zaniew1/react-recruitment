import { StoryFn, Meta } from '@storybook/react';
import { FilterInput } from '../assets/components/FilterInput';
import './FilterInput.css'
export default {
  title: 'Components/FilterInput',
  component: FilterInput,
} as Meta;

const Template: StoryFn = (args) => <FilterInput {...args} />;

export const Default = Template.bind({});