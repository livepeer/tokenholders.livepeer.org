/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";
import Layout from "../components/Layout";
import Masthead from "../components/Masthead";
import Panel from "../components/Panel";
import { Box } from "theme-ui";
import { Link } from "@theme-ui/components";
import Carousel from "../components/Carousel";
import PersonCard from "../components/PersonCard";
import EventCard from "../components/EventCard";
import Button from "../components/Button";

const Page = ({ contributors }) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <Layout
      title="Livepeer Tokenholders - Community"
      description="Livepeer Tokenholders - Community"
      url={`https://tokenholders.livepeer.org${asPath}`}
    >
      <Fade>
        <Box>
          <Fade>
            <Masthead
              center
              title="Get Involved"
              body={
                <Box sx={{ mb: [0, 0, 5] }}>
                  Livepeer is an open project that believes in open source code
                  and creative contribution from people with diverse interests
                  and skillsets. Hundreds of tokenholders have contributed
                  ideas, code, designs, and time to livepeer. Join us.
                  <Flex
                    sx={{
                      flexDirection: ["column", "column", "row"],
                      mt: 3,
                      justifyContent: "center"
                    }}
                  >
                    <Link
                      href="https://discord.gg/TTUQqK"
                      target="__blank"
                      rel="noopener noreferrer"
                      sx={{ mb: [1, 1, 0], mr: [0, 0, 3] }}
                    >
                      Chat with us
                    </Link>
                    <Link
                      href="https://forum.livepeer.org/"
                      target="__blank"
                      rel="noopener noreferrer"
                      sx={{ mb: [1, 1, 0], mr: [0, 0, 3] }}
                    >
                      Join the forum
                    </Link>
                    <Link
                      href="https://github.com/livepeer"
                      target="__blank"
                      rel="noopener noreferrer"
                    >
                      Contribute on Github
                    </Link>
                  </Flex>
                </Box>
              }
              image={<img sx={{ width: "100%" }} src="/img/community.png" />}
            />
          </Fade>

          <Carousel
            sx={{
              borderTop: "1px solid #eee",
              pt: 8,
              pb: 5
            }}
            title="Our Community"
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            slides={[
              ...contributors.map((contributor, i) => (
                <PersonCard
                  key={i}
                  name={contributor.name}
                  image={contributor.image}
                  country={contributor.country}
                />
              ))
            ]}
          />

          <Fade>
            <Panel
              sx={{ my: 8 }}
              heading={
                <Styled.h3 as="h2" sx={{ mb: 2 }}>
                  Join Our Community Call
                </Styled.h3>
              }
              body="Every month, our community catches up with each other virtually. We hear about the latest updates from the core team and showcase what we’ve been working on. Anyone is welcome to join. Come meet our team on the next call!"
              callToAction={
                <Button
                  as="a"
                  target="__blank"
                  rel="noopener noreferrer"
                  href="https://calendar.google.com/calendar/embed?src=livepeer.org_bf2ckq8bk973faffua7bkbojj4%40group.calendar.google.com&ctz=America%2FNew_York"
                >
                  Sign up
                </Button>
              }
              image={
                <img
                  sx={{ ml: "auto", maxWidth: 380 }}
                  src="/img/hangout.svg"
                />
              }
            />
          </Fade>
          {/* <Carousel
            sx={{
              pt: 4,
              mb: 8
            }}
            title="Attend Events Near You"
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            slides={[
              <a
                href="https://eventbrite.com"
                target="__blank"
                sx={{ textDecoration: "none", color: "primary" }}
                rel="noopener"
                key={1}
              >
                <EventCard
                  title="Event 1"
                  date="2019-11-20"
                  location="Brooklyn, NY"
                  image="https://source.unsplash.com/random/200x140"
                />
              </a>,
              <a
                href="https://eventbrite.com"
                target="__blank"
                sx={{ textDecoration: "none", color: "primary" }}
                rel="noopener"
                key={2}
              >
                <EventCard
                  title="Event 1"
                  date="2019-11-20"
                  location="Brooklyn, NY"
                  image="https://source.unsplash.com/random/200x140"
                />
              </a>,
              <a
                href="https://eventbrite.com"
                target="__blank"
                sx={{ textDecoration: "none", color: "primary" }}
                rel="noopener"
                key={3}
              >
                <EventCard
                  title="Event 1"
                  date="2019-11-20"
                  location="Brooklyn, NY"
                  image="https://source.unsplash.com/random/200x140"
                />
              </a>,
              <a
                href="https://eventbrite.com"
                target="__blank"
                sx={{ textDecoration: "none", color: "primary" }}
                rel="noopener"
                key={4}
              >
                <EventCard
                  title="Event 1"
                  date="2019-11-20T18:30:00"
                  location="Brooklyn, NY"
                  image="https://source.unsplash.com/random/200x140"
                />
              </a>,
              <a
                href="https://eventbrite.com"
                target="__blank"
                sx={{ textDecoration: "none", color: "primary" }}
                rel="noopener"
                key={5}
              >
                <EventCard
                  title="Event 1"
                  date="2019-11-20T18:30:00"
                  location="Brooklyn, NY"
                  image="https://source.unsplash.com/random/200x140"
                />
              </a>,
              <a
                href="https://eventbrite.com"
                target="__blank"
                sx={{ textDecoration: "none", color: "primary" }}
                rel="noopener"
                key={6}
              >
                <EventCard
                  title="Event 1"
                  date="2019-11-20T18:30:00"
                  location="Brooklyn, NY"
                  image="https://source.unsplash.com/random/200x140"
                />
              </a>
            ]}
          /> */}
        </Box>
      </Fade>
    </Layout>
  );
};

export function unstable_getStaticProps() {
  const contributors = require("../data/contributors").default;
  return {
    props: {
      contributors
    }
  };
}

export default Page;
