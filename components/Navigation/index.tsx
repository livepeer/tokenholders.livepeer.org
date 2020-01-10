/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui";
import { NavLink } from "@theme-ui/components";
import LinkContainer from "next/link";
import Button from "../Button";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { route } = router;

  return (
    <Container sx={{ py: 2 }}>
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Flex sx={{ alignItems: "center" }}>
          <img sx={{ width: 28, color: "primary" }} src="/img/logo-icon.svg" />
          <Box
            sx={{
              fontFamily: "monospace",
              fontSize: 2,
              ml: 3
            }}
          >
            <LinkContainer href="/" passHref>
              <NavLink
                variant="nav"
                sx={{ letterSpacing: 1, fontWeight: "bold" }}
              >
                Tokenholders
              </NavLink>
            </LinkContainer>
          </Box>
        </Flex>
        <Flex
          sx={{
            alignItems: "center",
            display: ["none", "none", "flex"],
            justifyContent: "space-between"
          }}
        >
          <Box sx={{ display: "block", mr: 4 }}>
            <LinkContainer href="/community" passHref>
              <NavLink
                sx={{
                  lineHeight: 1.5,
                  px: 1,
                  bg:
                    route === "/community"
                      ? "rgba(0, 235, 135, 0.7)"
                      : "transparent"
                }}
                variant="nav"
              >
                Community
              </NavLink>
            </LinkContainer>
          </Box>
          <Box sx={{ display: "block", mr: 4 }}>
            <LinkContainer href="/resources" passHref>
              <NavLink
                sx={{
                  lineHeight: 1.5,
                  px: 1,
                  bg:
                    route === "/resources"
                      ? "rgba(0, 235, 135, 0.7)"
                      : "transparent"
                }}
                variant="nav"
              >
                Resources
              </NavLink>
            </LinkContainer>
          </Box>
          <Box sx={{ display: "block", mr: 4 }}>
            <LinkContainer href="/faq" passHref>
              <NavLink
                sx={{
                  lineHeight: 1.5,
                  px: 1,
                  bg:
                    route === "/faq" ? "rgba(0, 235, 135, 0.7)" : "transparent"
                }}
                variant="nav"
              >
                FAQ
              </NavLink>
            </LinkContainer>
          </Box>
          <Button as="a" target="__blank" href="https://explorer.livepeer.org">
            Open App
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};
