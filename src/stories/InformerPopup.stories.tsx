import { StoryFn, Meta } from '@storybook/react';
import { InformerPopup } from '../assets/components/InformerPopup';
import './InformerPopup.css'
export default {
  title: 'Components/InformerPopup',
  component: InformerPopup,
} as Meta;

const Template: StoryFn = () => <InformerPopup />;

export const Default = Template.bind({});