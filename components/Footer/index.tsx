/** @jsx jsx */
import React from "react";
import { jsx, Flex, Container } from "theme-ui";
import { Grid, Box } from "@theme-ui/components";
import Social from "../Social";
import Logo from "../../public/img/logo.svg";

export default () => {
  return (
    <Box
      sx={{
        py: 4,
        bg: "primary",
        boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.08)"
      }}
    >
      <Container>
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Box>
            <Logo sx={{ color: "white" }} />
          </Box>
          <Box>
            <Social mb={{ mb: 2 }} />
            <Box
              sx={{ mb: 2, color: "white" }}
              itemScope
              itemType="http://schema.org/Organization"
            >
              <Box itemProp="name">Livepeer Inc.</Box>
              <Box
                itemProp="address"
                itemScope
                itemType="http://schema.org/PostalAddress"
              >
                <Box itemProp="streetAddress">16 Vestry St, Floor 4</Box>
                <span itemProp="addressLocality">New York, NY </span>
                <span itemProp="postalCode">10013</span>
              </Box>
              <a
                itemProp="email"
                sx={{ color: "white" }}
                href="mailto:contact@livepeer.org"
              >
                contact@livepeer.org
              </a>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
