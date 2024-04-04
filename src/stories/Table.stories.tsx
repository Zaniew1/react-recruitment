
import { StoryFn, Meta } from '@storybook/react';
import { Table } from '../assets/components/Table';
import { AllTagsType } from '../assets/types/types';
export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: StoryFn<{ rows: AllTagsType }> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    { id: 1, name: 'Tag 1', count: 10, has_synonyms: false, is_moderator_only: false, is_required: true },
    { id: 2, name: 'Tag 2', count: 20, has_synonyms: false, is_moderator_only: false, is_required: true },
    { id: 3, name: 'Tag 3', count: 30, has_synonyms: false, is_moderator_only: false, is_required: true },
    // Add more rows as needed
  ],
};