import { FaTools as icon } from 'react-icons/fa';

export default {
  name: 'techTag',
  title: 'Tech Tag',
  icon,
  type: 'document',
  fields: [
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
