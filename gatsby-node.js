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
          icon
          title
          heroImage {
            gatsbyImageData(layout: FULL_WIDTH)
            description
          }
          content {
            childMdx {
              body
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
      path: `${node.category}/${node.slug}`,
      component: postTemplate,
      context: {
        icon: node.icon,
        title: node.title,
        content: node.content.childMdx.body,
      },
      heroImage: node.heroImage,
    });
  });
};
