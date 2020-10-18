import { FaTools as icon } from 'react-icons/fa';

export default {
  name: 'tool',
  title: 'Tool',
  icon,
  type: 'document',
  fields: [
    // ... other fields ...
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
};
