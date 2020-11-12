import { GoCircuitBoard as icon } from 'react-icons/go'

export default {
  name: 'project',
  title: 'Project',
  icon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(80),
    },
    {
      name: 'type',
      title: 'Project Type',
      type: 'string',
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
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
      name: 'excerpt',
      title: 'Short Excerpt',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required().min(1).max(250),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'repoLink',
      title: 'Repo Link',
      type: 'url',
    },
    {
      name: 'demoLink',
      title: 'Demo Link',
      type: 'url',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: Rule => Rule.required(),
    },
  ],
}
