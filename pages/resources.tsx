/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";
import Layout from "../components/Layout";
import Masthead from "../components/Masthead";
import { Box, Flex } from "theme-ui";
import CardGrid from "../components/CardGrid";
import Card from "../components/Card";
import { MdDescription, MdBuild, MdCode } from "react-icons/md";
import { groupBy } from "../lib/helpers";
import { useState } from "react";

const Page = ({ resources, categories }) => {
  const router = useRouter();
  const { asPath } = router;
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <Layout
      title="Livepeer Tokenholders - Resources"
      description="Livepeer Tokenholders - Resources"
      url={`https://tokenholders.livepeer.org/${asPath}`}
    >
      <Fade>
        <Box>
          <Fade>
            <Masthead
              title="Resources"
              body={
                <Box
                  sx={{
                    maxWidth: [360],
                    mx: ["auto", "auto", "auto", 0],
                    mb: 0
                  }}
                >
                  A directory of essential tokenholder resources across the
                  Livepeer ecosystem.
                </Box>
              }
              image={
                <img
                  sx={{
                    minWidth: ["100%", "100%", "100%", 550],
                    objectFit: "contain",
                    width: "100%"
                  }}
                  src="/img/resources.png"
                />
              }
            />
          </Fade>

          <Fade>
            <Container>
              <Flex sx={{ mb: 2, maxWidth: 500 }}>
                {categories.map((category, i) => (
                  <Box
                    key={i}
                    onClick={() => setActiveCategory(category)}
                    sx={{
                      fontFamily: "monospace",
                      px: 1,
                      cursor: "pointer",
                      textTransform: "capitalize",
                      color: activeCategory === category ? "white" : "primary",
                      bg:
                        activeCategory === category ? "primary" : "transparent",
                      mr: 3
                    }}
                  >
                    {category}
                  </Box>
                ))}
              </Flex>
            </Container>
            <CardGrid sx={{ mb: 6 }}>
              {resources
                .filter(resource =>
                  activeCategory === "all"
                    ? true
                    : resource.category === activeCategory
                )
                .map((resource, i) => (
                  <a
                    key={i}
                    href={resource.link}
                    target="__blank"
                    rel="noopener noreferrer"
                    sx={{ display: "flex", textDecoration: "none" }}
                  >
                    <Card
                      outline
                      icon={getIcon(resource.category)}
                      title={resource.title}
                      subtitle={resource.byline}
                      body={resource.description}
                    />
                  </a>
                ))}
            </CardGrid>
          </Fade>
        </Box>
      </Fade>
    </Layout>
  );
};

function getIcon(category) {
  if (category === "develop") {
    return <MdCode sx={{ fontSize: 24, color: "primary" }} />;
  } else if (category === "tools") {
    return <MdBuild sx={{ fontSize: 24, color: "primary" }} />;
  } else {
    return <MdDescription sx={{ fontSize: 24, color: "primary" }} />;
  }
}

export function unstable_getStaticProps() {
  const resources = require("../data/resources").default;
  const categories = Object.keys(groupBy(resources, "category"));
  return {
    props: {
      resources,
      categories: ["all", ...categories]
    }
  };
}

export default Page;
