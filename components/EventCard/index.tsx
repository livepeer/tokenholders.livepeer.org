/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui";
import { AspectImage, Text } from "@theme-ui/components";
import moment from "moment";

export default ({
  title = null,
  date = null,
  image = null,
  location = null
}) => (
  <>
    <Box sx={{ maxHeight: 200, mb: 1 }}>
      <AspectImage
        sx={{
          maxHeight: 200,
          width: "100%",
          position: "relative"
        }}
        src={image}
      />
    </Box>
    <Flex sx={{ px: 1, alignItems: "center" }}>
      <Box
        sx={{
          flexDirection: "column",
          display: "inline-flex",
          textAlign: "center",
          boxShadow: "8px 8px 0px #FFFFFF",
          mr: 4
        }}
      >
        <Box
          sx={{
            fontSize: [1, 1, 2],
            textTransform: "uppercase"
          }}
        >
          {moment(date, "YYYY/MM/DD").format("MMM")}
        </Box>
        <Box
          sx={{
            lineHeight: "32px",
            fontFamily: "monospace",
            fontSize: [1, 1, 6]
          }}
        >
          {moment(date, "YYYY/MM/DD").format("DD")}
        </Box>
      </Box>
      <Box>
        <Text sx={{ mt: 1, fontSize: 4, lineHeight: "32px" }}>{title}</Text>
        <Text>{location}</Text>
      </Box>
    </Flex>
  </>
);
