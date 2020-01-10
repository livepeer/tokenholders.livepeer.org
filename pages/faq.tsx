/** @jsx jsx */
import ReactDOMServer from "react-dom/server";
import { jsx, Container, Styled } from "theme-ui";
import { Grid } from "@theme-ui/components";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";
import Layout from "../components/Layout";
import Masthead from "../components/Masthead";
import { Box } from "theme-ui";
import CategoryWidget from "../components/CategoryWidget";
import { MDXProvider } from "@mdx-js/react";
import { groupBy } from "../lib/helpers";
import { useState } from "react";
import { Element } from "react-scroll";

const Page = ({ faqs, categories }) => {
  const router = useRouter();
  const { asPath } = router;
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <MDXProvider>
      <Layout
        title="Livepeer Tokenholders - FAQ"
        description="Livepeer Tokenholders - FAQ"
        url={`https://tokenholders.livepeer.org/${asPath}`}
      >
        <Fade>
          <Box>
            <Fade>
              <Masthead
                center
                title="Frequently Asked Questions"
                body={
                  <Box
                    sx={{
                      mx: "auto",
                      mb: 0
                    }}
                  >
                    Below is a list of topics with the most frequently asked
                    questions about participating in the Livepeer network.
                  </Box>
                }
              />
            </Fade>

            <Fade>
              <Container
                sx={{
                  borderTop: "1px solid #eee",
                  pt: 6
                }}
              >
                <Grid
                  sx={{
                    gridGap: [0, 0, 80],
                    columns: [1, 1, 2],
                    gridTemplateColumns: [
                      "100%",
                      "100%",
                      "25% calc(75% - 80px)"
                    ]
                  }}
                >
                  <CategoryWidget
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    categories={categories}
                    sx={{
                      alignSelf: "flex-start",
                      mb: [6, 6, 0]
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    {Object.keys(faqs)
                      .sort()
                      .map((category, i) => (
                        <Element key={i} name={category}>
                          <Box sx={{ mb: 8 }}>
                            <Styled.h3
                              sx={{ mb: 4, textTransform: "capitalize" }}
                            >
                              {category}
                            </Styled.h3>

                            {faqs[category]
                              .sort()
                              .map(({ Markup, slug, question }, i) => {
                                return (
                                  <Box
                                    sx={{ mb: 6, img: { width: "100%" } }}
                                    key={i}
                                  >
                                    <Styled.h5 id={slug} as="h4">
                                      <a
                                        sx={{ textDecoration: "none" }}
                                        href={`#${slug}`}
                                      >
                                        {question}
                                      </a>
                                    </Styled.h5>
                                    <Box
                                      dangerouslySetInnerHTML={{
                                        __html: Markup
                                      }}
                                    />
                                  </Box>
                                );
                              })}
                          </Box>
                        </Element>
                      ))}
                  </Box>
                </Grid>
              </Container>
            </Fade>
          </Box>
        </Fade>
      </Layout>
    </MDXProvider>
  );
};

function getFaqs() {
  const req = require["context"]("../data/faqs", true, /.*.mdx$/);
  let faqs = [];

  req.keys().forEach(filename => {
    const Markup = req(filename).default;

    faqs.push({
      ...req(filename).metadata,
      slug: filename.replace(/\.[^/.]+$/, "").substr(2),
      Markup: ReactDOMServer.renderToStaticMarkup(<Markup />)
    });
  });

  return groupBy(faqs, "category");
}

export function unstable_getStaticProps() {
  const faqs = getFaqs();
  const categories = Object.keys(faqs).sort();
  return {
    props: {
      faqs,
      categories
    }
  };
}

export default Page;
