
import { StoryFn, Meta } from '@storybook/react';
import { Wrapper } from '../assets/components/Wrapper';
import './Wrapper.css'
export default {
  title: 'Components/Wrapper',
  component: Wrapper,
} as Meta;

const Template: StoryFn<typeof Wrapper> = () => <Wrapper></Wrapper>;

export const Default = Template.bind({});