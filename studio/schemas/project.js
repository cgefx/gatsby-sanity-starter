// import { MdPerson as icon } from 'react-icons/md';

export default {
  name: 'project',
  title: 'Project',
  // icon,
  type: 'document',
  fields: [
    // ... other fields ...
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a little bit about the project',
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
    {
      name: 'tools',
      title: 'Tools Used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'tool',
            },
          ],
        },
      ],
    },
  ],
};
