/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'UX', value: 'ux' },
          { title: 'Frontend', value: 'frontend' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
    },
    { name: 'year', title: 'Year', type: 'number' },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'link',
      title: 'External link',
      type: 'url',
    },
    {
      name: 'github',
      title: 'Github Link',
      type: 'url',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
