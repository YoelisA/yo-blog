
import { defineStaticConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineStaticConfig({
  branch,
  clientId: "c1911075-3be6-4053-9222-959fc18d72ea", // Get this from tina.io
  token: "e04b53cb329b7b3b3b56c8bb78f27e32968e907e", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content",
        format: 'mdx',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            isTitle: true,
          }, {
            type: "string",
            name: "description",
            label: "Description",
          }, {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
          }, {
            type: "datetime",
            name: "pubDate",
            label: "Publish Date",
            ui: {
              dateFormat: "DD MMMM YYYY"
            },
          }, {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "Counter",
                label: "Counter",
                fields: [
                  {
                    name: "variableExample",
                    label: "Variable Example",
                    type: "string",
                  }
                ],
              },
            ],
          }
        ],
      },
    ],
  },
});
