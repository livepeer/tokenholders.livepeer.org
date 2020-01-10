import { stack as Menu } from "react-burger-menu";
import { bmBugerStyles } from "./styles";
import { Box } from "theme-ui";
import { Link } from "@theme-ui/components";
import LinkContainer from "next/link";

export default ({ ...props }) => (
  <Menu isOpen={false} {...props} styles={bmBugerStyles}>
    <Box>
      <LinkContainer href="/community" passHref>
        <Link sx={{ fontSize: 4, display: "block", mb: 4, color: "white" }}>
          Community
        </Link>
      </LinkContainer>
    </Box>
    <Box>
      <LinkContainer href="/resources" passHref>
        <Link sx={{ fontSize: 4, display: "block", mb: 4, color: "white" }}>
          Resources
        </Link>
      </LinkContainer>
    </Box>
    <Box>
      <LinkContainer href="/faq" passHref>
        <Link sx={{ fontSize: 4, display: "block", mb: 4, color: "white" }}>
          FAQ
        </Link>
      </LinkContainer>
    </Box>
  </Menu>
);
