/** @jsx jsx */
import { jsx, Container, Styled, Flex } from "theme-ui";
import { Grid, Box, Text } from "@theme-ui/components";

export default ({
  center = false,
  title = null,
  body = null,
  image = null,
  button = null,
  ...props
}) => {
  return (
    <Box {...props}>
      <Container sx={{ pt: [40, 40, 60], pb: 80 }}>
        <Grid columns={[1, 1, 1, center ? 1 : 2]} sx={{ alignItems: "center" }}>
          <Box
            sx={{
              mb: [image ? 3 : 0, image ? 3 : 0, image ? 3 : 0, 0],
              ml: center ? "auto" : "initial",
              mr: center ? "auto" : "initial",
              maxWidth: ["100%", "100%", "100%", center ? 600 : 432],
              textAlign: [
                "center",
                "center",
                "center",
                center ? "center" : "left"
              ]
            }}
          >
            <Styled.h2 as="h1" sx={{ mb: 2 }}>
              {title}
            </Styled.h2>
            <Box sx={{ color: "muted", mb: button ? 3 : 0 }}>{body}</Box>
            {button && button}
          </Box>
          {image && image}
        </Grid>
      </Container>
    </Box>
  );
};
