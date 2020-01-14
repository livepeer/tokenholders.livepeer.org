/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import { Box, Text } from "@theme-ui/components";
import Chip from "../Chip";

export default ({
  cardStyle = true,
  reverse = false,
  chip = null,
  heading,
  body,
  image,
  callToAction,
  padding = true,
  ...props
}) => {
  return (
    <Box sx={{ mx: 2 }} {...props}>
      <Container
        sx={{
          textAlign: ["center", "center", "left"],
          py: [5, 5, 8],
          px: [3, 3, padding ? 8 : 0],
          bg: cardStyle ? "translucent" : "transparent",
          boxShadow: cardStyle ? "0px 0px 60px rgba(0, 0, 0, 0.08)" : "none"
        }}
      >
        <Flex
          sx={{
            flexDirection: [
              "column",
              "column",
              reverse ? "row-reverse" : "row"
            ],
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Box sx={{ width: ["100%", "100%", "50%"] }}>
            {chip && <Chip sx={{ mb: 3 }} text={chip} />}
            {heading}
            <Text sx={{ color: "muted", mb: 3 }}>{body}</Text>
            {callToAction && callToAction}
          </Box>
          <Box
            sx={{
              display: ["none", "none", "block"],
              mr: ["initial", "initial", reverse ? "auto" : "initial"],
              ml: ["initial", "initial", reverse ? "initial" : "auto"],
              maxWidth: ["100%", "100%", "50%"],
              img: { width: "100%" }
            }}
          >
            {image}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
