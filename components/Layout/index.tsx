/** @jsx jsx */
import { DefaultSeo } from "next-seo";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Menu from "../Menu";
import { jsx, ColorMode, Layout, Header, Main, Box } from "theme-ui";
import { ThemeProvider, Reset } from "../../lib/theme";

interface Props {
  title?: string;
  children: JSX.Element[] | JSX.Element;
  description?: string;
  image?: any;
  url?: string;
}

export default ({ title, description, children, image, url }: Props) => {
  const seo = {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: url ? url : "https://tokenholders.livepeer.org",
      images: [
        {
          url: image
            ? image.url
            : "https://tokenholders.livepeer.org/static/img/logo.png",
          alt: image ? image.alt : "Livepeer"
        }
      ]
    }
  };
  return (
    <ThemeProvider>
      <ColorMode />
      <Layout>
        <DefaultSeo {...seo} />
        <Reset />
        <Box id="outer-container">
          <Box sx={{ display: ["block", "block", "none"] }}>
            <Menu
              right
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
            />
          </Box>
          <Main id="page-wrap">
            <Header
              sx={{
                bg: "background",
                zIndex: 2,
                position: "sticky",
                top: 0,
                width: "100%"
              }}
            >
              <Navigation />
            </Header>
            {children}
          </Main>
        </Box>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
