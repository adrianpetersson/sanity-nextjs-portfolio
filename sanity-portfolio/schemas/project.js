export default {
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "mainImage",
      options: {
        hotspot: true,
      },
      title: "Main Image",
      type: "image",
    },
    {
      name: "type",
      options: {
        layout: "radio",
        list: [
          { title: "UX", value: "ux" },
          { title: "Frontend", value: "frontend" },
          { title: "Other", value: "other" },
        ],
      },
      title: "Type",
      type: "string",
    },
    { name: "year", title: "Year", type: "number" },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "link",
      title: "External link",
      type: "url",
    },
    {
      name: "github",
      title: "Github Link",
      type: "url",
    },
    {
      name: "slug",
      options: {
        maxLength: 100,
        source: "title",
      },
      title: "Slug",
      type: "slug",
    },
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "imagesGallery",
      of: [{ type: "image" }],
      title: "Images gallery",
      type: "array",
    },
  ],
  name: "project",
  title: "Project",
  type: "document",
};
