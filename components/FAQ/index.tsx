/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { GoPlus, GoX } from "react-icons/go";
import Hello from "../../data/faqs/test.mdx";

export default ({ topic = null, question = null }) => {
  return (
    <Box>
      <Box sx={{ fontFamily: "monospace" }}>
        <Hello />
      </Box>
    </Box>
  );
};
