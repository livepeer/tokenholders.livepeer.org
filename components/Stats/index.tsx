/** @jsx jsx */
import { jsx, Container, Styled } from "theme-ui";
import { Grid, Box } from "@theme-ui/components";
import { useEffect, useState } from "react";
import { request } from "graphql-request";

export default ({ ...props }) => {
  const [totalDelegators, setTotalDelegators] = useState(2450);
  const [totalTranscoders, setTotalTranscoders] = useState(25);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const reqDelegators = async skip => {
        const query = `query delegators ($skip: Int $where: Delegator_filter) {
        delegators(skip: $skip where: $where) {
          id
        }
      }`;

        let response = await request(
          "https://api.thegraph.com/subgraphs/name/livepeer/livepeer-canary",
          query,
          {
            skip: skip,
            where: {
              bondedAmount_not: 0
            }
          }
        );
        return response.delegators;
      };
      const getDelegators = async () => {
        const PAGE_SIZE = 100;
        let delegators = [];
        let keepGoing = true;
        let skip = 0;
        while (keepGoing) {
          let response = await reqDelegators(skip);

          await delegators.push.apply(delegators, response);
          skip += 100;
          if (response.length < PAGE_SIZE) {
            keepGoing = false;
            return delegators;
          }
        }
      };

      const getTranscoders = async currentRound => {
        const query = `{
          transcoders(where: { deactivationRound_gt: "${currentRound}" activationRound_lte: "${currentRound}" }) {
            id
          }
        }`;

        let response = await request(
          "https://api.thegraph.com/subgraphs/name/livepeer/livepeer-canary",
          query
        );
        return response.transcoders;
      };

      const getCurrentRound = async () => {
        const query = `{
          rounds(first: 1 orderBy: timestamp orderDirection:desc) {
            id
          }
        }`;

        let response = await request(
          "https://api.thegraph.com/subgraphs/name/livepeer/livepeer-canary",
          query
        );
        return parseInt(response.rounds[0].id);
      };

      const start = async () => {
        let currentRound = await getCurrentRound();
        let delegators = await getDelegators();
        let transcoders = await getTranscoders(currentRound);

        setTotalDelegators(delegators.length);
        setTotalTranscoders(transcoders.length);
        setLoading(false);
      };
      start();
    })();
  }, []);

  return (
    <Box sx={{ mx: [2] }} {...props}>
      <Container
        sx={{
          maxWidth: 1200,
          bg: "primary",
          textAlign: "center",
          borderRadius: 6,
          py: [60, 60, 80],
          px: 6,
          boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.08)"
        }}
      >
        <Styled.h2
          sx={{
            fontWeight: "normal",
            mb: 5,
            fontSize: [40, 40, 48],
            textAlign: "center",
            color: "white"
          }}
        >
          Livepeer is Growing
        </Styled.h2>
        <Grid columns={[1, 1, 3]}>
          <Box sx={{ mb: [3, 3, 0], fontFamily: "monospace", color: "white" }}>
            <Box
              sx={{
                lineHeight: "initial",
                fontSize: [48, 48, 64],
                color: "accent",
                textAlign: "center"
              }}
            >
              {totalTranscoders}
            </Box>
            Infrastucture Providers
          </Box>
          <Box sx={{ mb: [3, 3, 0], fontFamily: "monospace", color: "white" }}>
            <Box
              sx={{
                lineHeight: "initial",
                fontSize: [48, 48, 64],
                color: "accent"
              }}
            >
              65%
            </Box>
            LPT Supply Staked
          </Box>
          <Box sx={{ fontFamily: "monospace", color: "white" }}>
            <Box
              sx={{
                lineHeight: "initial",
                fontSize: [48, 48, 64],
                color: "accent",
                textAlign: "center"
              }}
            >
              {totalDelegators}
            </Box>
            Delegators
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
