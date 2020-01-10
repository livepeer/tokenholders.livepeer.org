/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";
import Layout from "../components/Layout";
import Masthead from "../components/Masthead";
import Panel from "../components/Panel";
import CardGrid from "../components/CardGrid";
import Stats from "../components/Stats";
import { Box } from "theme-ui";
import Button from "../components/Button";
import Card from "../components/Card";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <Layout
      title="Livepeer Tokenholders - Home"
      description="Livepeer Tokenholders - Home"
      url={`https://tokenholders.livepeer.org/${asPath}`}
    >
      <Fade>
        <Box>
          <Fade>
            <Masthead
              sx={{ mt: 4 }}
              title="Join the Video Streaming Revolution"
              body="Everyday, thousands of tokenholders participate in the Livepeer, the
            world’s first open source, peer-to-peer video transcoding platform."
              image={<img sx={{ width: "100%" }} src="/img/tokenholders.png" />}
              button={<Button>Learn More</Button>}
            />
          </Fade>
          <Fade>
            <Panel
              sx={{ mt: 4 }}
              heading={
                <Styled.h3 as="h2" sx={{ mb: 2 }}>
                  Livepeer Powers Video
                </Styled.h3>
              }
              body="For companies, video streaming services are insanely expensive. Livepeer offers a decentralized alternative that’s more affordable, scalable and reliable. And it’s powered by tokenholders."
              callToAction={
                <Button
                  as="a"
                  target="__blank"
                  rel="noopener noreferrer"
                  href="https://livepeer.org/primer"
                >
                  Read the Primer
                </Button>
              }
              image={
                <img
                  sx={{ ml: "auto", maxWidth: 380 }}
                  src="/img/broadcaster.png"
                />
              }
            />
          </Fade>
          <Fade>
            <CardGrid sx={{ mt: 100 }} heading="Getting Started">
              <a
                sx={{ textDecoration: "none" }}
                href="https://uniswap.exchange/swap/0x58b6a8a3302369daec383334672404ee733ab239"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Card
                  title="1. Get LPT"
                  body="Livepeer Token (LPT) is available on Uniswap. To get LPT, you’ll need a metamask account with ETH."
                  headerImage="/img/token-white.svg"
                />
              </a>
              <a
                sx={{ textDecoration: "none" }}
                href="https://explorer.livepeer.org"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Card
                  title="2. Stake LPT"
                  body="Participate by staking your LPT on a node in the network to do work on your behalf. Earn LPT and ETH as rewards."
                  headerImage="/img/staked-token-white.svg"
                />
              </a>
            </CardGrid>
            <Panel
              sx={{ my: 4 }}
              cardStyle={false}
              chip={"For advanced users"}
              heading={
                <Styled.h3 as="h2" sx={{ mb: 2 }}>
                  Run an Infrastructure Node
                </Styled.h3>
              }
              body="Transcode video on your infrastructure as an Orchestrator in exchange for ETH and LPT rewards. To become an Orchestrator and earn the right to transcode video on the network, you must first get and stake LPT."
              callToAction={
                <Button
                  as="a"
                  target="__blank"
                  rel="noopener noreferrer"
                  href="https://livepeer.readthedocs.io/en/latest/streamflow-public-testnet.html"
                >
                  Learn More
                </Button>
              }
              image={
                <img
                  sx={{
                    position: "relative",
                    top: 3,
                    ml: "auto",
                    maxWidth: 300
                  }}
                  src="/img/orchestrator.png"
                />
              }
            />
          </Fade>
          <Fade>
            <Stats />
          </Fade>
          <Fade>
            <Panel
              cardStyle={false}
              heading={
                <Styled.h3 as="h2" sx={{ mb: 2 }}>
                  Questions?
                </Styled.h3>
              }
              body="You likely have some questions. Get instant answers to the most common questions and learn how to participate in Livepeer like a pro."
              callToAction={
                <Link href="/faq" passHref>
                  <Button as="a">View FAQ</Button>
                </Link>
              }
              image={<img sx={{ maxWidth: 260 }} src="/img/faq.png" />}
            />
          </Fade>
        </Box>
      </Fade>
    </Layout>
  );
};

export default Page;
