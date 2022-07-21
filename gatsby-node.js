const path = require("path");

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(
    __dirname,
    "./src/templates/PostTemplate.js"
  );
  const result = await graphql(`
    query {
      allContentfulPost(filter: { node_locale: { eq: "ko" } }) {
        nodes {
          category
          slug
          title
          description {
            description
          }
          content {
            childMdx {
              body
              tableOfContents
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allContentfulPost.nodes.forEach((node) => {
    createPage({
      path: `${node.category.toLowerCase()}/${node.slug}`,
      component: postTemplate,
      context: {
        title: node.title,
        category: node.category,
        description: node.description.description,
        content: node.content.childMdx.body,
        tableOfContents: node.content.childMdx.tableOfContents,
      },
    });
  });
};
