
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
export const Multiple = Template.bind({});
Multiple.args = {
  rows: [
    { id: 1, name: 'Tag 1', count: 10, has_synonyms: false, is_moderator_only: false, is_required: true },
    { id: 2, name: 'Tag 2', count: 20, has_synonyms: false, is_moderator_only: false, is_required: true },
    { id: 3, name: 'Tag 3', count: 30, has_synonyms: false, is_moderator_only: false, is_required: true },
    { id: 4, name: 'Tag 123', count: 10, has_synonyms: false, is_moderator_only: false, is_required: true },
    { id: 5, name: 'Tag 223', count: 20, has_synonyms: false, is_moderator_only: false, is_required: true },
    { id: 6, name: 'Tag 324', count: 30, has_synonyms: false, is_moderator_only: false, is_required: true },
    { id: 7, name: 'Tag 155', count: 10, has_synonyms: false, is_moderator_only: false, is_required: true },
    { id: 8, name: 'Tag 222', count: 20, has_synonyms: false, is_moderator_only: false, is_required: true },
    { id: 9, name: 'Tag 311', count: 30, has_synonyms: false, is_moderator_only: false, is_required: true },
    { id: 10, name: 'Tag 166', count: 10, has_synonyms: false, is_moderator_only: false, is_required: true },
    { id: 11, name: 'Tag 277', count: 20, has_synonyms: false, is_moderator_only: false, is_required: true },
    { id: 12, name: 'Tag 32', count: 30, has_synonyms: false, is_moderator_only: false, is_required: true },
    // Add more rows as needed
  ],
};