/** @jsx jsx */
import React from "react";
import { jsx, Container, Styled, Box } from "theme-ui";
import { Grid } from "@theme-ui/components";
import Card from "../Card";
import Token from "../../public/img/token.svg";
import StakedToken from "../../public/img/staked-token.svg";

export default ({ heading = null, children, ...props }) => {
  return (
    <Box sx={{ mx: 2 }} {...props}>
      <Container sx={{ p: 0 }}>
        {heading && (
          <Box as="header" sx={{ mb: 6, textAlign: "center" }}>
            <Styled.h2 sx={{ mb: 2 }}>{heading}</Styled.h2>
            <Box>
              Interested in participating in the Livepeer network? Here's how.
            </Box>
          </Box>
        )}
        <Grid
          sx={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
        >
          {children}
        </Grid>
      </Container>
    </Box>
  );
};
