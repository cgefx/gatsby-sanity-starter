import { GoCircuitBoard as icon } from 'react-icons/go';

export default {
  name: 'project',
  title: 'Project',
  icon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'techTags',
      title: 'Tech Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'techTag',
            },
          ],
        },
      ],
    },
    {
      name: 'repoLink',
      title: 'Repo Link',
      type: 'url',
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
  ],
};
