/** @jsx jsx */
import { jsx, Box } from "theme-ui";

export default ({ text, ...props }) => (
  <Box
    {...props}
    sx={{
      display: "inline-flex",
      fontSize: 1,
      bg: "#EAEAEA",
      color: "#5C5C5C",
      borderRadius: 1000,
      py: "2px",
      px: 2
    }}
  >
    {text}
  </Box>
);
