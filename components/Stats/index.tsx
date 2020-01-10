/** @jsx jsx */
import { jsx, Container, Styled } from "theme-ui";
import { Grid, Box } from "@theme-ui/components";

export default ({ ...props }) => {
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
                color: "accent"
              }}
            >
              25
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
                color: "accent"
              }}
            >
              2433
            </Box>
            Delegators
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
